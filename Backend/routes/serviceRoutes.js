const express = require("express");
const Service = require("../models/Service");
const auth = require("../middleware/auth");

const router = express.Router();

// GET /api/services — Public (used by frontend)
router.get("/", async (req, res) => {
    try {
        const services = await Service.find().sort({ order: 1 });
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// GET /api/services/:id — Admin only
router.get("/:id", auth, async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// POST /api/services — Admin only
router.post("/", auth, async (req, res) => {
    try {
        const { image, title, description, bullets, order } = req.body;
        const service = new Service({ image, title, description, bullets, order });
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// PUT /api/services/:id — Admin only
router.put("/:id", auth, async (req, res) => {
    try {
        const { image, title, description, bullets, order } = req.body;
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            { image, title, description, bullets, order },
            { new: true }
        );
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// DELETE /api/services/:id — Admin only
router.delete("/:id", auth, async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.json({ message: "Service deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;

import express from "express";
import Slider from "../models/Slider.js";

const router = express.Router();


// POST /api/sliders
router.post("/", async (req, res) => {
    try {

        const slide = new Slider(req.body);

        await slide.save();

        res.json(slide);

    } catch (error) {
        res.status(500).json({ message: "Create Failed" });
    }
});


// GET /api/sliders
router.get("/", async (req, res) => {
    try {

        const slides = await Slider.find();

        res.json(slides);

    } catch (error) {
        res.status(500).json({ message: "Fetch Failed" });
    }
});


// DELETE /api/sliders/:id
router.delete("/:id", async (req, res) => {
    try {

        await Slider.findByIdAndDelete(req.params.id);

        res.json({ message: "Slide Deleted" });

    } catch (error) {
        res.status(500).json({ message: "Delete Failed" });
    }
});


export default router;
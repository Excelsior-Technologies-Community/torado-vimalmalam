const express = require("express");
const router = express.Router();
const Slider = require("../models/Slider");

router.post("/", async (req, res) => {

    const slide = new Slider(req.body);

    await slide.save();

    res.json(slide);
});

router.get("/", async (req, res) => {

    const slides = await Slider.find();

    res.json(slides);
});

router.delete("/:id", async (req, res) => {
    try {
        await Slider.findByIdAndDelete(req.params.id);
        res.json({ message: "Slide Deleted" });
    } catch (error) {
        res.status(500).json({ message: "Delete Failed" });
    }
});

module.exports = router;
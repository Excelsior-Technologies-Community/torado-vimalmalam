const Slider = require("../models/Slider");

exports.createSlider = async (req, res) => {
    try {
        const newSlider = new Slider({
            image: req.file.filename,
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag
        });

        await newSlider.save();
        res.json(newSlider);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getSlider = async (req, res) => {
    const sliders = await Slider.find();
    res.json(sliders);
};
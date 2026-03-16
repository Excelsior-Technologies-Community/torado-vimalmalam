import Slider, { find } from "../models/Slider";

export async function createSlider(req, res) {
    try {

        const slider = new Slider({
            image: req.body.image,
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag
        });

        await slider.save();

        res.json(slider);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export async function getSliders(req, res) {

    try {

        const sliders = await find();

        res.json(sliders);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }

}
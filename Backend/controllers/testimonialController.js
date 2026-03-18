import Testimonial from "../models/Testimonial.js";

// GET All
export const getTestimoanls = async (req, res) => {
    const data = await Testimonial.find().sort({createdAt: -1});
    res.json(data);
};

// CREATE
export const createTestimonial = async (req, res) => {
    const newItem = new Testimonial(req.body);
    console.log("BODY:", req.body);
    const saved = await newItem.save();
    res.json(saved);
};

// UPDATE
export const updateTestimonial = async (req, res) => {
    const updated = await Testimonial.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.json(updated);
};

// DELETE 
export const deleteTestimonial = async (req, res) => {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({message: "Deleted"});
};
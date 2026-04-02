import AllService from "../models/AllService.js";

// GET All Services
export const getAllServices = async (req, res) => {
    const allServices = await AllService.find();
    res.json(allServices);
};

// CREATE New Service
export const createService = async (req, res) => {
    const newService = new AllService(req.body);
    const saved = await newService.save();
    res.json(saved);
};

// UPDATE Service
export const updateService = async (req, res) => {
    const updated = await AllService.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
};

// DELETE Service
export const deleteService = async (req, res) => {
    await AllService.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
}
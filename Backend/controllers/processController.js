import Process from "../models/Process.js";

// GET All
export const getProcess = async (req, res) => {
    try {
        const data = await Process.find().sort({ createdAt: -1 });
        res.json(data);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// CREATE Data
export const createProcess = async (req, res) => {
    try {
        const newItem = new Process(req.body);
        const saved = await newItem.save();
        res.json(saved);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// UPDATE Data
export const updateProcess = async (req, res) => {
    try {
        const updated = await Process.findByIdAndUpdate(
            res.params.id,
            res.body,
            {new: true}
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

// DELETE Data
export const deleteProcess = async (req, res) => {
    try {
        await Process.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};
import Projects from "../models/Projects.js";


// GET All Projects
export const getProjects = async (req, res) => {
    try {

        const projects = await Projects.find().sort({ order: 1 });

        res.json(projects);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};


// CREATE Project
export const createProjects = async (req, res) => {
    try {

        const projects = new Projects(req.body);

        await projects.save();

        res.json(projects);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};


// UPDATE Project
export const updateProjects = async (req, res) => {
    try {

        const projects = await Projects.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(projects);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};


// DELETE Project
export const deleteProjects = async (req, res) => {
    try {

        await Projects.findByIdAndDelete(req.params.id);

        res.json({ message: "Deleted successfully" });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};
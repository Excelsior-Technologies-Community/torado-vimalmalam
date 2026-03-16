import Team from "../models/Team.js";

export const getTeam = async (req, res) => {
    try {
        const team = await Team.find();
        res.json(team);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const addTeam = async (req, res) => {
    try {
        const newMember = new Team(req.body);
        await newMember.save();
        res.json(newMember);
    } catch (err) {
        res.status(500).json(err);
    }
};

export const deleteTeam = async (req, res) => {
    try {
        await Team.findByIdAndDelete(req.params.id);
        res.json({ message: "Member Deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
};

export const updateTeam = async (req, res) => {
    try {
        const updated = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(500).json(err);
    }
};
const express = require("express");
const Manager = require("../models/Manager");
const auth = require("../middleware/auth");

const router = express.Router();


// GET manager (public)
router.get("/", async (req, res) => {
    try {
        const manager = await Manager.findOne();
        res.json(manager);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});


// UPDATE manager (admin only)
router.put("/", auth, async (req, res) => {
    try {

        const { name, role, profileImage, signatureImage } = req.body;

        let manager = await Manager.findOne();

        if (!manager) {

            manager = new Manager({
                name,
                role,
                profileImage,
                signatureImage
            });

        } else {

            manager.name = name;
            manager.role = role;
            manager.profileImage = profileImage;
            manager.signatureImage = signatureImage;

        }

        await manager.save();

        res.json(manager);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        order: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Projects", projectsSchema);
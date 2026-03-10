const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tag: {
        type: String
    }
}, {timestamps:true});

module.exports = mongoose.model("Slider", sliderSchema);
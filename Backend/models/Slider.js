import { Schema, model } from "mongoose";

const sliderSchema = new Schema({
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

export default model("Slider", sliderSchema);
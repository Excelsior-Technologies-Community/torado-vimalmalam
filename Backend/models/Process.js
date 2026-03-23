import mongoose from "mongoose"

const processSchema = new mongoose.Schema({
    heading: {
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
    }
}, { timestamps: true });

export default mongoose.model("Process", processSchema);
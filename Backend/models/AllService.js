import mongoose from "mongoose";

const AllServiceSchema = new mongoose.Schema({
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
    }
}, {tumestamps: true});

export default mongoose.model("AllServices", AllServiceSchema);
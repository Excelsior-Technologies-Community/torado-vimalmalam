import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema({
    image: {type: String, required: true},
    tag: {type: String, required: true},
    date: {type: String, required: true},
    comment: {type: String, default: "No Comments"},
    title: {type: String, required: true},
    desc: {type: String, required: true},
}, {timestamps: true});

export default mongoose.model("Blog", blogSchema);
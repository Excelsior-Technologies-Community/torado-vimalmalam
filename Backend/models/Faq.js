import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    questions: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model("FAQ", faqSchema);
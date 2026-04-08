import mongoose from "mongoose";

const featureSchema = new mongoose.Schema({
    label: String,
    available: Boolean
});

const planSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    img: String,
    description: String,

    // ✅ IMPORTANT
    features: [featureSchema]
}, { timestamps: true });

export default mongoose.model("PricingPlan", planSchema);
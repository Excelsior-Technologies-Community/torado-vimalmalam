import PricingPlan from "../models/PricingPlan.js";

// GET all pricing plans
export const getPricingPlans = async (req, res) => {
    try {
        const plans = await PricingPlan.find();
        res.json(plans);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch plans" });
    }
};

// CREATE a new pricing plan
export const createPricingPlan = async (req, res) => {
    try {
        console.log("BODY RECEIVED:", req.body); // 🔥 DEBUG

        const newPlan = new PricingPlan({
            name: req.body.name,
            price: req.body.price,
            img: req.body.img,
            description: req.body.description,

            // ✅ IMPORTANT FIX
            features: req.body.features || []
        });

        const saved = await newPlan.save();

        console.log("SAVED DATA:", saved); // 🔥 DEBUG

        res.json(saved);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to create plan" });
    }
};

// UPDATE a pricing plan
export const updatePricingPlan = async (req, res) => {
    try {
        console.log("UPDATE BODY:", req.body); // 🔥 DEBUG

        const updatedPlan = await PricingPlan.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                features: req.body.features || [] // ✅ IMPORTANT
            },
            { new: true }
        );

        res.json(updatedPlan);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to update plan" });
    }
};

// DELETE a pricing plan
export const deletePricingPlan = async (req, res) => {
    try {
        await PricingPlan.findByIdAndDelete(req.params.id);
        res.json({ message: "Pricing plan deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to delete plan" });
    }
};
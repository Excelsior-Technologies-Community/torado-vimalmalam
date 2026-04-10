import Faq from "../models/Faq.js";

// GET All FAQs
export const getFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find().sort({ createdAt: -1 });
        res.status(200).json(faqs);
    } catch (err) {
        res.status(500).json(err);
    };
};

// CREATE FAQ
export const createFaq = async (req, res) => {
    try {
        const {question, answer} = req.body;

        const faq = new Faq({question, answer});
        await faq.save();

        res.status(201).json(faq);
    } catch (err) {
        res.status(500).json(err);
    };
};

// UPDATE FAQs
export const updateFaq = async (req, res) => {
    try {
        const updated = await Faq.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json(err);
    };
};

// DELETE FAQ
export const deleteFaq = async (req, res) => {
    try {
        await Faq.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({message: "Deleted"});
    } catch (err) {
        res.status(500).json(err);
    };
};
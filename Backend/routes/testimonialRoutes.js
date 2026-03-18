import express from "express";

import {
    getTestimoanls,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial
} from "../controllers/testimonialController.js"

const router = express.Router();

router.get("/", getTestimoanls);
router.post("/", createTestimonial);
router.put("/:id", updateTestimonial);
router.delete("/:id", deleteTestimonial);

export default router;
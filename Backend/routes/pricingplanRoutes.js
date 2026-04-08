import express from 'express';
import {
    getPricingPlans,
    createPricingPlan,
    updatePricingPlan,
    deletePricingPlan
} from '../controllers/pricingplanController.js'

const router = express.Router();

router.get("/", getPricingPlans);
router.post("/", createPricingPlan);
router.put("/:id", updatePricingPlan);
router.delete("/:id", deletePricingPlan);

export default router;
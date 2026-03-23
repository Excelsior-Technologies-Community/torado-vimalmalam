import express from "express";

import {
    getProcess,
    createProcess,
    updateProcess,
    deleteProcess
} from "../controllers/processController.js";

const router = express.Router();

router.get("/", getProcess);
router.post("/", createProcess);
router.put("/:id", updateProcess);
router.delete("/:id", deleteProcess);

export default router;
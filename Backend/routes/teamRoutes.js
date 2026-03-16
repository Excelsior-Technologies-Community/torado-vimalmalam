import express from "express";
import { getTeam, addTeam, deleteTeam, updateTeam } from "../controllers/teamController.js";

const router = express.Router();

router.get("/", getTeam);
router.post("/", addTeam);
router.delete("/:id", deleteTeam);
router.put("/:id", updateTeam);

export default router;
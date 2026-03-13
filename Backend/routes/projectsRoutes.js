const express = require("express");

const { getProjects } = require("../controllers/projectsController")
const { createProjects } = require("../controllers/projectsController")
const { updateProjects } = require("../controllers/projectsController")
const { deleteProjects } = require("../controllers/projectsController")

const router = express.Router();

router.get("/", getProjects);
router.post("/", createProjects);
router.put("/:id", updateProjects);
router.delete("/:id", deleteProjects);

module.exports = router;
const express = require("express");
const dietController = require("../controllers/dietController");

const dietRoutes = express.Router();

dietRoutes.post("/generate", dietController.generateDietPlan);

module.exports = dietRoutes;

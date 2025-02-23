const express = require('express');
const router = express.Router();
const gym = require("../controllers/gym-controller");

router.post("createGym", middleware.authenticateRequest(), gym.createGym);
router.post("gymLogin", middleware.authenticateRequest(), gym.gymLogin);
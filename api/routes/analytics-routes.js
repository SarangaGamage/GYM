const express = require('express');
const router = express.Router();
const analytics = require("../controllers/analytics-controller");

router.get("getMemberList", middleware.authenticateRequest(), analytics.getMemberList);
router.get("getAnalyticsData", middleware.authenticateRequest(), analytics.getAnalyticsData);
router.get("getRevenueGrowth", middleware.authenticateRequest(), analytics.getRevenueGrowth);

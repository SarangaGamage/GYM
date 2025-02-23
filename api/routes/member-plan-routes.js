const express = require('express');
const router = express.Router();


router.post("addMemberPlan", middleware.authenticateRequest(), memberPlan.addMemberPlan);
router.post("editMemberPlan", middleware.authenticateRequest(), memberPlan.editMemberPlan);
router.post("deleteMemberPlan", middleware.authenticateRequest(), memberPlan.deleteMemberPlan);
router.get("getMemberPlanList", middleware.authenticateRequest(), memberPlan.gteMemberPlan);
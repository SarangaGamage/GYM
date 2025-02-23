const express = require('express');
const router = express.Router();
const member = require("../controllers/members-controller");

router.post("/memberLogin", middleware.authenticateRequest(), member.memberLogin);
router.post("/memberRegister", middleware.authenticateRequest(), member.memberRegistration);
router.post("/memberChekin", middleware.authenticateRequest,member.memberchekin);
router.post("/payment", middleware.authenticateRequest, member.payment);
router.get("/getActiveMembers", middleware.authenticateRequest(), member.getActiveMembers);

module.exports = router;

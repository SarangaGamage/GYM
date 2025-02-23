const express = require('express');
const router = express.Router();

router.post("addStaff", middleware.authenticateRequest(), staff.addStaff);
router.post("staffLogin", middleware.authenticateRequest(), staff.staffLogin);
router.post("editStaff", middleware.authenticateRequest(), staff.editStaff);
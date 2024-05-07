const express = require("express");
const adminAuthRoutes = require("./auth");
const { allowedRoles } = require("../../middlewares/roleAuth");
const requireAuth = require("../../middlewares/requireAuth");

const router = express.Router();

router.use(requireAuth);
router.use(allowedRoles(["admin"]));
router.use(adminAuthRoutes);

module.exports = router;

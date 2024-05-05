const express = require("express");
const { allowedRoles } = require("../../middlewares/roleAuth");
const requireAuth = require("../../middlewares/requireAuth");
const productRoutes = require("./product");
const router = express.Router();

router.use(requireAuth);
router.use(productRoutes);

module.exports = router;

const express = require("express");
const productRoutes = require("./product");
const requireAuth = require("../../middlewares/requireAuth");

const router = express.Router();

router.use(productRoutes);

module.exports = router;

const express = require("express");
const productRoutes = require("./product");
const productVendorRoutes = require("./productVendor");

const router = express.Router();

router.use(productRoutes);
router.use(productVendorRoutes);

module.exports = router;

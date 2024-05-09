const express = require("express");
const {
  getProductVendor,
} = require("../../controllers/product/productOrderController");
const router = express.Router();

router.get("/product-vendor/:id", getProductVendor);

module.exports = router;

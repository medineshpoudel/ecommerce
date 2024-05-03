const express = require("express");
const router = express.Router();

const {
  postProductController,
} = require("../../controllers/product/productController");

router.post("/product", postProductController);

module.exports = router;

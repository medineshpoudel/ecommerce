const express = require("express");
const {
  postProductController,
  getProductsOfVedor,
  getAllProducts,
  updateProductController,
  deleteProductController,
} = require("../../controllers/product/productController");

const router = express.Router();

router.post("/product", postProductController);
router.patch("/product", updateProductController);
router.delete("/product", deleteProductController);
router.get("/product", getProductsOfVedor);
router.get("/product-all", getAllProducts);

module.exports = router;

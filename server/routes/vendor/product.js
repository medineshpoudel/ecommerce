const express = require("express");
const multer = require("multer");
const {
  postProductController,
  getProductsOfVedor,
  getAllProducts,
  updateProductController,
  deleteProductController,
} = require("../../controllers/product/productController");

const {
  getProductOrdersController,
  updateProductOrderController,
  deleteProductOrderController,
} = require("../../controllers/product/productOrderController");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/product", postProductController);
router.patch("/product", updateProductController);
router.delete("/product", deleteProductController);
router.get("/product", getProductsOfVedor);
router.get("/product-all", getAllProducts);
router.get("/product-order", getProductOrdersController);
router.patch("/product-order", updateProductOrderController);
router.delete("/product-order", deleteProductOrderController);

module.exports = router;

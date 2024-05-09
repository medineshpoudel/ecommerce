const express = require("express");
const {
  getAllProducts,
  getProductController,
} = require("../../controllers/product/productController");
const {
  postProductOrderController,
} = require("../../controllers/product/productOrderController");
const requireAuth = require("../../middlewares/requireAuth");
const router = express.Router();

router.get("/product-all", getAllProducts);

router.get("/best-selling", () => {});
router.get("/featured-product", () => {});
router.get("/product-order/:id", requireAuth, getProductController);
router.post("/product-order/:id", requireAuth, postProductOrderController);

module.exports = router;

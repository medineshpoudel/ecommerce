const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const { allowedRoles } = require("../middlewares/roleAuth");
const router = express.Router();
const {
  postProductController,
} = require("../controllers/product/productController");

router.use(requireAuth);
router.get("/", (req, res) => {
  res.send("product");
});
router.post("/", allowedRoles(["admin"]), postProductController);
router.get("/best-selling", () => {});
router.get("/featured-product", () => {});

module.exports = router;

const express = require("express");
const multer = require("multer");
const requireAuth = require("../middlewares/requireAuth");
const { allowedRoles } = require("../middlewares/roleAuth");
const router = express.Router();
const {
  postProductController,
} = require("../controllers/product/productController");

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/products");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;

router.use(requireAuth);
router.get("/", (req, res) => {
  res.send("product");
});
router.post(
  "/",
  upload.fields([
    { name: "image_1" },
    { name: "image_2" },
    { name: "image_3" },
  ]),
  allowedRoles(["admin"]),
  postProductController
);
router.get("/best-selling", () => {});
router.get("/featured-product", () => {});

module.exports = router;

const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const { allowedRoles } = require("../middlewares/roleAuth");
const router = express.Router();

router.use(requireAuth);
router.get("/", (req, res) => {
  res.send("product");
});
router.post("/", allowedRoles(["admin"]), (req, res) => {});
router.get("/best-selling", () => {});
router.get("/featured-product", () => {});

module.exports = router;

const express = require("express");
const {
  upgradeUserController,
} = require("../../controllers/auth/authController");

const {
  getRequestVendorController,
  acceptRequestVendorController,
  rejectRequestVendorController,
} = require("../../controllers/auth/requestVendorController");

const router = express.Router();

router.get("/request-vendor", getRequestVendorController);
router.post("/upgrade-vendor", upgradeUserController);
router.get("/accept-vendor-requirest/:id", acceptRequestVendorController);
router.get("/reject-vendor-request/:id", rejectRequestVendorController);

module.exports = router;

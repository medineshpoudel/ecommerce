const express = require("express");
const {
  loginController,
  signUpController,
  logoutController,
  upgradeUserController,
  getCurrentLoggedInUser,
  verifyTokenController,
} = require("../controllers/auth/authController");
const { allowedRoles } = require("../middlewares/roleAuth");
const requireAuth = require("../middlewares/requireAuth");
const handleRefreshToken = require("../controllers/auth/refreshTokenController");
const {
  requestSignupController,
  getRequestVendorController,
  acceptRequestVendorController,
  rejectRequestVendorController,
} = require("../controllers/auth/requestVendorController");

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", requestSignupController);
// router.post("/signup", signUpController);
router.post("/logout", requireAuth, logoutController);
router.get(
  "/requestVendor",
  requireAuth,
  allowedRoles(["admin"]),
  getRequestVendorController
);
router.post("/upgradeUser", upgradeUserController);
router.get(
  "/acceptVendorRequest/:id",
  requireAuth,
  allowedRoles(["admin"]),
  acceptRequestVendorController
);
router.get(
  "/rejectVendorRequest/:id",
  requireAuth,
  allowedRoles(["admin"]),
  rejectRequestVendorController
);
router.get("/user", requireAuth, getCurrentLoggedInUser);
router.get("/refresh", requireAuth, handleRefreshToken);
router.post("/verify-token", verifyTokenController);
module.exports = router;

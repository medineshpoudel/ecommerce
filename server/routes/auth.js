const express = require("express");
const {
  loginController,
  signUpController,
  logoutController,
  upgradeUserController,
  getCurrentLoggedInUser,
  verifyTokenController,
} = require("../controllers/auth/authController");
const requireAuth = require("../middlewares/requireAuth");
const handleRefreshToken = require("../controllers/auth/refreshTokenController");
const {
  requestSignupController,
} = require("../controllers/auth/requestVendorController");

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", signUpController);

//vendor authentication
router.post("/vendor/signup", requestSignupController);

router.post("/upgradeUser", upgradeUserController);
router.use(requireAuth);
router.post("/logout", logoutController);
router.get("/user", getCurrentLoggedInUser);
router.get("/refresh", handleRefreshToken);
router.post("/verify-token", verifyTokenController);
module.exports = router;

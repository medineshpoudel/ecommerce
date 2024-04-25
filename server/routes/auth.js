const express = require("express");
const {
  loginController,
  signUpController,
  getCurrentLoggedInUser,
  logoutController,
} = require("../controllers/auth/authController");
const requireAuth = require("../middlewares/requireAuth");
const handleRefreshToken = require("../controllers/auth/refreshTokenController");

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", signUpController);
router.get("/user", requireAuth, getCurrentLoggedInUser);
router.post("/logout", requireAuth, logoutController);
router.get("/refresh", requireAuth, handleRefreshToken);

module.exports = router;

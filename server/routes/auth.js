const express = require("express");
const {
  loginController,
  signUpController,
  getCurrentLoggedInUser,
} = require("../controllers/auth/authController");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", signUpController);
router.get("/user", requireAuth, getCurrentLoggedInUser);

module.exports = router;

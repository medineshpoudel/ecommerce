const express = require("express");
const {
  loginController,
  signUpController,
  logoutController,
  upgradeUserController,
  acceptUpgradeReqController,
  rejectUpgradeReqController,
  getUpgradeUserController,
} = require("../controllers/auth/authController");
const { allowedRoles } = require("../middlewares/roleAuth");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", signUpController);
router.post("/logout", logoutController);
router.get(
  "/upgradeUser",
  requireAuth,
  allowedRoles(["admin"]),
  getUpgradeUserController
);
router.post("/upgradeUser", upgradeUserController);
router.get(
  "/accept/:id",
  requireAuth,
  allowedRoles(["admin"]),
  acceptUpgradeReqController
);
router.get(
  "/reject/:id",
  requireAuth,
  allowedRoles(["admin"]),
  rejectUpgradeReqController
);

module.exports = router;

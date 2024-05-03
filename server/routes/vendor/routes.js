const express = require("express");
const { allowedRoles } = require("../../middlewares/roleAuth");
const requireAuth = require("../../middlewares/requireAuth");

const router = express.Router();

router.use(requireAuth);
router.use(allowedRoles(["vendor"]));

module.exports = router;

const jwt = require("jsonwebtoken");
const User = require("../model/User");

const requireAuth = async (req, res, next) => {
  const authorization = req.headers["authorization"];
  if (!authorization)
    return res.status(401).json({ message: " Authorization required" });

  const token = authorization.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "Authorization token required" });
  try {
    const { userInfo } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = await User.findById({ _id: userInfo.userId }).select(
      "_id, username , role"
    );
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = requireAuth;

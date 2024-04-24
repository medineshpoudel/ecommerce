const jwt = require("jsonwebtoken");
const User = require("../model/User");
const TokenBlacklist = require("../model/TokenBlacklist");

const requireAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Authorization token required" });
  }
  
  const isTokenBlackList = await TokenBlacklist.find({ token });
  if (isTokenBlackList.length) {
    return res.status(401).json({ message: "Authorization token is invalid" });
  }

  try {
    const { userInfo } = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = await User.findById({ _id: userInfo.userId }).select(
      "_id, username , role"
    );
  } catch (error) {
    return res.status(401).json({ error: "Authorization required" });
  }
  next();
};

module.exports = requireAuth;

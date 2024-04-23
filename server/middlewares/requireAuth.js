const jwt = require("jsonwebtoken");
const User = require("../model/User");
const TokenBlacklist = require("../model/TokenBlacklist");

// const requireAuth = async (req, res, next) => {
//   const { authorization } = req.headers;z
//   if (!authorization) {
//     return res.status(401).json({ message: "Authorization token required" });
//   }
//   const token = authorization?.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ message: "Authorization token required" });
//   }
//   const isTokenBlackList = await TokenBlacklist.find({ token });
//   if (isTokenBlackList.length) {
//     return res.status(401).json({ message: "Authorization token is invalid" });
//   }

//   try {
//     const { userInfo } = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = await User.findById({ _id: userInfo.userId }).select(
//       "_id, username , role"
//     );
//   } catch (error) {
//     return res.status(401).json({ error: "Authorization required" });
//   }
//   next();
// };

const requireAuth = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token)
    return res.status(401).json({ message: "Authorization token required" });
  const isTokenBlackList = await TokenBlacklist.find({ token });
  if (isTokenBlackList.length) {
    return res.status(401).json({ message: "Authorization token is invalid" });
  }

  try {
    const { userInfo } = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = await User.findById({ _id: userInfo.userId }).select(
      "_id, username , role"
    );
    next();
  } catch (error) {
    res.clearCookie("jwt");
    return next(error);
  }
  next();
};

module.exports = requireAuth;

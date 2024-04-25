const jwt = require("jsonwebtoken");
const User = require("../../model/User");
const { generateAccessToken } = require("../../utilities/generateToken");

const handleRefreshToken = async (req, res, next) => {
  const cookies = req.cookies;
  const { _id } = req.user;
  const refreshToken = cookies?.jwt;
  if (!refreshToken)
    return res
      .statu(401)
      .json({ message: "Authorization failed, require refresh token." });

  try {
    const user = await User.findOne({ refreshToken });
    if (!User) return res.status(403).json({ message: "forbidden" });
    const { userId } = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    if (user._id != userId) {
      res.status(403).json({ message: "forbidden" });
    }
    const accessToken = generateAccessToken(user);
    res.status(200).json({ accessToken });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = handleRefreshToken;

const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY,
} = require("../constants/constants");

const generateAccessToken = (newUser) => {
  const accessToken = jwt.sign(
    {
      userInfo: {
        userId: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
  return accessToken;
};

const generateRefreshToken = (newUser) => {
  const refreshToken = jwt.sign(
    {
      userId: newUser._id,
      email: newUser.email,
      role: newUser.role,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken };

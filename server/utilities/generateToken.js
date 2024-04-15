const jwt = require("jsonwebtoken");

const generateAccessToken = (newUser) => {
  const accessToken = jwt.sign(
    {
      userInfo: {
        userId: newUser._id,
        email: newUser.email,
        role: newUser.role,
      },
    },
    process.env.TOKEN_SECRET,
    { expiresIn: "1d" }
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
    { expiresIn: "5d" }
  );

  return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken };

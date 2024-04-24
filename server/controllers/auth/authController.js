const User = require("../../model/User");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utilities/generateToken");
const UpgradeReq = require("../../model/UpgradeReq");

const signUpController = async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Please enter valid email." });
  }

  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      error:
        "Password must contain a number, special character uppercase letter",
    });
  }

  const userExits = await User.findOne({ email });
  if (userExits) {
    return res.status(400).json({ error: "User already exists" });
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const newUser = await User.create({ username, email, password: hash, role });

  const accessToken = generateAccessToken(newUser);

  const refreshToken = generateRefreshToken(newUser);

  // Create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true, //accessible only by web server
    secure: true, //https
    sameSite: "None", //cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
  });

  res.status(200).json({
    username: newUser.username,
    email: newUser.email,
    role: newUser.role[0],
    token: accessToken,
  });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Please enter valid email." });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Invalid credentails" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ error: "Invalid Credentials" });
  }

  const accessToken = generateAccessToken(user);

  const refreshToken = generateRefreshToken(user);

  // Create secure cookie with refresh token
  res.cookie("jwt", refreshToken, {
    httpOnly: true, //accessible only by web server
    secure: true, //https
    sameSite: "None", //cross-site cookie
    maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
  });

  res.status(200).json({
    username: user.username,
    email: user.email,
    role: user.role[0],
    token: accessToken,
  });
};

const logoutController = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  try {
    await TokenBlacklist.create({ token: cookies.jwt });
    res.clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "None" });
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getUpgradeUserController = async (req, res, next) => {
  try {
    const upgradeReq = await UpgradeReq.find({});
    res.status(200).json({
      upgradeReq,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const upgradeUserController = async (req, res, next) => {
  try {
    const userId = req.body.user;
    await UpgradeReq.create({ user: userId });

    res.status(200).json({
      success: true,
      message: "Request submitted to upgrade.",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const acceptUpgradeReqController = async (req, res, next) => {
  try {
    const reqId = req.params.id;
    const upgradeUser = await UpgradeReq.find({ _id: reqId });
    if (upgradeUser && upgradeUser?.length === 0) {
      return res.status(404).json({
        error: `No upgrade request found with the id of ${req.params.id}`,
      });
    }
    const user = await User.findByIdAndUpdate(
      { _id: upgradeUser[0].user },
      { role: "moderator" },
      { new: true }
    );

    await UpgradeReq.deleteOne({ _id: reqId });

    res.status(200).json({
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const rejectUpgradeReqController = async (req, res, next) => {
  try {
    const reqId = req.params.id;
    const user = await UpgradeReq.find({ _id: reqId });
    if (user && user?.length === 0) {
      return res.status(404).json({
        error: `No upgrade request found with the id of ${req.params.id}`,
      });
    }

    await UpgradeReq.deleteOne({ _id: reqId });

    res.status(200).json({
      success: true,
      message: "Sucessfully deleted the user upgrade request.",
    });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  loginController,
  signUpController,
  logoutController,
  getUpgradeUserController,
  upgradeUserController,
  acceptUpgradeReqController,
  rejectUpgradeReqController,
};

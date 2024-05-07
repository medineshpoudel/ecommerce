const User = require("../../model/User");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utilities/generateToken");
const UpgradeReq = require("../../model/UpgradeReq");

const signUpController = async (req, res, next) => {
  try {
    const { username, email, password, first_name, last_name, phone_no } =
      req.body;
    if (
      !username ||
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !phone_no
    ) {
      throw new Error("All fields are required");
    }
    if (!validator.isEmail(email)) {
      throw new Error("Please enter a valid email.");
    }

    if (!validator.isStrongPassword(password)) {
      throw new Error(
        "Password must contain a number, special character, and uppercase letter"
      );
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User with email already exists");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      ...req.body,
      password: hash,
    });

    const accessToken = await generateAccessToken(newUser);

    const refreshToken = await generateRefreshToken(newUser);

    // Create secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true, // accessible only by the web server
      secure: true, // HTTPS
      sameSite: "None", // cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiry: set to match refreshToken expiry
    });

    res.status(200).json({
      username: newUser.username,
      email: newUser.email,
      role: newUser.role[0],
      token: accessToken,
    });
    User.findOneAndUpdate({ email }, { refreshToken });
  } catch (error) {
    next(error); // Pass any caught errors to the error handler middleware
  }
};

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("All fields are required");
    }
    if (!validator.isEmail(email)) {
      throw new Error("Please enter a valid email.");
    }

    if (!validator.isStrongPassword(password)) {
      throw new Error(
        "Password must contain an uppercase, a special character, and a number"
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User with email does not exist");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Invalid credentials");
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Create secure cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true, // accessible only by the web server
      secure: true, // HTTPS
      sameSite: "None", // cross-site cookie
      maxAge: 7 * 24 * 60 * 60 * 1000, // cookie expiry: set to match refreshToken expiry
    });

    res.status(200).json({
      username: user.username,
      email: user.email,
      role: user.role[0],
      token: accessToken,
    });

    await User.findOneAndUpdate({ email }, { refreshToken });
  } catch (error) {
    next(error); // Pass any caught errors to the error handler middleware
  }
};

const getCurrentLoggedInUser = async (req, res, next) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const logoutController = async (req, res, next) => {
  const { _id } = req.user;
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;
  const user = await User.findById(_id);
  if (user?.refreshToken !== refreshToken) {
    res.clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "None" });
    return res.status(204).json({ message: "JWT cleared" });
  }
  try {
    await User.findOneAndUpdate({ _id }, { refreshToken: "" });
    res.clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "None" });
    res.status(204).json({ message: "JWT cleared" });
  } catch (error) {
    next(error);
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
      { role: "vendor" },
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

const verifyTokenController = async (req, res, next) => {
  const { token } = req.body;
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({ message: "user verified" });
  } catch (error) {
    next(error);
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
  getCurrentLoggedInUser,
  verifyTokenController,
};

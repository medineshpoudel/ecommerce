const User = require("../../model/User");
const UpgradeReq = require("../../model/UpgradeReq");

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

module.exports = {
  getUpgradeUserController,
  upgradeUserController,
  acceptUpgradeReqController,
  rejectUpgradeReqController,
};

const allowedRoles = (...roles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;
    if (userRole[0] === "admin") {
      return next();
    }
    if (!roles.includes(userRole)) {
      return res
        .status(401)
        .json({ error: "You do not have permission access" });
    }
    next();
  };
};

module.exports = { allowedRoles };

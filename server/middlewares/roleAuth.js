const allowedRoles = (roles) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    if (!roles.find((role) => role === userRole)) {
      res.status(401).json({ error: "You do not have permission access" });
    }
    next();
  };
};

module.exports = { allowedRoles };

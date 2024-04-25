const { SOMETHING_WENT_WRONG, NOT_FOUND } = require("../constants/constants");

let notFoundHandled = false;

const notFoundHandler = (req, res, next) => {
  const error = new Error(NOT_FOUND);
  error.statusCode = 404;
  res.status(404);
  notFoundHandled = true;
  return next(error);
};

const errorHandler = (error, req, res, next) => {
  if (!notFoundHandled) {
    const errStatus = error.statusCode || 500;
    const errMsg = error.message || SOMETHING_WENT_WRONG;
    res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
      stack: process.env.NODE_ENV === "development" ? error.stack : {},
    });
  }
};

module.exports = { errorHandler, notFoundHandler };

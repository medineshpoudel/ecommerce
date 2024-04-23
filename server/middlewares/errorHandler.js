import { SOMETHING_WENT_WRONG, NOT_FOUND } from "../constants/constants";

const notFoundHandler = (req, res, next) => {
  const error = new Error(NOT_FOUND);
  error.statusCode = 404;
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const errStatus = error.statusCode || 500;
  const errMsg = error.message || SOMETHING_WENT_WRONG;
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? error.stack : {},
  });
};
export { errorHandler, notFoundHandler };

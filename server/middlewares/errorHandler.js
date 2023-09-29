const BadRequestError = require('./customError');

const handleError = (err, req, res, next) => {
  if (err instanceof BadRequestError) {
    res.status(400).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(503).json({
      status: err.status,
      message: err.message,
    });
  }
  next(err);
};

module.exports = handleError;

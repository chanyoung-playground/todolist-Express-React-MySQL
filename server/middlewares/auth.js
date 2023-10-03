const BadRequestError = require('../middlewares/customError');
const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    throw new BadRequestError(400, 'Access Denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.SECRET_ATOKEN);
    req.user = decoded;
    next();
  } catch (error) {
    throw new BadRequestError(400, 'Invalid Token..');
  }
};

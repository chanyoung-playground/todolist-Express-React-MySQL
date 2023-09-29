const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const dotenv = require('dotenv');
dotenv.config();

const tokenList = {};

exports.generatePassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(password, salt);

  return hasedPassword;
};

exports.generateAccessToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_ATOKEN, {
    expiresIn: '1h',
  });
};

exports.generateRefreshToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.SECRET_RTOKEN, {
    expiresIn: '2h',
  });
};

exports.registerToken = (refreshToken, accessToken) => {
  tokenList[refreshToken] = {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

exports.removeToken = (refreshToken) => {
  delete tokenList[refreshToken];
};

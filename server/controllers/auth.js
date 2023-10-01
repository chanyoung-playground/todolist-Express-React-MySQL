const db = require('../utils/db');
const bcrypt = require('bcrypt');
const BadRequestError = require('../middlewares/customError');
const { verify } = require('jsonwebtoken');

const {
  generateAccessToken,
  generatePassword,
  generateRefreshToken,
  registerToken,
} = require('../utils/auth');

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [[existedUser]] = await db.query(sql, [email]);

    console.log(existedUser);

    if (!existedUser.email) {
      throw new BadRequestError(400, 'User not found');
    }

    if (!existedUser.password) {
      throw new BadRequestError(400, 'Invalid Password');
    }

    const id = await db.query('SELECT LAST_INSERT_ID()');

    const accessToken = generateAccessToken(id, email);
    const refreshToken = generateRefreshToken(id, email);
    registerToken(refreshToken, accessToken);
    const decoded = verify(accessToken, process.env.SECRET_ATOKEN);
    // res.cookie('refreshToken', refreshToken, {
    //   path: '/',
    //   httpOnly: true,
    //   maxAge: 3600 * 24 * 30 * 1000,
    // });
    // return res.send({ content: decoded, accessToken, user });

    res
      .cookie('refreshToken', refreshToken, {
        path: '/',
        httpOnly: true,
        maxAge: 3600 * 24 * 30 * 1000,
      })
      .header('Authorization', accessToken);

    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const hasedPassword = await generatePassword(password);
    const readSql = 'SELECT * FROM users WHERE email = ?';
    const [[existedUser]] = await db.query(readSql, [email]);

    if (existedUser) {
      throw new BadRequestError(401, 'Duplicated User');
    }

    const createSql = 'INSERT INTO users(email, password) VALUES(?, ?)';
    await db.query(createSql, [email, hasedPassword]);

    res.status(200).json({
      status: 'success',
      message: '회원가입 성공',
    });
  } catch (err) {
    next(err);
  }
};

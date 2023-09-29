const db = require('../utils/db');

exports.createTodo = (req, res, next) => {
  console.log(req.body);
};

exports.getTodos = async (req, res, next) => {
  try {
    const sql = 'SELECT * FROM todo';
    const [result] = await db.query(sql);
    console.log(result);
    res.status(200).json({
      status: 'success',
      length: result?.length,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = (req, res, next) => {
  console.log(req.body);
};

exports.deleteTodo = (req, res, next) => {
  console.log(req.body);
};

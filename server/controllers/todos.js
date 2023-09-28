const connection = require('../utils/db');

exports.createTodo = (req, res, next) => {
  console.log(req.body);
};

exports.getTodos = (req, res, next) => {
  connection.query('SELECT * FROM todolist', (err, data, fields) => {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: 'success',
      length: data?.length,
      data: data,
    });
  });
};

exports.updateTodo = (req, res, next) => {
  console.log(req.body);
};

exports.deleteTodo = (req, res, next) => {
  console.log(req.body);
};

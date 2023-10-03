const db = require('../utils/db');

exports.createTodo = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { todo } = req.body;
    console.log(id, todo);
    const createSql =
      'INSERT INTO todos (todo, isCompleted ,user_id) VALUES(?, true, ?)';
    await db.query(createSql, [todo, id]);

    const readSql = `SELECT todos.id as id, todo, isCompleted, user_id FROM todos 
    JOIN users ON users.id = todos.user_id`;
    const [result] = await db.query(readSql);

    console.log(result);

    res
      .status(201)
      .json({ status: 'success', message: 'todo 생성', data: result });
  } catch (error) {
    next(error);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const sql = 'SELECT * FROM todos';
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

const express = require('express');

const todosController = require('../controllers/todos');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.post('/', authMiddleware.authenticate, todosController.createTodo);
router.get('/', authMiddleware.authenticate, todosController.getTodos);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;

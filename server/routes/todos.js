const express = require('express');

const todosController = require('../controllers/todos');

const router = express.Router();

router.post('/', todosController.createTodo);
router.get('/', todosController.getTodos);
router.put('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;

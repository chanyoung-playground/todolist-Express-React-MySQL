import React, { useState } from 'react';
import { Button } from '../../styles/common';
import * as S from './style';
import { createTodo } from '../../apis/todo';

function TodoHeader({ todos, setTodos }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createTodo(todo);
    console.log(res);
    setTodos([...todos, res]);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <S.Container>
      <S.Header>Todolist</S.Header>
      <S.InputArea>
        <form onSubmit={handleSubmit}>
          <S.Input
            onChange={handleChange}
            value={todo}
            type='text'
            data-testid='new-todo-input'
          />
          <Button type='submit' data-testid='new-todo-add-button'>
            추가
          </Button>
        </form>
      </S.InputArea>
    </S.Container>
  );
}

export default TodoHeader;

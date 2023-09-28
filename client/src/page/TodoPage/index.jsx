import React from 'react';
import TodoHeader from '../../components/TodoHeader';
import TodoList from '../../components/TodoList';
import useTodos from '../../hooks/useTodos';
import Loading from '../../components/Common/Loading';
import { Button, Wrapper } from '../../styles/common';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

function TodoPage() {
  const [todos, setTodos, isLoading] = useTodos();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/signin');
  };

  return (
    <Wrapper>
      <TodoHeader todos={todos} setTodos={setTodos} />
      {isLoading ? <Loading /> : <TodoList todos={todos} setTodos={setTodos} />}
      <S.ButtonWrapper>
        <Button onClick={handleLogout}>로그아웃</Button>
      </S.ButtonWrapper>
    </Wrapper>
  );
}

export default TodoPage;

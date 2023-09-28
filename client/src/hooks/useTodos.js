import { useEffect } from 'react';
import { useState } from 'react';
import { getTodos } from '../apis/todo';

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchTodos = async () => {
    setIsLoading(true);
    const data = await getTodos();
    setTodos(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return [todos, setTodos, isLoading];
}

export default useTodos;

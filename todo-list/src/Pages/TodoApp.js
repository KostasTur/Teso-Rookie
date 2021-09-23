// React hooks
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
// Libs
import { v4 as uuidv4 } from 'uuid';
// Components
import TodoList from '../Components/TodoList';
import TodoInput from '../Components/TodoInput';

// Styled components
const Main = styled.main`
  height: 100vh;
  padding: 1rem;
  min-height: 50vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: clamp(50%, 700px, 90%);
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 5px 5px 5px 2px #9b979b;
  max-width: 540px;
  background-color: white;

  h4,
  h5 {
    text-align: center;
    margin-bottom: 0.5em;
  }
`;

const TodoApp = () => {
  // states
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const LOCAL_STORAGE_KEY = 'todoApp.todos';
  // side Effects
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // custom functions
  const deleteTodo = (id) => {
    console.log('delete');
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };
  const clearComplete = () => {
    const completedTodosExist = todos.find((todo) => todo.done === true);
    const notCompletedTodos = todos.filter((todo) => todo.done === false);
    if (!completedTodosExist) return alert('You have no completed todos!');
    setTodos(notCompletedTodos);
  };
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.done = !todo.done;
    setTodos(newTodos);
  };
  const handleAddTodo = () => {
    console.log('handle todo');
    const name = todoNameRef.current.value;
    if (name === '') return alert('please insert todo name!');
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, done: false }];
    });
    // todoNameRef.current.value = '';
  };

  return (
    <Main>
      <Wrapper>
        {todos.length === 0 ? (
          <h4>Please insert todo name and click submit!</h4>
        ) : (
          <h4>
            You have {todos.filter((todo) => todo.done === false).length} todos
            left!
          </h4>
        )}
        <TodoList
          todos={todos.filter((todo) => !todo.done)}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        {todos.find((todo) => todo.done) && <h5>COMPLETED</h5>}
        <TodoList
          todos={todos.filter((todo) => todo.done)}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />

        <TodoInput
          ref={todoNameRef}
          handleAddTodo={handleAddTodo}
          clearComplete={clearComplete}
        />
      </Wrapper>
    </Main>
  );
};

export default TodoApp;

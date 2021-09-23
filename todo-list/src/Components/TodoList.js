import React from 'react';
import Todo from '../Components/Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    );
  });
};

export default TodoList;

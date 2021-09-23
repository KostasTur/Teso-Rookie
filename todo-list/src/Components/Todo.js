import React from 'react';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';

const Task = styled.div`
  border-bottom: 2px solid rgba(191, 191, 191);
  padding: 3px;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;
const TaskText = styled.label`
  margin-left: 1rem;
  display: inline-block;
`;
const CheckBox = styled.input`
  display: inline-block;
  vertical-align: 'middle';
`;
const Button = styled.button`
  padding: 0;
  font-size: 20px;
  border: none;
  color: #777777;
  background-color: transparent;
  cursor: pointer;
`;

const Todo = ({ todo: { id, name, done }, toggleTodo, deleteTodo }) => {
  return (
    <Task>
      <div>
        <CheckBox
          type='checkBox'
          checked={done}
          onChange={() => toggleTodo(id)}
        />
        <TaskText done={done}>{name}</TaskText>
      </div>

      <Button onClick={() => deleteTodo(id)}>
        <MdCancel style={{ verticalAlign: 'middle' }} />
      </Button>
    </Task>
  );
};

export default Todo;

import React from 'react';
import styled from 'styled-components';

// --- styled-components
const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 1em;
  margin-bottom: 1em;
`;
const Input = styled.input``;
const Button = styled.button`
  border: none;
  padding: 5px;
  background-color: black;
  color: white;
`;
const TodoInput = React.forwardRef(({ handleAddTodo, clearComplete }, ref) => {
  return (
    <Wrapper>
      <Form>
        <Input type='text' ref={ref} />
        <Button onClick={handleAddTodo}>Submit</Button>
      </Form>
      <Button onClick={clearComplete}>Clear Completed</Button>
    </Wrapper>
  );
});

export default TodoInput;

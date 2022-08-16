import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

export default React.memo(function TodoList({ todo_list }) {
  return (
    <Block>
      <ul>
        {todo_list.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </Block>
  );
});

const Block = styled.div`
  flex: 1;
`;

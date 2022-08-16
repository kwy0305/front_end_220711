import React, { createContext, useMemo } from "react";
import styled from "styled-components";
import { useTodoState } from "../../contexts/useTodoContext";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export const TodoContext = createContext(null);

export default function TodoBox() {
  const { input, todo_list } = useTodoState();

  // done값이 false인 todo만 배열로 모아서 length값 할당
  const doneCount = useMemo(
    // return 값이 있는 콜백함수
    () => {
      return todo_list.filter((todo) => todo.done).length;
    },
    [todo_list]
  );

  return (
    <Block>
      <TodoHeader totalCount={todo_list.length} doneCount={doneCount} />
      <TodoList todo_list={todo_list} />
      <TodoInput input={input} />
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

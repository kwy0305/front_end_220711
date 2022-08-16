import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import React, { useState } from "react";
import { useTodoDispatch, useTodoNextId } from "../../contexts/useTodoContext";

export default function TodoInput({ input }) {
  const [active, setActive] = useState(false);
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const createTodo = () => {
    dispatch({ type: "create_todo", id: nextId.current });
    nextId.current++;
  };

  const handleInput = (e) => {
    dispatch({ type: "change_input", input: e.target.value });
  };

  const onClickBtn = () => {
    if (active && input.trim() === "") return;
    if (active) {
      createTodo();
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <Block active={active}>
      <input type="text" onChange={handleInput} value={input} />
      <Btn onClick={onClickBtn}>{active ? "Submit" : "Add"}</Btn>
    </Block>
  );
}

const Block = styled.div`
  padding: 10px;
  input {
    width: 100%;
    padding: 10px 5px;
    margin-bottom: 5px;
    border: 1px solid #ddd;
    outline: none;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.25s;
    ${({ active }) =>
      active &&
      css`
        transform: scaleY(1);
      `}
  }
`;

const Btn = styled.div`
  padding: 10px 0;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: ${lighten(0.05, "#ddd")};
  }
  &:active {
    background-color: ${darken(0.1, "#ddd")};
  }
`;

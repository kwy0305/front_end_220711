import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

export default function TodoItem({ todo, onToggle, onRemove }) {
  const [disappear, setDisappear] = useState(false);
  return (
    <Block
      onClick={() => onToggle(todo.id)}
      done={todo.done}
      disappear={disappear}
    >
      <p>{todo.text}</p>
      <BtnDel
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 전파 중지
          setDisappear(true);
          setTimeout(() => {
            onRemove(todo.id);
          }, 300);
        }}
      >
        <div>Delete</div>
      </BtnDel>
    </Block>
  );
}

const slideOut = keyframes`
    to {
        transform: translate(-100%);
    }
`;

const Block = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  font-size: 0.8rem;
  user-select: none;
  cursor: pointer;
  ${({ done }) =>
    done &&
    css`
      p {
        text-decoration: line-through;
        color: #ddd;
      }
    `}
  ${({ disappear }) =>
    disappear &&
    css`
      animation: ${slideOut};
      animation-duration: 0.4s;
    `}
`;

const BtnDel = styled.div`
  div {
    transform: translate(100%);
    background-color: red;
    color: #fff;
    padding: 5px 6px;
    transition: 0.25s;
  }
  &:hover {
    div {
      transform: translate(0);
    }
  }
`;

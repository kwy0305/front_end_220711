import styled, { css } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { useTodoDispatch } from "../../contexts/useTodoContext";

export default function TodoItem({ todo }) {
  const dispatch = useTodoDispatch();

  const toggleTodo = () => {
    dispatch({ type: "toggle_todo", id: todo.id });
  };

  const removeTodo = () => {
    dispatch({ type: "remove_todo", id: todo.id });
  };
  return (
    <Block>
      <BtnCheck done={todo.done} onClick={toggleTodo}>
        <AiOutlineCheck size={20} />
      </BtnCheck>
      <TodoText>{todo.text}</TodoText>
      <FaTrashAlt size={20} onClick={removeTodo} color="red" cursor="pointer" />
    </Block>
  );
}

const Block = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const BtnCheck = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 2px solid #000;
  border-radius: 50%;
  transition: background 0.25s;
  cursor: pointer;
  ${({ done }) =>
    done &&
    css`
      background: #000;
      color: #fff;
    `}
`;

const TodoText = styled.p`
  font-size: 1.4em;
  flex: 1;
  margin-left: 10px;
`;

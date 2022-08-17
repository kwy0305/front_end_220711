import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo, removeTodo, toggleTodo } from "../reducers/todo";

export default function Todo() {
  // store의 최신 상태값을 가져온다
  const todoList = useSelector((state) => state.todo);
  // store의 dispatch 함수를 받아온다.
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const nextId = useRef(2);

  const onCreate = () => {
    dispatch(createTodo(nextId.current, input));
    nextId.current++;
  };

  const onToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={onCreate}>등록</button>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{ color: todo.done && "#ddd" }}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
            <button
              onClick={(e) => {
                // 버블링 방지
                e.stopPropagation();
                onRemove(todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

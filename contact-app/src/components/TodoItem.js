import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms/todo";

// 토글, 삭제 기능 - 리코일 활용
export default function TodoItem({ todo }) {
  const setTodoList = useSetRecoilState(todoState);

  const { id, text, done } = todo;

  const onToggle = () =>
    setTodoList((todoList) =>
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );

  const onRemove = () => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  return (
    <li onClick={onToggle} style={{ padding: "10px 0", color: done && "#ddd" }}>
      {text}
      <button style={{ marginLeft: 20 }} onClick={onRemove}>
        삭제
      </button>
    </li>
  );
}

import { useRecoilValue } from "recoil";
import { todoState } from "../atoms/todo";
import TodoItem from "./TodoItem";

export default function TodoBlock() {
  // useRecoilValue => 상태값만 반환
  // useRecoilState => 상태값과 업데이트 함수 반환
  // useSetRecoilState => 업데이트 함수만 반환
  const todoList = useRecoilValue(todoState);

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

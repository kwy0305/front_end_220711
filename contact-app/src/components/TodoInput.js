import { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoState } from "../atoms/todo";

export default function TodoInput() {
  // useRecoilState => 상태값과 업데이트 함수를 배열형태로 반환
  // const [todoList, setTodoList] = useRecoilState(todoState);

  // useSetRecoilState => 업데이트 함수만 리턴
  const setTodoList = useSetRecoilState(todoState);
  const [input, setInput] = useState("");

  const nextId = useRef(1);
  const onCreate = () => {
    // 함수형 업데이트
    setTodoList((todoList) => [
      ...todoList,
      { id: nextId.current, text: input, done: false },
    ]);
    nextId.current++;
    setInput("");
  };

  // 중첩된 객체 비구조화 할당 및 새로운 이름(value => text)으로 변경
  const handleInput = ({ target: { value: text } }) => {
    setInput(text);
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={input} name="todo" />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

import TodoBox from "./components/TodoBox";
import TodoHeader from "./components/TodoHeader";
import { createGlobalStyle } from "styled-components";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useMemo, useRef, useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding : 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
`;

function App() {
  // useReducer 한번에 관리할 수 있게 변경
  const [todoList, setTodoList] = useState([
    { id: 1, text: "투두 리스트 화면 그리기", done: false },
    { id: 2, text: "투두 리스트 기능 구현하기", done: false },
  ]);

  const nextId = useRef(3);

  const count = useMemo(() => {
    return todoList.filter((todo) => !todo.done).length;
  }, [todoList]);

  const onCreate = (text) => {
    // Array.prototype.concat() : 인자로 받은 배열을 합쳐서 새로운 배열을 반환
    setTodoList(todoList.concat({ id: nextId.current, text, done: false }));
    nextId.current++;
  };

  const onToggle = (id) => {
    console.log("토글");
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  const onRemove = (id) => {
    console.log("제거");
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <GlobalStyle />
      <TodoBox>
        <TodoHeader count={count} />
        <TodoList todoList={todoList} onToggle={onToggle} onRemove={onRemove} />
        <TodoInput onCreate={onCreate} />
      </TodoBox>
    </>
  );
}

export default App;

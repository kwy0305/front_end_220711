import TodoBox from "./components/TodoBox";
import TodoHeader from "./components/TodoHeader";
import { createGlobalStyle } from "styled-components";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useMemo } from "react";
import { useTodo } from "./useTodo";

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
  const {
    state,
    createTodo,
    toggleTodo,
    removeTodo,
    changeInput,
    changeIsEdit,
  } = useTodo();

  const { todoList, input, isEdit } = state;

  const count = useMemo(() => {
    return todoList.filter((todo) => !todo.done).length;
  }, [todoList]);

  return (
    <>
      <GlobalStyle />
      <TodoBox>
        <TodoHeader count={count} />
        <TodoList
          todoList={todoList}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
        <TodoInput
          onCreate={createTodo}
          onChangeInput={changeInput}
          input={input}
          isEdit={isEdit}
          onChangeEdit={changeIsEdit}
        />
      </TodoBox>
    </>
  );
}

export default App;

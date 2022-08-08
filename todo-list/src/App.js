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

const initialState = {
  todoList: [
    { id: 1, text: "투두 리스트 화면 그리기", done: false },
    { id: 2, text: "투두 리스트 기능 구현하기", done: false },
  ],
  input: "",
  isEdit: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return {
        ...state,
        input: "",
        todoList: state.todoList.concat(action.todo),
      };
    case "toggle":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "remove":
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    case "change_input":
      return { ...state, input: action.input };
    case "change_edit":
      return { ...state, isEdit: action.isEdit };
    default:
      return state;
  }
}

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

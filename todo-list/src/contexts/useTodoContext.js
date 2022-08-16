import { createContext, useContext, useReducer, useRef } from "react";

const initialState = {
  input: "",
  todo_list: [
    { id: 1, text: "input 상태 관리하기", done: false },
    { id: 2, text: "todo-list 출력하기", done: false },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "change_input":
      return { ...state, input: action.input };
    case "create_todo":
      return {
        ...state,
        input: "",
        todo_list: state.todo_list.concat({
          id: action.id,
          text: state.input,
          done: false,
        }),
      };
    case "toggle_todo":
      return {
        ...state,
        todo_list: state.todo_list.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "remove_todo":
      return {
        ...state,
        todo_list: state.todo_list.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(3);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("프로바이더를 찾을 수 없음");
  }
  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("프로바이더를 찾을 수 없음");
  }
  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("프로바이더를 찾을 수 없음");
  }
  return context;
}

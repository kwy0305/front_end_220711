import { useReducer, useRef } from "react";

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

export default function useTodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    dispatch({ type: "change_input", input: e.target.value });
  };

  const nextId = useRef(3);

  const createTodo = () => {
    if (state.input.trim() === "") return;
    dispatch({ type: "create_todo", id: nextId.current });
    nextId.current++;
  };

  const toggleTodo = (id) => {
    dispatch({ type: "toggle_todo", id });
  };

  const removeTodo = (id) => {
    dispatch({ type: "remove_todo", id });
  };

  return { state, handleInput, createTodo, toggleTodo, removeTodo };
}

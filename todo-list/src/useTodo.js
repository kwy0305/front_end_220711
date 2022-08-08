import { useReducer } from "react";

const initialState = {
  todoList: [{ id: 1, text: "화면 만들기", done: false }],
  input: "",
  isEidt: false,
};

let nextId = 2;

function reducer(state, action) {
  switch (action.type) {
    case "create_todo":
      return {
        ...state,
        input: "",
        todoList: state.todoList.concat({
          id: nextId,
          text: action.text,
          done: false,
        }),
      };
    case "toggle_todo":
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "remove_todo":
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

export function useTodo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createTodo = (text) => {
    dispatch({ type: "create_todo", text });
    nextId++;
  };

  const toggleTodo = (id) => {
    dispatch({ type: "toggle_todo", id });
  };

  const removeTodo = (id) => {
    dispatch({ type: "remove_todo", id });
  };

  const changeInput = (e) => {
    dispatch({ type: "change_input", input: e.target.value });
  };

  const changeIsEdit = (isEdit) => {
    dispatch({ type: "change_edit", isEdit });
  };

  return {
    state,
    createTodo,
    toggleTodo,
    removeTodo,
    changeInput,
    changeIsEdit,
  };
}

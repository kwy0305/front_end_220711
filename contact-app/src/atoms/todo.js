import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [],
});

export const undoneCount = selector({
  key: "undoneState",
  get: ({ get }) => {
    const todoList = get(todoState);

    const undoneTodoList = todoList.filter((todo) => !todo.done);
    return undoneTodoList.length;
  },
});

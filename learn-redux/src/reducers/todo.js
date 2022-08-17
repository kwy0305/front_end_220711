// 추가, 삭제, 토글 기능
//   액션 타입(상수), 액션을 생성하는 함수, 리듀서
const CREATE_TODO = "CREATE_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

export const createTodo = (id, text) => ({ type: CREATE_TODO, id, text });
export const removeTodo = (id) => ({ type: REMOVE_TODO, id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

export default function todo(state = [], action) {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat({ id: action.id, text: action.text, done: false });
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

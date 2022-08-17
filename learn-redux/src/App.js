import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import counter from "./reducers/counter";
import todo from "./reducers/todo";

// const rootReducer = combineReducers({
//   counter,
//   todo: todoReducer,
// });

// store : 상태값의 저장소.
//   => dispatch와 getState 메서드를 가지고 있다.
// redux는 @reduxjs/toolkit의 configureStore 사용을 권장한다.
// const store = createStore(rootReducer);

const store = configureStore({
  // reducer에 객체 형태로 여러 reducer 지정하면 자동으로 합쳐진다.
  reducer: {
    counter,
    todo,
  },
});

// store.dispatch({ type: "create_todo", id: 1, text: "할일 추가" });

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Todo />
    </Provider>
  );
}

export default App;

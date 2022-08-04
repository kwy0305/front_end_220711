// reducer : 상태를 관리하는 함수 => 다양한 상태를 한번에 관리
// action : 상태를 업데이트하는데 필요한 정보를 담은 객체
// dispatch : 상태를 업데이트하게끔 action 객체를 reducer에 전달하는 함수
import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h3>{state}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}

export default CounterReducer;

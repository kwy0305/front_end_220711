import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../reducers/counter";

export default function Counter() {
  // useSelector를 통해 Provider의 store값을 읽을 수 있다.
  //   => store.getState() 결과
  const count = useSelector((state) => state.counter);

  // useDipatch를 통해 store.dispatch를 가져온다.
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increase());
  };

  // 1씩 빼는 함수 만들기
  const sub = () => {
    dispatch(decrease());
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={add}>+1</button>
      <button onClick={sub}>-1</button>
    </div>
  );
}

import { useRecoilState } from "recoil";
import { countState } from "../App";
import Button from "./Button";

export default function Counter() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <Button />
    </div>
  );
}

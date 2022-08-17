import { useRecoilState } from "recoil";
import { countState } from "../App";

export default function Button() {
  const [count, setCount] = useRecoilState(countState);
  return <button onClick={() => setCount(count - 1)}>-1</button>;
}

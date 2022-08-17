import { useRecoilValue } from "recoil";
import { undoneCount } from "../atoms/todo";

export default function TodoHeader() {
  const count = useRecoilValue(undoneCount);

  return <div>해야할 일 : {count}개</div>;
}

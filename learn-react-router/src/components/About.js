import { useParams } from "react-router";

export default function About() {
  const { userId } = useParams();
  console.log(parseInt(userId));
  return (
    <div>
      <h1>About</h1>
      <p>이 페이지는 About 페이지입니다.</p>
    </div>
  );
}

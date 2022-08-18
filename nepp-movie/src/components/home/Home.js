import Title from "../common/Title";
import PopularList from "./PopularList";

export default function Home() {
  return (
    <div>
      <PopularList title="인기 영화" type="movie" />
      <PopularList title="인기 TV" type="tv" />
    </div>
  );
}

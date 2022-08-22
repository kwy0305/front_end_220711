import { Routes, Route } from "react-router-dom";
import DetailBox from "../detail/DetailBox";
import MovieList from "./MovieList";

export default function Movie() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:id" element={<DetailBox />} />
      </Routes>
    </div>
  );
}

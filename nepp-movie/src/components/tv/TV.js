import { Routes, Route } from "react-router-dom";
import DetailBox from "../common/detail/DetailBox";

export default function TV() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>TV show 목록</div>} />
        <Route path="/:id" element={<DetailBox />} />
      </Routes>
    </div>
  );
}

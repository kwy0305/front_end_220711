import { Reset } from "styled-reset";
import Header from "./components/common/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Movie from "./components/movie/Movie";
import TV from "./components/tv/TV";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Reset />
      <Header />
      <MainBlock>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/*" element={<Movie />} />
          <Route path="/tv/*" element={<TV />} />
        </Routes>
      </MainBlock>
    </div>
  );
}

const MainBlock = styled.div`
  padding: 50px 100px;
`;

export default App;

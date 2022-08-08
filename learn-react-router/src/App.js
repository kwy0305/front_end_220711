import About from "./components/About";
import Home from "./components/Home";
import { useLocation } from "react-router";
import { Routes, Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  // css 값을 하나만 할당 할 때
  background: ${({ active }) => (active ? "tomato" : "none")};
  ${({ active }) =>
    css`
      background: tomato;
      color: #fff;
    `};
`;

const Button = styled.button`
  padding: 5px 10px;
  background: white;
  border: 4px solid blue;
`;

const BigButton = styled(Button)`
  padding: 20px 40px;
`;

function App() {
  const { pathname } = useLocation();
  const url = pathname.split("/")[1];
  console.log(url);
  return (
    <div>
      <StyledLink to="/" acitve={url === ""}>
        Home
      </StyledLink>
      <StyledLink to="/about" active={url === "about"}>
        About
      </StyledLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

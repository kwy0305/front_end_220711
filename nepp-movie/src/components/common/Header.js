import styled from "styled-components";
import Navigation from "./Navigation";
import Search from "./Search";

export default function Header() {
  return (
    <HeaderBlock>
      <Logo>Nepp Movie</Logo>
      <Navigation />
      <Search />
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  /* box-shadow: 10px 5px 5px 5px rgba(0, 0, 0, 0.1); */
  border: 1px solid #ddd;
  padding: 0 100px;
`;

const Logo = styled.h1`
  font-size: 1.6em;
  font-weight: 700;
`;

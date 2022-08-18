import { Link } from "react-router-dom";
import styled from "styled-components";

const gnbList = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Movie",
    url: "/movie",
  },
  {
    id: 3,
    title: "TV",
    url: "/tv",
  },
];

export default function Navigation() {
  return (
    <NavBlock>
      <ul>
        {gnbList.map((menu) => (
          <NavItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </NavBlock>
  );
}

function NavItem({ menu }) {
  return (
    <li>
      <StyledLink key={menu.id} to={menu.url}>
        {menu.title}
      </StyledLink>
    </li>
  );
}

const NavBlock = styled.nav`
  ul {
    display: flex;
    margin-left: 50px;
    li + li {
      margin-left: 20px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

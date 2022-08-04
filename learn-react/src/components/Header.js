// css 파일 imoprt
// import "../header.css";
// import "../header.scss";
import styled, { css } from "styled-components";
import Title from "./Title";

const HeaderBlock = styled.header`
  display: flex;
  padding: 10px;
  align-items: center;
  ${({ active, color }) =>
    // active가 true이면 && 뒤의 값을 평가 => false 평가를 안해서 적용
    active &&
    css`
      background: ${color};
      height: 300px;
      align-items: flex-start;
    `}
  nav {
    margin-left: 50px;
    ul {
      display: flex;
      li {
        list-style: none;
        font-size: 14px;
        & + li {
          margin-left: 10px;
        }
        a {
          text-decoration: none;
          color: inherit;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
`;

export default function Header() {
  const headerStyle = {
    // background: "tomato",
    fontSize: "32px",
  };
  const arr = [1];

  return (
    // style 속성에 객체 형태로 전달
    <HeaderBlock
      style={headerStyle}
      className="header"
      active={arr.length > 0}
      color="red"
    >
      <Title title="React" />
      {/* 내비게이션바 */}
      <nav>
        <ul>
          <li>
            <a href="">HTML</a>
          </li>
          <li>
            <a href="">CSS</a>
          </li>
          <li>
            <a href="">Javascript</a>
          </li>
          <li>
            <a href="">React</a>
          </li>
        </ul>
      </nav>
    </HeaderBlock>
  );
}

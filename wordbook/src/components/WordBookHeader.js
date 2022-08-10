import styled, { css } from "styled-components";

export default function WordBookHeader({ state }) {
  const count = state.length;
  const memorizedNum = state.filter((word) => word.active).length;
  console.log(count, memorizedNum);
  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  return (
    <HeaderBlock>
      <h2>{todayStr}</h2>
      <p>
        외운 단어 : {memorizedNum}/{count}
      </p>
      <StatusBar status={(memorizedNum / count) * 100}>
        <p>{parseInt((memorizedNum / count) * 100)}%</p>
      </StatusBar>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
`;

const StatusBar = styled.div`
  height: 15px;
  background-color: #ddd;
  margin-top: 10px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  color: #fff;
  p {
    position: absolute;
    font-size: 12px;
    text-align: center;
    left: 0;
    top: 0;
    width: 100%;
  }
  &::before {
    content: "";
    display: block;
    height: 100%;
    ${({ status }) => css`
      transform: scaleX(${status}%);
    `}
    transform: ${({ status }) => `scaleX(${status}%)`};
    transform-origin: left;
    background-color: black;
    transition: 0.4s;
  }
`;

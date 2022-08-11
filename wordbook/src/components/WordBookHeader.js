import styled, { css } from "styled-components";
import { useWordState } from "../contexts/WordContext";

export default function WordBookHeader() {
  const state = useWordState();
  const count = state.length;
  const memorizedNum = state.filter((word) => word.active).length;
  // NaN은 falsy한 값
  //   => 값1 || 값2 를 사용하면 값1이 true이면 값1을, 값1이 false면 값2로 평가
  //   => 0 / 0 은 0이 아니라 NaN
  const percent = (memorizedNum / count) * 100 || 0;

  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  console.log(0 / 0);
  return (
    <HeaderBlock>
      <h2>{todayStr}</h2>
      <p>
        외운 단어 : {memorizedNum}/{count}
      </p>
      <StatusBar status={percent}>
        <p>{Math.floor(percent)}%</p>
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

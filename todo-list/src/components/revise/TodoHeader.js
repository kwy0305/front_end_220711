import styled from "styled-components";
import React from "react";
import { useTodoState } from "../../contexts/useTodoContext";

export default React.memo(function TodoHeader({ totalCount, doneCount }) {
  const todayStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });
  // todo_list와 input이 하나의 state로 관리되기 때문에
  // 여기서 사용하지 않는 input이 업데이트가 되어도 리렌더링이 일어난다.
  // const { todo_list } = useTodoState();

  const percent =
    totalCount === 0 ? 0 : Math.floor((doneCount / totalCount) * 100);

  return (
    <Block>
      <DateText>{todayStr}</DateText>
      <TeskCount>
        완료 : {doneCount}/{totalCount}
      </TeskCount>
      <StatusBar percent={percent}>
        <p>{percent}%</p>
      </StatusBar>
    </Block>
  );
});

const Block = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px 10px;
`;

const DateText = styled.p`
  font-size: 1.6em;
  font-weight: 700;
`;

const TeskCount = styled.span`
  color: #bbb;
  font-weight: 700;
`;

const StatusBar = styled.div`
  background-color: #ddd;
  font-size: 0.7em;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    transform-origin: left;
    transform: scaleX(${({ percent }) => percent}%);
    transition: transform 0.25s;
    background: #000;
    position: absolute;
    top: 0;
    left: 0;
  }
  p {
    position: relative;
    z-index: 100;
  }
`;

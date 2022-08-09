import { useState } from "react";
import styled, { css } from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function Slider() {
  const [slideList, setSlideList] = useState([
    { title: "슬라이드1" },
    { title: "슬라이드2" },
    { title: "슬라이드3" },
    { title: "슬라이드4" },
    { title: "슬라이드5" },
    { title: "슬라이드6" },
  ]);
  const [index, setIndex] = useState(3);
  return (
    <Container length={slideList.length} index={index}>
      <ul>
        {slideList.map((slide) => (
          <li>{slide.title}</li>
        ))}
      </ul>
      <Btns>
        <AiFillCaretLeft
          size={36}
          cursor="pointer"
          onClick={() => index > 0 && setIndex(index - 1)}
        />
        <AiFillCaretRight
          size={36}
          cursor="pointer"
          onClick={() => index < slideList.length - 1 && setIndex(index + 1)}
        />
      </Btns>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 300px;
  ul {
    display: flex;
    height: 300px;
    ${({ length, index }) => css`
      width: ${length * 100}vw;
      transform: translate(${index * -100}vw);
    `}
    li {
      /* 너비 100vw */
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 48px;
      color: #fff;
      background-color: tomato;
    }
  }
`;

const Btns = styled.div`
  text-align: center;
`;

import { useState } from "react";
import styled, { css } from "styled-components";

export default function Slider() {
  const [slideList, setSlideList] = useState([
    { id: 1, title: "영화1" },
    { id: 2, title: "영화2" },
    { id: 3, title: "영화3" },
  ]);
  const [index, setIndex] = useState(0);
  return (
    <SliderContainer>
      <SliderBlock length={slideList.length} index={index}>
        {slideList.map((slide) => (
          <li key={slide.id}>{slide.title}</li>
        ))}
      </SliderBlock>
      <button onClick={() => setIndex(index + 1)}>오른쪽</button>
      <button onClick={() => setIndex(index >= 0 ? index + 1 : 0)}>왼쪽</button>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  overflow: hidden;
`;
const SliderBlock = styled.ul`
  display: flex;
  transition: 0.25s;
  height: 300px;
  ${({ length, index }) => css`
    width: ${length * 100 + "vw"};
    transform: translate(-${index * 100}vw);
  `}
  li {
    width: 100vw;
  }
`;

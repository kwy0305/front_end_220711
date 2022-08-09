import { useState } from "react";
import styled, { css } from "styled-components";
import { AiFillCaretRight } from "react-icons/ai";

export default function Accordian() {
  // styled-component에 props
  const [active, setActive] = useState(false);
  return (
    <Block active={active}>
      <TitleBox>
        <h3>제목</h3>
        <span onClick={() => setActive(!active)}>
          {/* {active ? "닫기" : "열기"} */}
          <AiFillCaretRight color="#17334a" size={18} />
        </span>
      </TitleBox>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, neque.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
        consectetur ea quaerat quibusdam ex quae, odio expedita nesciunt ut
        excepturi enim accusamus, aliquam corrupti similique, iusto ad
        doloremque eligendi dolores velit dicta. Iure, esse! Ex, pariatur eos
        eveniet facere distinctio animi recusandae hic quis eum in doloribus a
        modi atque dolor ut, suscipit maxime, eligendi qui consequuntur quaerat
        totam? Autem quo consequatur ex neque minus corporis, illum eligendi
        molestiae nihil consequuntur placeat animi repudiandae sint quos
        distinctio esse magnam qui at ratione voluptatibus assumenda quod?
        Maxime eaque odit nihil accusamus officiis natus repudiandae, voluptates
        magnam qui iusto recusandae incidunt vero?
      </p>
    </Block>
  );
}

const Block = styled.div`
  padding: 10px;
  background: #f2f2f2;
  margin-bottom: 10px;
  border-radius: 4px;
  h3 {
    padding: 10px 0;
  }
  p {
    max-height: 0;
    overflow: hidden;
    transition: 0.25s;
  }
  ${({ active }) =>
    active &&
    css`
      p {
        /* margin-top: 10px; */
        overflow-y: scroll;
        max-height: 100px;
      }
      ${TitleBox} {
        span {
          transform: rotate(90deg);
        }
      }
    `}
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 0.8em;
    cursor: pointer;
    user-select: none;
    transition: 0.25s;
  }
`;

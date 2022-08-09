import { useState } from "react";
import styled, { css } from "styled-components";
import { FaAngleDown, FaCheck } from "react-icons/fa";

export default function Dropdown() {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("메뉴1");

  const onClickMenu = (value) => {
    setValue(value);
    setActive(false);
  };
  return (
    <Block active={active}>
      <ValueBox onClick={() => setActive(!active)}>
        {value}
        <span>
          <FaAngleDown />
        </span>
      </ValueBox>
      <ul>
        <MenuItem
          text="메뉴1"
          onClickMenu={onClickMenu}
          active={value === "메뉴1"}
        />
        <MenuItem
          text="메뉴2"
          onClickMenu={onClickMenu}
          active={value === "메뉴2"}
        />
        <MenuItem
          text="메뉴3"
          onClickMenu={onClickMenu}
          active={value === "메뉴3"}
        />
      </ul>
    </Block>
  );
}

function MenuItem({ text, onClickMenu, active }) {
  return (
    <MenuBlock onClick={() => onClickMenu(text)}>
      {text}
      {active && <FaCheck size={10} />}
    </MenuBlock>
  );
}

const Block = styled.div`
  transition: 0.25s;
  width: 100px;
  ul {
    display: none;
    border: 1px solid #ddd;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      transform: rotate(-45deg);
      border-top: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: absolute;
      top: -6px;
      left: 15px;
      background-color: #fff;
    }
  }
  ${({ active }) =>
    active &&
    css`
      ul {
        display: block;
      }
      ${ValueBox} {
        span {
          transform: rotate(180deg);
        }
      }
    `}
`;

const ValueBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  user-select: none;
`;

const MenuBlock = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #ccc;
  }
  position: relative;
  z-index: 100;
`;

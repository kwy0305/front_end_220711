import styled, { css } from "styled-components";

export default function TabMenu({ menu, onClickTab }) {
  const { id, active, text } = menu;
  return (
    <TabMenuBlock active={active} onClick={() => onClickTab(id)}>
      {text}
    </TabMenuBlock>
  );
}

const TabMenuBlock = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #000;
      color: #fff;
    `}
`;

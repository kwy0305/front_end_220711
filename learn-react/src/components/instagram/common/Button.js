import styled, { css } from "styled-components";
import { btn_color } from "../../../colors";

export default function Button({ text, margin, active }) {
  return (
    <StyledButton
      margin={margin}
      active={active}
      onClick={() => alert("click")}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.div`
  width: 100%;
  padding: 7px 0;
  color: #fff;
  text-align: center;
  font-weight: 600;
  border-radius: 4px;
  background-color: ${btn_color};
  opacity: 0.3;
  ${({ margin }) => margin};
  ${(active) =>
    active &&
    css`
      opacity: 1;
      cursor: pointer;
    `}
`;

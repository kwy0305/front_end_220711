import styled from "styled-components";
import { btn_color } from "../../../colors";

export default function Button({ text, margin }) {
  return <StyledButton margin={margin}>{text}</StyledButton>;
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
  cursor: pointer;
  ${({ margin }) => margin};
`;

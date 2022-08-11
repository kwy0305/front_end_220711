import styled from "styled-components";
import { bg_color, border_color } from "../../../colors";

export default function Input({ rightContent, hide }) {
  return (
    <InputBox>
      <StyledInput type={hide ? "password" : "text"} />
      {rightContent}
    </InputBox>
  );
}

const StyledInput = styled.input`
  padding: 10px;
  outline: none;
  background: none;
  border: none;
  flex: 1;
`;

const InputBox = styled.div`
  display: flex;
  background-color: ${bg_color};
  border: 1px solid ${border_color};
  & + & {
    margin-top: 5px;
  }
`;

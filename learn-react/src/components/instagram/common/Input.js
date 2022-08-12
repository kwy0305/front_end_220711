import styled, { css } from "styled-components";
import { bg_color, border_color } from "../../../colors";

export default function Input({
  rightContent,
  hide,
  placeholder,
  onChange,
  name,
  value,
}) {
  return (
    <InputBox>
      <PlaceholderText active={value.length > 0}>{placeholder}</PlaceholderText>
      <StyledInput
        name={name}
        type={hide ? "password" : "text"}
        onChange={onChange}
        active={value.length > 0}
      />
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
  z-index: 100;
  ${({ active }) =>
    active &&
    css`
      padding: 16px 10px 4px;
    `}
`;

const InputBox = styled.div`
  display: flex;
  height: 35px;
  background-color: ${bg_color};
  border: 1px solid ${border_color};
  position: relative;
  & + & {
    margin-top: 5px;
  }
`;

const PlaceholderText = styled.span`
  position: absolute;
  top: 0;
  left: 10px;
  height: 35px;
  line-height: 30px;
  color: rgb(142, 142, 142);
  font-size: 0.9em;
  ${({ active }) =>
    active &&
    css`
      font-size: 12px;
      transform: translateY(-5px);
    `}
`;

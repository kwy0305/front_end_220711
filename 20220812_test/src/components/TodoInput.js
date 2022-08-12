import styled, { css } from "styled-components";
import { active_color, hover_color, main_color } from "../colors";

export default function TodoInput({
  onCreate,
  onChangeInput,
  onChangeEdit,
  input,
  isEdit,
}) {
  return (
    <Block isEdit={isEdit}>
      <Button input type="text" />
      <Button isNotEmpty={true} onClick={() => onChangeEdit(true)}>
        추가
      </Button>
    </Block>
  );
}

const Block = styled.div`
  padding: 10px;
  input {
    width: 100%;
    height: 30px;
    padding: 0 5px;
    outline: none;
    border: 1px #ddd solid;
    margin-bottom: 5px;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.25s;
  }
  ${({ isEdit }) =>
    isEdit &&
    css`
      input {
        transform: scaleY(1);
      }
    `};
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  background: none;
  border: none;
  background: ${main_color};
  color: #fff;
  background-color: #ddd;
  transition: background-color 0.1s;
  ${({ isNotEmpty }) =>
    isNotEmpty &&
    css`
      background-color: ${main_color};
      cursor: pointer;
      &:hover {
        background-color: ${hover_color};
      }
      &:active {
        background-color: ${active_color};
      }
    `}
`;

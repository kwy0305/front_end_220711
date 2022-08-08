import styled, { css } from "styled-components";
import { active_color, hover_color, main_color } from "../color";

export default function TodoInput({
  onCreate,
  onChangeInput,
  onChangeEdit,
  input,
  isEdit,
}) {
  const onSubmit = () => {
    if (input !== "") {
      onCreate(input);
      onChangeEdit(false);
    }
  };

  return (
    <Block isEdit={isEdit}>
      {/* 조건부 렌더링 : isEdit 이 true일 때만 뒤에 값을 평가(렌더링) */}
      {/* {\isEdit && <input type="text" />} */}
      <input type="text" onChange={onChangeInput} value={input} />
      {isEdit ? (
        <Button isNotEmpty={input !== ""} onClick={onSubmit}>
          Submit
        </Button>
      ) : (
        <Button isNotEmpty={true} onClick={() => onChangeEdit(true)}>
          Add
        </Button>
      )}
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
    transform-origin: bottom; // transform 기준 변경
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

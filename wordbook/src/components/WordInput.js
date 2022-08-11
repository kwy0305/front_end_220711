import { useState } from "react";
import { useWordDispatch, useWordNextId } from "../contexts/WordContext";
import styled from "styled-components";

export default function WordInput() {
  const [inputs, setInputs] = useState({
    eng: "",
    kor: "",
  });
  const { eng, kor } = inputs;

  const dispatch = useWordDispatch();
  const nextId = useWordNextId();
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = (e) => {
    e.preventDefault();
    dispatch({
      type: "create_word",
      word: { id: nextId.current, eng, kor: kor.split(","), active: false },
    });
    setInputs({
      eng: "",
      kor: "",
    });
    nextId.current++;
  };

  return (
    // 키보드와 마우스 입력 둘다 가능하게
    <InputBlock onSubmit={onCreate}>
      <input
        type="text"
        placeholder="영단어를 입력해주세요"
        name="eng"
        onChange={onChange}
        value={inputs.eng}
      />
      <input
        type="text"
        placeholder="뜻을 ,으로 구별하여 입력해주세요"
        name="kor"
        onChange={onChange}
        value={inputs.kor}
      />
      <button>등록</button>
    </InputBlock>
  );
}

const InputBlock = styled.form`
  padding: 10px 20px;
  input {
    width: 100%;
    padding: 10px 5px;
    outline: none;
    border: 1px solid #ddd;
    &:nth-child(2) {
      margin-top: 10px;
    }
  }
  button {
    width: 100%;
    background: none;
    padding: 10px 0;
    margin-top: 10px;
    border: 1px solid #ddd;
    cursor: pointer;
  }
`;

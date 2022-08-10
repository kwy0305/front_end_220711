import { useState } from "react";
import styled from "styled-components";

// 영어만 정규표현식
const engReg = /^[a-zA-Z]*$/;
export default function WordInput({ onCreate }) {
  const [inputs, setInputs] = useState({
    eng: "",
    kor: "",
  });
  const { eng, kor } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    // eng input에 한글 입력시 경고창 출력
    if (!engReg.test(value) && name === "eng") {
      alert("영어만 입력 가능합니다");
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // 영어와 한글 중 빈문자열이 없을 경우만 단어 추가
    if (eng.trim() === "" || kor.trim() === "") {
      alert("영어와 한글 모두 입력해주세요");
    } else {
      onCreate(eng, kor.split(","));
      setInputs({
        eng: "",
        kor: "",
      });
    }
  };

  return (
    // 키보드와 마우스 입력 둘다 가능하게
    <InputBlock onSubmit={onSubmit}>
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

import { useState } from "react";
import { signIn } from "./utils/auth";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function SignIn() {
  // input 값 한번에 관리
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  // inputs 키값들 비구조화 할당
  const { name, email, password } = inputs;

  // // input당 업데이트 하는 함수를 하나씩 만드는건 비효율적
  // ex)   const handleName = (e) => {
  //   setInputs({
  //     ...inputs,
  //     name: e.target.value,
  //   });
  // };

  // 매개변수에서 바로 비구조화 할당
  const handleInput = ({ target: { value, name } }) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSignIn = async (e) => {
    // form에서 submit 발생시 기본동작(새로고침) 방지
    e.preventDefault();
    // async에서 값을 return 하면 return을 resolve하는 Promise를 반환
    const result = await signIn(inputs);

    console.log(result);
  };

  return (
    // form 태그안에서 enter키 입력 혹은 버튼 입력시 submit 이벤트 발생
    //  => onKeyDown과 onClick 두개로 분리할 필요가 없다.
    <form style={formStyle} onSubmit={onSignIn}>
      {/* 회원가입 폼 */}
      <label>
        name :
        <input type="text" name="name" onChange={handleInput} />
      </label>
      <label>
        email :
        <input type="email" name="email" onChange={handleInput} />
      </label>
      <label>
        password :
        <input type="password" name="password" onChange={handleInput} />
      </label>
      <button>회원가입</button>
    </form>
  );
}

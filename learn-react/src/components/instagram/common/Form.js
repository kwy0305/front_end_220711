import styled from "styled-components";
import Input from "./Input";
import { lighten } from "polished";
import { useState } from "react";
import Button from "./Button";

export default function Form() {
  // 상태값에 따라 어떻게 보여줄 것인가?
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [hide, setHide] = useState(true);
  const displayText = hide ? "Show" : "Hide";
  const { username, password } = inputs;
  const btnActive = username.length > 0 && password.length > 5;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormBlock>
        <Input
          placeholder="username, phone or email"
          onChange={handleInput}
          name="username"
          value={username}
        />
        <Input
          rightContent={
            <BtnDisplay onClick={() => setHide(!hide)}>
              {displayText}
            </BtnDisplay>
          }
          hide={hide}
          placeholder="password"
          onChange={handleInput}
          name="password"
          value={password}
        />
        <Button text="Log in" margin={"margin-top: 15px"} active={btnActive} />
      </FormBlock>
    </form>
  );
}

const FormBlock = styled.div`
  padding: 0 40px;
`;

const BtnDisplay = styled.button`
  border: none;
  background: none;
  font-weight: 700;
  cursor: pointer;
  color: rgb(38, 38, 38);
  &:active {
    color: ${lighten(0.3, "rgb(38,38,38)")};
  }
`;

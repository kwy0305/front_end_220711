import styled from "styled-components";
import Input from "./Input";
import { lighten } from "polished";
import { useState } from "react";
import Button from "./Button";

export default function Form() {
  // 상태값에 따라 어떻게 보여줄 것인가?
  const [hide, setHide] = useState(true);
  const displayText = hide ? "Show" : "Hide";
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormBlock>
        <Input />
        <Input
          rightContent={
            <BtnDisplay onClick={() => setHide(!hide)}>
              {displayText}
            </BtnDisplay>
          }
          hide={hide}
        />
        <Button text="Log in" margin={"margin-top: 15px"} />
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

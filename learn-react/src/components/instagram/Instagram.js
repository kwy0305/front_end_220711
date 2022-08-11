import styled from "styled-components";
import { bg_color, border_color } from "../../colors";
import logoImg from "../../assets/images/instagram_logo.png";
import Form from "./common/Form";

console.log(logoImg);

export default function Instagram() {
  return (
    <Template>
      <Block>
        <Logo>
          <img src={logoImg} alt="" />
        </Logo>
        <Form />
      </Block>
    </Template>
  );
}

const Template = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${bg_color};
`;

const Block = styled.div`
  width: 350px;
  height: 500px;
  border: 1px solid ${border_color};
  background-color: #fff;
`;

const Logo = styled.h1`
  text-align: center;
  margin: 50px 40px;
`;

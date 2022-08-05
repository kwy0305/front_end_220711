import styled from "styled-components";

export default function TodoBox({ children }) {
  return (
    <Container>
      <Block>{children}</Block>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  border: 1px solid #bbb;
  background-color: #fff;
  overflow: hidden;
`;

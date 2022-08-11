import { useState } from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import Instagram from "./components/instagram/Instagram";

function App() {
  return (
    <>
      <Reset />
      <Instagram />
    </>
  );
}

const Template = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Block = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
`;

export default App;

import { useEffect } from "react";
import styled from "styled-components";
import { useWordState } from "../contexts/WordContext";
import WordBookHeader from "./WordBookHeader";
import WordInput from "./WordInput";
import WordList from "./WordList";

export default function WordBook() {
  const state = useWordState();
  useEffect(() => {
    localStorage.setItem("wordList", JSON.stringify(state));
  }, [state]);

  return (
    <Template>
      <WordBookBlock>
        <WordBookHeader />
        <WordList />
        <WordInput />
      </WordBookBlock>
    </Template>
  );
}

const Template = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fbfbfb;
`;

const WordBookBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 700px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
`;

import { useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

import { useWordDispatch, useWordState } from "../contexts/WordContext";

export default function WordList() {
  const wordList = useWordState();

  return (
    <WordListBlock>
      {wordList.map((word) => (
        <WordItem key={word.id} word={word} />
      ))}
    </WordListBlock>
  );
}

function WordItem({ word }) {
  const [active, setActive] = useState(false);
  const dispatch = useWordDispatch();

  const onToggle = (e) => {
    // 이벤트 전파 방지
    console.log("toggle");
    e.stopPropagation();
    dispatch({ type: "toggle_word", id: word.id });
  };

  const onRemove = (e) => {
    e.stopPropagation();
    dispatch({ type: "remove_word", id: word.id });
  };

  const CheckIcon = word.active ? (
    <AiFillCheckCircle size={24} />
  ) : (
    <AiOutlineCheckCircle size={24} />
  );

  return (
    <WordItemBlock onClick={() => setActive(!active)}>
      <EngBox>
        <div onClick={onToggle}>{CheckIcon}</div>
        <h3>{word.eng}</h3>
        <FaTrash onClick={onRemove} />
      </EngBox>
      {active && (
        <p>
          {word.kor.map((text, idx) => (
            <div>
              {idx + 1}. {text}
            </div>
          ))}
        </p>
      )}
    </WordItemBlock>
  );
}

const WordListBlock = styled.ul`
  overflow-y: auto;
  flex: 1;
  border-bottom: 1px solid #ddd;
`;

const WordItemBlock = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  user-select: none;
  p {
    border-top: 1px solid #ddd;
    margin-top: 10px;
    padding: 10px 0;
  }
`;
const EngBox = styled.div`
  display: flex;
  align-items: center;
  h3 {
    flex: 1;
    margin-top: -7px;
    margin-left: 7px;
  }
`;

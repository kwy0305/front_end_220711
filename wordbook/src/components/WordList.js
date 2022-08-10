import { useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

export default function WordList({ wordList, onRemove, onToggle }) {
  return (
    <WordListBlock>
      {wordList.map((word) => (
        <WordItem
          key={word.id}
          word={word}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </WordListBlock>
  );
}

function WordItem({ word, onRemove, onToggle }) {
  const [active, setActive] = useState(false);
  return (
    <WordItemBlock onClick={() => setActive(!active)}>
      <EngBox>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggle(word.id);
          }}
        >
          {word.active ? (
            <AiFillCheckCircle size={24} />
          ) : (
            <AiOutlineCheckCircle size={24} />
          )}
        </div>
        <h3>
          {word.eng}
          {/* 버블링 */}
        </h3>
        <FaTrash
          onClick={(e) => {
            // 이벤트 전파를 막는다.
            e.stopPropagation();
            onRemove(word.id);
          }}
        />
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

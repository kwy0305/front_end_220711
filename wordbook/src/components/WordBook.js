import { useRef, useReducer, useEffect } from "react";
import styled from "styled-components";
import WordBookHeader from "./WordBookHeader";
import WordInput from "./WordInput";
import WordList from "./WordList";

function reducer(state, action) {
  switch (action.type) {
    case "create_word":
      return [...state, action.word];
    case "remove_word":
      return state.filter((word) => word.id !== action.id);
    case "toggle_word":
      return state.map((word) =>
        word.id === action.id ? { ...word, active: !word.active } : word
      );
    default:
      return state;
  }
}

const initialState = JSON.parse(localStorage.getItem("wordList"));

export default function WordBook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextId = useRef(state[state.length - 1].id + 1);

  const onCreate = (eng, kor) => {
    // state의 단어들 중 영어만 추출
    const engList = state.map((word) => word.eng);
    // 이미 등록된 단어인지 확인
    if (engList.includes(eng)) {
      alert("이미 등록된 단어 입니다.");
    } else {
      if (eng === "" || kor[0] === "") {
        alert("입력된 값을 확인해주세요.");
        return;
      } else {
        dispatch({
          type: "create_word",
          word: { id: nextId.current, eng, kor },
        });
        nextId.current++;
      }
    }
  };

  const onRemove = (id) => {
    dispatch({ type: "remove_word", id });
  };

  const onToggle = (id) => {
    dispatch({ type: "toggle_word", id });
  };

  useEffect(() => {
    localStorage.setItem("wordList", JSON.stringify(state));
  }, [state]);

  return (
    <Tamplate>
      <WordBookBlock>
        <WordBookHeader state={state} />
        <WordList wordList={state} onRemove={onRemove} onToggle={onToggle} />
        <WordInput onCreate={onCreate} />
      </WordBookBlock>
    </Tamplate>
  );
}

const Tamplate = styled.div`
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

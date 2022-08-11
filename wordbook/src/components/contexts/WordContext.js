import { createContext, useContext, useReducer, useRef } from "react";

const data = localStorage.getItem("wordList");
// data의 파싱 결과가 falsy한 값이라면 빈 배열 할당
const initialState = JSON.parse(data) || [];

function wordReducer(state, action) {
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

const WordStateContext = createContext(null);
const WordDispatchContext = createContext(null);
const WordNextIdConetext = createContext(null);

export function WordProvider({ children }) {
  const [state, dispatch] = useReducer(wordReducer, initialState);
  const nextId = useRef(state.length > 0 ? state[state.length - 1].id + 1 : 1);

  return (
    <WordStateContext.Provider value={state}>
      <WordDispatchContext.Provider value={dispatch}>
        <WordNextIdConetext.Provider value={nextId}>
          {children}
        </WordNextIdConetext.Provider>
      </WordDispatchContext.Provider>
    </WordStateContext.Provider>
  );
}

export function useWordState() {
  const context = useContext(WordStateContext);
  if (context === null) throw new Error("Cannot find Provider");
  return context;
}

export function useWordDispatch() {
  const context = useContext(WordDispatchContext);
  if (context === null) throw new Error("Cannot find Provider");
  return context;
}

export function useWordNextId() {
  const context = useContext(WordNextIdConetext);
  if (context === null) throw new Error("Cannot find Provider");
  return context;
}

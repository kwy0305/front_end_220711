import { useShiritori } from "../hooks/useShiritori";

export default function Shiritori() {
  const [state, onChange, changeKeyword] = useShiritori();
  const keyword = state.keywordList[state.keywordList.length - 1];
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changeKeyword();
      }}
    >
      <h3>{keyword}</h3>
      <input type="text" onChange={onChange} />
      <button>등록</button>
    </form>
  );
}

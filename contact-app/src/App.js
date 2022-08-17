import { atom, RecoilRoot } from "recoil";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoBlock from "./components/TodoBlock";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const todoState = atom({
  key: "todoState",
  default: [],
});

function App() {
  return (
    <RecoilRoot>
      <TodoHeader />
      <TodoInput />
      <TodoBlock />
    </RecoilRoot>
  );
}

export default App;

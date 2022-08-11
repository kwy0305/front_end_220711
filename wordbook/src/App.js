import WordBook from "./components/WordBook";
import { createGlobalStyle } from "styled-components";
import { WordProvider } from "./contexts/WordContext";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
  }
  li {
    list-style: none;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <WordProvider>
        <WordBook />
      </WordProvider>
    </div>
  );
}

export default App;

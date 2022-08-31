import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import LogIn from "./Login";
import { getCurrent } from "./utils/auth";

function App() {
  const getCurrentUser = async () => {
    const result = await getCurrent();
    console.log(result);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <button onClick={getCurrentUser}>유저 정보 받기</button>
    </BrowserRouter>
  );
}

export default App;

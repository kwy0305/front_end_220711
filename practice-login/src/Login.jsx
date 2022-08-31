import { useState } from "react";
import { logIn } from "./utils/auth";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function LogIn() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [cookies, setCookie, removeCookie] = useCookies();

  const handleInput = ({ target: { value, name } }) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onLogIn = async (e) => {
    e.preventDefault();
    try {
      const result = await logIn(inputs);
      console.log(result.data.data.token);
      setCookie("access_token", result.data.data.token, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
    } catch (e) {
      // alert(e);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form style={formStyle} onSubmit={onLogIn}>
        <label>
          email :
          <input type="email" name="email" onChange={handleInput} />
        </label>
        <label>
          password :
          <input type="password" name="password" onChange={handleInput} />
        </label>
        <button>로그인</button>
      </form>
      <button>
        <Link to="signin">회원가입</Link>
      </button>
    </div>
  );
}

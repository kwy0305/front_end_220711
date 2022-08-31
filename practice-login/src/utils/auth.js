// Authentication => 로그인(인증) => 입장권 발급
// Authorization => 인가(권한) => 입장권 보여주면 놀이기구 탑승 가능

import axios from "axios";
import { Cookies } from "react-cookie";

// 쿠키 객체 생성
const cookies = new Cookies();

// access_token 이라는 키값의 쿠키 조회
const token = cookies.get("access_token");

// 토큰이 저장되어 있다면 headers에 token 설정
if (token) axios.defaults.headers.common["Authrization"] = `Bearer ${token}`;

axios.defaults.baseURL = "http://43.200.239.12/";

// query : 주소?키=값 ex) http://43.200.239.12/users/search?username=test
// parameter => ex) http://43.200.239.12/posts/all/123 => 마지막 123이 파라미터

export async function signIn(form) {
  // Promise(비동기)를 기다려주는 async, await
  //   => ex) Promise, setTimeout, 파일 불러오기, api 통신 등...
  //   => resolve가 되는 순간까지 기다린다.
  return await axios.post("users", form);
}

export async function logIn(form) {
  try {
    const result = await axios.post("/users/login", form);

    if (result.status === 201) {
      //로그인 성공시 header에 jwt 토큰 추가

      cookies.set("access_token", result.data.data.token);
    }
  } catch (e) {
    throw Error("이메일과 비밀번호를 확인해주세요.");
    // throw new Error 에러를 커스텀해서 던져주고
    //  => 발생한 에러에 대한 처리를 컴포넌트에 작성
  }
}

export async function getCurrent() {
  try {
    const result = await axios.get("users");
    return result;
  } catch (e) {
    console.log("토큰 없음");
  }
}

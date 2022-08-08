import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";

const StyleLink = styled(Link)`
  color: black;
`;

const Block = styled.ul`
  display: flex;
  padding: 0;
  li {
    list-style: none;
    padding: 10px 20px;
  }
`;

export default function About() {
  const { pathname, search } = useLocation();
  // ?name="sdadsa"&
  const query = new URLSearchParams(search);
  console.log(query.get("keyword"));
  console.log(query.get("type"));
  const id = pathname.split("/").pop();
  console.log(id);
  return (
    <div>
      <Block>
        <li style={{ background: id === "1" ? "blue" : "none" }}>
          <StyleLink to="1">1</StyleLink>
        </li>
        <li style={{ background: id === "2" ? "blue" : "none" }}>
          <Link to="2">2</Link>
        </li>
        <li style={{ background: id === "3" ? "blue" : "none" }}>
          <Link to="3">3</Link>
        </li>
        <li style={{ background: id === "4" ? "blue" : "none" }}>
          <Link to="4">4</Link>
        </li>
      </Block>
      <h1>About</h1>
      <p>이 페이지는 About 페이지입니다.</p>
      <Routes>
        <Route path=":id" element={<Detail />} />
      </Routes>
    </div>
  );
}

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const onCreate = () => {
    // user 목록 생성 후 /users로 이동
    // Link 태그를 직접 클릭하는 것이 아닌 특정 코드 실행 후 이동할 때 사용
    navigate("/users");
  };
  useEffect(() => {
    // id가 1인 페이지 데이터 불러오기
  }, []);
  return (
    <div>
      <h1>상세 페이지{id}</h1>
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

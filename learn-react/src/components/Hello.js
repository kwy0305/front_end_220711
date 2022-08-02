import React from "react";

// 컴포넌트를 호출할 때 프로퍼티를 입력하면 props라는 객체 형태로 인자로 전달.
//   => 객체 비구조화를 통해 간략하게 사용할 수 있다.
// function Hello(props) => function Hello({title, color, children})
function Hello({ title, color, children }) {
  // p태그에 설명 추가하기
  // 객체 비구조화 할당
  return (
    <div>
      <h1 style={{ color }}>Hello, {title} </h1>
      {/* 컴포넌트 호출 시 컴포넌트의 여는태그와 닫는 태그 사이의 내용을 children이라는 프로퍼티로 받는다. */}
      {children}
    </div>
  );
}

// 프로퍼티에 아무것도 전달되지 않았을 때 적용할 기본값.
Hello.defaultProps = {
  title: "React",
  color: "red",
};

export default Hello;

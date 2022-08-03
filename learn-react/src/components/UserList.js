// 매개변수가 {userList : [...]} 형식으로 전달 => 비구조화 할당

import React, { useEffect } from "react";

const User = React.memo(({ user, onRemove, onToggle }) => {
  const { id, name, email, isFriend } = user;

  // 컴포넌트 마운트와 언마운트 시 실행됨
  useEffect(() => {
    console.log(id, "User가 마운트됨");
    // 초기값 설정할 때
    // API 요청을 할 때
    // setTimeout, setInterval
    // 라이브러리 사용
    return () => {
      console.log(id, "User가 언마운트됨");
      // 정리함수
      // clearTimout, clearInterval
      // 라이브러리 인스턴스 지울 때
    };
  }, [id]);

  // deps : [] 안에 전달한 값이 변할때 마다 실행
  //   => ex) keyword라는 상태값을 디펜던시에 넣고 keyword에 변화가 있을 때마다 API 호출
  useEffect(() => {
    console.log(id, "isFriend 값이 변함", isFriend);
    // useEffect 안에서 props나 상태값을 사용하면 디펜던시에 추가해줘야한다.
    //   => 디펜던시에 추가하지 않으면 최신값을 참조할 수가 없다.
  }, [isFriend, id]);

  // [] 자체를 전달안하면 렌더링이 일어날 때마다 실행된다.
  useEffect(() => {
    console.log("User 렌더링이 일어남");
  });

  return (
    <li
      style={{
        color: isFriend && "blue",
        display: "flex",
        alignItems: "center",
      }}
    >
      <p onClick={() => onToggle(id)} style={{ cursor: "pointer" }}>
        {name}({email})
      </p>
      <button onClick={() => onRemove(id)}>삭제</button>
    </li>
  );
});

function UserList({ userList, onRemove, onToggle }) {
  // 상위 컴포넌트가 리렌더링이 일어나면 하위 컴포넌트들도 렌더링이 다시 일어난다.
  useEffect(() => {
    console.log("UserList 렌더링");
  });

  return (
    <>
      <ul>
        {userList.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          );
        })}
      </ul>
    </>
  );
}

// 필요할때만 렌더링이 일어난다. => props 값이 변했을 때
export default React.memo(UserList);

import { useCallback, useMemo, useRef, useState } from "react";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import Counter from "./components/Counter";

const initialState = [
  {
    id: 1,
    name: "seok",
    email: "test@gmail.com",
    isFriend: false,
  },
  {
    id: 2,
    name: "adsadsa",
    email: "adssadsd@gmail.com",
    isFriend: true,
  },
];

function countFriend(list) {
  console.log("친한 친구 세는 중");
  return list.filter((user) => user.isFriend).length;
}

function App() {
  const [userList, setUserList] = useState(initialState);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const { name, email } = inputs;

  // useMemo : []안의 값(userList) 변경이 일어날 때만 연산
  const friendNum = useMemo(() => {
    return countFriend(userList);
  }, [userList]);

  const nextId = useRef(3);

  const onCreate = useCallback(() => {
    setUserList((userList) => {
      return [
        ...userList,
        {
          id: nextId.current,
          // name : name,
          name,
          email,
          isFriend: false,
        },
      ];
    });
    nextId.current++;
    setInputs({
      name: "",
      email: "",
    });
  }, [email, name]);

  // useCallback : []안의 값(inputs) 변경이 일어날 때만 함수를 재생성
  const onChange = useCallback((e) => {
    setInputs((inputs) => {
      return { ...inputs, [e.target.name]: e.target.value };
    });
  }, []);

  // 함수형 업데이트 : set함수 인자로 함수를 전달하면 매개변수에 최신값 전달
  //   ex) setNumer((num) = > num +1)
  const onRemove = useCallback((id) => {
    // 삭제기능 구현해보기 => setUserList
    setUserList((userList) => {
      return userList.filter((user) => user.id !== id);
    });
  }, []);

  const onToggle = useCallback((id) => {
    // isFreind 값 반전 시키기
    setUserList((userList) => {
      return userList.map((user) => {
        return user.id === id ? { ...user, isFriend: !user.isFriend } : user;
      });
    });
  }, []);

  return (
    <>
      <CreateUser
        onCreate={onCreate}
        name={name}
        email={email}
        onChange={onChange}
      />
      <UserList userList={userList} onRemove={onRemove} onToggle={onToggle} />
      <div>친한 친구 : {friendNum}</div>
    </>
  );
}

export default App;

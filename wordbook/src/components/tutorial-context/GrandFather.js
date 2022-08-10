import { createContext, useContext } from "react";

// 1. Context 생성 => 전역 상태 관리
//  => 다른 파일에서 사용하기 위해서 export한다.
export const GrandContext = createContext(null);

export default function GrandFather() {
  const value = 1;
  return (
    //2. Context.Provider 안에 있는 컴포넌트만 전역 상태에 접근 할 수 있다.
    // Context.Provider value 프로퍼티에 전달 하고자 하는 값을 지정
    <GrandContext.Provider value={value}>
      <Father />
    </GrandContext.Provider>
  );
}

function Father() {
  // useContext의 인자로 createContext로 생성한 컨텍스트를 전달하면
  // Provider value 프로퍼티에 지정한 값을 받을 수 있다
  const value = useContext(GrandContext);
  console.log(value);
  return <Son />;
}
function Son() {
  const value = useContext(GrandContext);
  console.log("son : ", value);
  return <GrandSon />;
}

function GrandSon() {
  const value = useContext(GrandContext);
  console.log("grandson : ", value);
}

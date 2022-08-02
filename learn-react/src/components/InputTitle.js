import { useState, useRef } from "react";
// React Hook : 유용한 함수들 => 컴포넌트 함수 안에서 호출해야한다

function InputTitle() {
  // 상태를 객체로 관리할 때는 업데이트 할 때 초기값 형태 그대로 업데이트를 해야한다.
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
    age: 0,
  });

  const inputRef = useRef();

  function onChange(e) {
    setInputs({
      // 스프레드를 통해서 기존 inputs의 프로퍼티를 먼저 나열한 뒤에 특정 프로퍼티만 업데이트
      ...inputs,
      // 동적 프로퍼티 접근 : []안에 문자열로 키값을 지정하여 접근할 수 있다.
      [e.target.name]: e.target.value,
    });
  }

  const onRemove = () => {
    setInputs({
      name: "",
      nickname: "",
      age: 0,
    });

    inputRef.current.focus();
  };

  // 동적 프로퍼티 접근이 없다면 input 태그 하나당 함수를 하나씩 바인딩 해야한다.
  // const onChangeName = (e) => {
  //   setInputs({
  //     ...inputs,
  //     name : e.target.value
  //   })
  // }

  const { name, nickname, age } = inputs;

  return (
    <>
      {/* 이벤트 바인딩 : 특정 이벤트가 발생했을 때에 실행할 콜백함수를 묶어주는 것 */}
      <div>
        <input
          type="text"
          onChange={onChange}
          name="name"
          ref={inputRef}
          value={name}
        />
        <input
          type="text"
          onChange={onChange}
          name="nickname"
          value={nickname}
        />
        <input type="number" onChange={onChange} name="age" value={age} />
        <button onClick={onRemove}>삭제</button>
      </div>
      <div>
        {name}({nickname}) : {age}
      </div>
    </>
  );
}

// import 할때 { NUM } 과 같은 형식
export const NUM = 1;
// import InputTitle
export default InputTitle;

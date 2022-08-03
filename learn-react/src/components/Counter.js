import { useState } from "react";

function Counter() {
  // useState(초기값) : [초기값, set함수]를 반환한다.
  //   => set함수를 통해 새로운 값을 업데이트하면 렌더링이 다시 일어난다.
  const [count, setCount] = useState(0);
  const [increaseNum, setIncreaseNum] = useState(0);

  console.log(count);
  function add() {
    // 비동기적으로 작동 => 일괄적으로 처리
    //   => 한번만 실행
    setCount(count + increaseNum);
    setCount(count + increaseNum);
    setCount(count + increaseNum);
  }

  function sub() {
    // 최적화할 때 사용
    // 함수형 업데이트 : set함수의 인자로 콜백함수를 전달하면 콜백함수의 첫번째 인자로 최신 상태값을 전달
    setCount((num) => num - increaseNum);
    setCount((num) => num - increaseNum);
    setCount((num) => num - increaseNum);
  }

  // 이벤트 객체를 받아서 증가량을 업데이트
  function onchangeIncrease(e) {
    // input 태그의 값이 문자열로 전달되기 때문에 숫자로 변환
    let increaseNum = parseInt(e.target.value);
    setIncreaseNum(increaseNum);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={add}>증가</button>
      <button onClick={sub}>감소</button>
      증가량 : <input type="number" onChange={onchangeIncrease} />
    </>
  );
}

export default Counter;

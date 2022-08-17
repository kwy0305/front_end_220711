// 액션 타입(상수)
//   => 자동완성, 오타방지
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// 액션을 생성하는 함수
export const increase = () => ({ type: INCREMENT });
export const decrease = () => ({ type: DECREMENT });

// 리듀서
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

// 교통카드
// 충전 : 잔액 증가
// 사용 : 잔액 감소
// 금액 : 충전/사용 시 금액
// 내역 : 충전/사용 내역

import { useTraffic } from "../hooks/useTraffic";

export default function TrafficCard() {
  const [state, changePrice, changeAmount] = useTraffic();

  return (
    <div>
      <h3>잔액 : {state.amount}</h3>
      <p>
        금액 :{" "}
        <input
          type="number"
          step={1000}
          min={1000}
          max={20000}
          defaultValue={1000}
          onChange={changePrice}
        />
      </p>
      <button onClick={() => changeAmount(1)}>충전</button>
      <button onClick={() => changeAmount(-1)}>사용</button>
      <ul>
        {state.history.map((item) => (
          <li style={{ color: item.type === "charge" ? "blue" : "red" }}>
            {item.price}원 {item.type === "charge" ? "충전" : "사용"}. 잔액 :{" "}
            {item.amount}원
          </li>
        ))}
      </ul>
    </div>
  );
}

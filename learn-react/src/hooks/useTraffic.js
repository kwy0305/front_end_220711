import { useReducer } from "react";

const initialState = {
  amount: 0,
  price: 1000,
  history: [],
};

const actionTypes = {
  change_price: "change_price",
  change_amount: "change_amount",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.change_price:
      return { ...state, price: parseInt(action.price) };
    case actionTypes.change_amount:
      return {
        ...state,
        amount: action.chargePrice,
        history: [
          ...state.history,
          {
            type: action.chargePrice > 0 ? "charge" : "use",
            price: state.price,
            amount: action.chargePrice,
          },
        ],
      };

    default:
      return state;
  }
}

export function useTraffic() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeAmount(operator) {
    let { amount, price } = state;
    let chargePrice = amount + price * operator;
    if (chargePrice >= 0) {
      dispatch({ type: actionTypes.change_amount, chargePrice });
    } else {
      alert("잔액이 부족학니다.");
    }
  }

  function changePrice(e) {
    dispatch({ type: actionTypes.change_price, price: e.target.value });
  }

  return [state, changePrice, changeAmount];
}

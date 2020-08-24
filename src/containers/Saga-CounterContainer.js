import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/saga-counter";

export default function SagaCounterContainer() {
  //useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  const number = useSelector((state) => state.sagaCounter);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <>
      <h3>Saga Counter</h3>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      ></Counter>
    </>
  );
}

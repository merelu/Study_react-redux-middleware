import React from "react";
import Counter from "../components/Counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import { useSelector, useDispatch } from "react-redux";

export default function CounterContainer() {
  //useSelector는 리덕스 스토어의 상태를 조회하는 Hook이다.
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    ></Counter>
  );
}

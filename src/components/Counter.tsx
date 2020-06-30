import * as React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { increment, decrement } from "../services/ducks/counter";

export function Counter() {
  const dispatch = useDispatch();
  const counter = useTypedSelector((state) => state.counter);

  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button> {counter}{" "}
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}

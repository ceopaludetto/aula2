import { createReducer } from "typesafe-actions";

import { CounterState, CounterTypes } from "./types";
import { CounterActions, increment, decrement } from "./actions";

const initialState: CounterState = 0;

export const counter = createReducer<CounterState, CounterActions>(initialState, {
  [CounterTypes.increment]: (state) => state + 1,
  [CounterTypes.decrement]: (state) => state - 1,
});

export { CounterTypes, increment, decrement };

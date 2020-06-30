import { action, ActionType } from "typesafe-actions";

import { CounterTypes } from "./types";

export const increment = () => action(CounterTypes.increment);

export const decrement = () => action(CounterTypes.decrement);

export type CounterActions = ActionType<{
  increment: typeof increment;
  decrement: typeof decrement;
}>;

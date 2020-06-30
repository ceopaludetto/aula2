import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";

import { counter } from "./ducks/counter";
import { repos } from "./ducks/repos";

export const reducers = combineReducers({ counter, repos });

export type ApplicationState = {
  counter: StateType<typeof counter>;
  repos: StateType<typeof repos>;
};

import * as React from "react";
import { Provider } from "react-redux";

import { store } from "./providers/store";
import { Counter } from "./components/Counter";
import { CounterTitle } from "./components/CounterTitle";
import { FetchReposByUser } from "./components/FetchRepos";

export function App() {
  return (
    <Provider store={store}>
      <CounterTitle />
      <Counter />
      <hr />
      <FetchReposByUser />
    </Provider>
  );
}

import * as React from "react";

import { useTypedSelector } from "../hooks/useTypedSelector";

export function CounterTitle() {
  const counter = useTypedSelector((state) => state.counter);
  const repos = useTypedSelector((state) => state.repos);

  return (
    <>
      <h1>(Redux Typescript)Titulo deve ter o contador: {counter}</h1>
      <h2>E o subtitulo o numero de repos: {repos.data.length}</h2>
    </>
  );
}

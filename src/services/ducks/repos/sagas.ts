import axios from "axios";
import { call, put } from "redux-saga/effects";
import { ActionType } from "typesafe-actions";

import { request, success, failure } from "./actions";

export function* requestRepos(action: ActionType<typeof request>) {
  try {
    const res = yield call(axios.get, `https://api.github.com/users/${action.payload.username}/repos`);

    if (res?.data) {
      yield put(success(res.data));
    } else {
      yield put(failure(new Error("Falha ao capturar repositorios")));
    }
  } catch (error) {
    yield put(failure(error));
  }
}

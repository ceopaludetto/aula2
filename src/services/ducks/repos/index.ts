import { createReducer } from "typesafe-actions";

import { RepoState, RepoTypes } from "./types";
import { RepoActions, request, success, failure } from "./actions";

const initialState: RepoState = {
  loading: false,
  success: false,
  failure: false,
  error: undefined,
  data: [],
};

export const repos = createReducer<RepoState, RepoActions>(initialState, {
  [RepoTypes.request]: (state) => ({ ...state, loading: true }),
  [RepoTypes.success]: (state, action) => ({
    ...state,
    loading: false,
    success: true,
    data: action.payload.data,
  }),
  [RepoTypes.failure]: (state, action) => ({
    ...state,
    loading: false,
    failure: true,
    error: action.payload.error,
  }),
});

export { RepoTypes, request, success, failure };

export { requestRepos } from "./sagas";

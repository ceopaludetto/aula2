import { action, ActionType } from "typesafe-actions";

import { RepoTypes } from "./types";

export const request = (username: string) =>
  action(RepoTypes.request, {
    username,
  });

export const success = (data: { id: number; name: string }[]) =>
  action(RepoTypes.success, {
    data,
  });

export const failure = (error: Error) =>
  action(RepoTypes.failure, {
    error,
  });

export type RepoActions = ActionType<{
  request: typeof request;
  success: typeof success;
  failure: typeof failure;
}>;

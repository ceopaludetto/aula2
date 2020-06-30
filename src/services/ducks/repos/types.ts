export enum RepoTypes {
  request = "@REPOS/REQUEST",
  success = "@REPOS/SUCCESS",
  failure = "@REPOS/FAILURE",
}

export type RepoState = {
  loading: boolean;
  success: boolean;
  failure: boolean;
  error?: Error;
  data: { id: number; name: string }[];
};

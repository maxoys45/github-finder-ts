export const SEARCH_USERS = "SEARCH_USERS";
export const CLEAR_USERS = "CLEAR_USERS";
export const GET_USER = "GET_USER";
export const GET_REPOS = "GET_REPOS";
export const SET_LOADING = "SET_LOADING";

export type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  company?: string;
  location?: string;
  bio?: string;
  blog?: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
};

export type Repo = {
  id: number;
  html_url: string;
  name: string;
};

export type GithubStateType = {
  users: User[];
  user: User | null;
  repos: Repo[];
  loading: boolean;
};

export type GithubContextType = GithubStateType & {
  searchUsers: (text: string) => Promise<void>;
  clearUsers: () => void;
  getUser: (username: string) => Promise<void>;
  getUserRepos: (username: string) => Promise<void>;
};

export const GithubInitialState: GithubStateType = {
  users: [],
  user: null,
  repos: [],
  loading: false,
};

export const GithubInitialContext: GithubContextType = {
  ...GithubInitialState,
  searchUsers: async () => {},
  clearUsers: () => {},
  getUser: async () => {},
  getUserRepos: async () => {},
};

export type GithubAction =
  | { type: typeof SEARCH_USERS; payload: User[] }
  | { type: typeof CLEAR_USERS }
  | { type: typeof GET_USER; payload: User }
  | { type: typeof GET_REPOS; payload: Repo[] }
  | { type: typeof SET_LOADING };

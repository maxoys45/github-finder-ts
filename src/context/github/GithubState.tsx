import { useReducer, useCallback, ReactNode } from "react";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  GithubInitialState,
} from "./types";

let githubClientId: string | undefined;
let githubClientSecret: string | undefined;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(GithubReducer, GithubInitialState);

  // Search User
  const searchUsers = async (text: string) => {
    setLoading();

    const response = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    const result = await response.json();

    dispatch({
      type: SEARCH_USERS,
      payload: result.items,
    });
  };

  // Get User
  const getUser = useCallback(async (username: string) => {
    setLoading();

    const response = await fetch(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    const result = await response.json();

    dispatch({
      type: GET_USER,
      payload: result,
    });
  }, []);

  // Get Repos
  const getUserRepos = useCallback(async (username: string) => {
    setLoading();

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    const result = await response.json();

    dispatch({
      type: GET_REPOS,
      payload: result,
    });
  }, []);

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;

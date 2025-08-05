import { useContext } from "react";

import GithubContext from "../../context/github/githubContext";

import { Repo } from "../../context/github/types";

import RepoItem from "./RepoItem";

const Repos = () => {
  const { repos } = useContext(GithubContext);

  return (
    <>
      {repos.map((repo: Repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </>
  );
};

export default Repos;

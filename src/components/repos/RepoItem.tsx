import { Repo } from "../../context/github/types";

const RepoItem = ({ repo }: { repo: Repo }) => {
  return (
    <div className="badge badge-white">
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};

export default RepoItem;

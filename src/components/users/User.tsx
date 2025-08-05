import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import GithubContext from "../../context/github/githubContext";

import Repos from "../repos/Repos";
import Spinner from "../layout/Spinner";

const User = () => {
  const githubContext = useContext(GithubContext);
  const { getUser, user, getUserRepos, loading } = githubContext;

  const { login: username = "" } = useParams();

  useEffect(() => {
    getUser(username);
    getUserRepos(username);
  }, [getUser, getUserRepos, username]);

  if (!user) return null;

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  const details = [
    {
      title: "Username",
      value: login,
    },
    {
      title: "Company",
      value: company,
    },
    {
      title: "Website",
      value: blog,
    },
  ];

  if (loading) return <Spinner />;

  return (
    <>
      <Link className="btn btn-light" to="/">
        Back to Search
      </Link>

      <div className="card grid-2">
        <div className="all-center">
          <img
            className="round-img"
            src={avatar_url}
            alt={name}
            style={{ width: "150px" }}
          />

          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}

          <a className="btn btn-dark my-1" href={html_url}>
            Visit GitHub profile
          </a>

          <ul>
            {details.map(({ title, value }) => {
              if (!value) return null;

              return (
                <li key={title}>
                  <strong>{title}: </strong>{" "}
                  {title === "Website" ? (
                    <a target="_blank" rel="noreferrer" href={value}>
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>

      <div className="card">
        <h2>Recent repos:</h2>

        <Repos />
      </div>
    </>
  );
};

export default User;

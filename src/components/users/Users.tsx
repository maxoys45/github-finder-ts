import { useContext } from "react";

import GithubContext from "../../context/github/githubContext";

import { User } from "../../context/github/types";

import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = () => {
  const { loading, users } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={userStyle}>
      {users.map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;

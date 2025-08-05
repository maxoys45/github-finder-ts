import { Link } from "react-router-dom";

import { User } from "../../context/github/types";

const UserItem = ({ user }: { user: User }) => {
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={user.avatar_url}
        alt={user.login}
        style={{ width: "60px" }}
      />

      <h3>{user.login}</h3>

      <Link className="btn btn-dark btn-sm my-1" to={`/user/${user.login}`}>
        More
      </Link>
    </div>
  );
};

export default UserItem;

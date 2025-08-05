import { ChangeEvent, FormEvent, useContext, useState } from "react";

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

import { GithubContextType } from "../../context//github/types";

const Search = () => {
  const githubContext = useContext<GithubContextType>(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please enter something.", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          className="form-control"
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />

        <input
          className="btn btn-dark btn-block"
          type="submit"
          value="Search"
        />

        {githubContext.users.length > 0 && (
          <button
            className="btn btn-light btn-block"
            onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;

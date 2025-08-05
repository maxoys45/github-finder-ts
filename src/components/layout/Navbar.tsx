import { Link } from "react-router-dom";

type NavBarProps = {
  title: string;
};

const Navbar = ({ title = "Github finder" }: NavBarProps) => (
  <nav className="navbar bg-primary">
    <h2>{title}</h2>

    <ul>
      <li>
        <Link to="../">Home</Link>
      </li>
      <li>
        <Link to="../about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Alert from "./Alert";

const Layout = () => {
  return (
    <div className="App">
      <Navbar title="Github finder TS" />

      <div className="container">
        <Alert />

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

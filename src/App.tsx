import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/users/User";
import NotFound from "./components/pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="user/:login" element={<User />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

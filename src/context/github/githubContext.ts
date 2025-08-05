// @ts-nocheck

import { createContext } from "react";

import { GithubContextType, GithubInitialContext } from "./types";

const GithubContext = createContext<GithubContextType>(GithubInitialContext);

export default GithubContext;

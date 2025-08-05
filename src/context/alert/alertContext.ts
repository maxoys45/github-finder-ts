import { createContext } from "react";

import { AlertContextType, AlertInitialContextState } from "./types";

const AlertContext = createContext<AlertContextType>(AlertInitialContextState);

export default AlertContext;

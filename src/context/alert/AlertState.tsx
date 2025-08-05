import { useReducer, ReactNode } from "react";

import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT, AlertInitialState } from "./types";

const AlertState = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AlertReducer, AlertInitialState);

  // Show alert
  const setAlert = (msg: string, theme: string) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, theme },
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
        }),
      3000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;

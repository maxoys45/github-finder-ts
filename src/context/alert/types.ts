export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

export type AlertType = {
  msg: string;
  theme: string;
};

export type AlertContextType = {
  alert: AlertType | null;
  setAlert: (msg: string, theme: string) => void;
};

export const AlertInitialState: AlertType | null = null;

export const AlertInitialContextState: AlertContextType = {
  alert: null,
  setAlert: () => {},
};

export type AlertAction =
  | { type: typeof SET_ALERT; payload: AlertType }
  | { type: typeof REMOVE_ALERT };

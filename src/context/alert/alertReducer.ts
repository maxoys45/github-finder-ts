import { SET_ALERT, REMOVE_ALERT, AlertType, AlertAction } from "./types";

const Reducer = (
  state: AlertType | null,
  action: AlertAction
): AlertType | null => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;

    case REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};

export default Reducer;

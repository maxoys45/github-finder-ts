import { useContext } from "react";

import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  if (!alert) return null;

  return <div className={`alert alert-${alert.theme}`}>{alert.msg}</div>;
};

export default Alert;

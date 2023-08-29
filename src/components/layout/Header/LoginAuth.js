import classes from "./LoginAuth.module.css";
import { Fragment, useState, useEffect } from "react";
import { useRouteLoaderData, Link } from "react-router-dom";
import User from "../../utils/icons/User";
import Login from "../../utils/icons/Login";
import UserOptions from "./UserOptions";
const LoginAuth = () => {
  const [show, setShow] = useState(false);

  const token = useRouteLoaderData("layout");
  useEffect(() => {
    setShow(false);
  }, [token]);
  const clickHandler = () => {
    setShow(true);
  };
  const closeHandler = () => {
    setShow(false);
  };
  return (
    <Fragment>
      {!token && (
        <Link to="/auth">
          <Login className={classes.login} />
        </Link>
      )}
      {token && (
        <button className={classes.logout} type="submit" onClick={clickHandler}>
          <User className={classes.user} />
        </button>
      )}
      {show && <UserOptions onClose={closeHandler} />}
    </Fragment>
  );
};
export default LoginAuth;

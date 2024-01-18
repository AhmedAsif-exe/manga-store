import classes from "./LoginAuth.module.css";
import { Fragment, useState, useEffect } from "react";
import { useRouteLoaderData, Link } from "react-router-dom";
import User from "../../utils/icons/User.svg";
import Login from "../../utils/icons/Login.svg";
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
        <Link
          to="/auth"
          className={`middle-child ${classes.login}`}
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <img loading="lazy" src={Login} alt="login" />
        </Link>
      )}
      {token && (
        <button
          className={`${classes.logout} ${classes.user}`}
          type="submit"
          onClick={clickHandler}
        >
          <img loading="lazy" src={User} alt="user" />
        </button>
      )}
      {show && <UserOptions onClose={closeHandler} />}
    </Fragment>
  );
};
export default LoginAuth;

import classes from "./LoginAuth.module.css";
import { Fragment } from "react";
import { useFetcher, useRouteLoaderData, Link } from "react-router-dom";
import User from "../../utils/icons/User";
import Login from "../../utils/icons/Login";
const LoginAuth = () => {
  const fetcher = useFetcher();
  const token = useRouteLoaderData("layout");
  return (
    <Fragment>
      {!token && (
        <Link to="/auth">
          <Login className={classes.login} />
        </Link>
      )}
      {token && (
        <fetcher.Form method="POST" action="/logout">
          <button className={classes.logout} type="submit">
            <User className={classes.user} />
          </button>
        </fetcher.Form>
      )}
    </Fragment>
  );
};
export default LoginAuth;

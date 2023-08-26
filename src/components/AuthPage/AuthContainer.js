import AuthCard from "./AuthCard";
import classes from "./AuthContainer.module.css";
import { useSearchParams } from "react-router-dom";
const AuthContainer = (props) => {
  const [params] = useSearchParams();
  const logIn = params.get("mode") === "login";
  return (
    <div className={classes.container}>
      <AuthCard logIn={logIn} data={props.data} />
    </div>
  );
};
export default AuthContainer;

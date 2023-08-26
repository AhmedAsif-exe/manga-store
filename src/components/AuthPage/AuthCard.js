import classes from "./AuthCard.module.css";
import { Link, Form, useNavigation } from "react-router-dom";
const AuthCard = ({ logIn, data }) => {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";
  let credentialErrors = {};
  if (data && data.status === 422) credentialErrors = data.errors;
  return (
    <div className={classes.box}>
      <span className={classes.box__borderline}></span>

      <Form className={classes.form} method="POST">
        <h2 className={classes.form__title}> {logIn ? "Log In" : "Sign Up"}</h2>
        {credentialErrors.credentials && (
          <p className={classes.invalid} style={{ textAlign: "center" }}>
            {credentialErrors.credentials}
          </p>
        )}
        <div className={classes.form__box}>
          <input
            className={classes.form__input}
            type="email"
            name="email"
            required="required"
          />
          <span className={classes.form__span}>Email</span>
          <i className={classes.form__line}></i>
        </div>
        {credentialErrors.email && (
          <p className={classes.invalid}>{credentialErrors.email}</p>
        )}

        <div className={classes.form__box}>
          <input
            className={classes.form__input}
            type="password"
            name="password"
            required="required"
          />
          <span className={classes.form__span}>Password</span>
          <i className={classes.form__line}></i>
        </div>
        {credentialErrors.password && (
          <p className={classes.invalid}>{credentialErrors.password}</p>
        )}

        <div className={classes.form__links}>
          <Link
            className={classes.form__link}
            to={`?mode=${logIn ? "signup" : "login"}`}
          >
            {logIn ? "Don't have an account?" : "Login with existing account"}
          </Link>
        </div>
        <button
          className={classes.form__submit}
          type="submit"
          disabled={submitting}
        >
          {submitting
            ? logIn
              ? "Logging In"
              : "Signing Up"
            : logIn
            ? "Log In"
            : "Sign Up"}
        </button>
      </Form>
    </div>
  );
};
export default AuthCard;

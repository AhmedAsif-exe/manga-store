import classes from "./AuthCard.module.css";
import { Link, Form, useNavigation } from "react-router-dom";
import useInput from "../../Hooks/use_input";
const AuthCard = ({ logIn, data }) => {
  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  const {
    hasError: emailHasError,
    onChangeHandler: emailOnChangeHandler,
    onBlurHandler: emailOnBlurHandler,
  } = useInput((data) => data.includes("@"));

  const {
    hasError: passwordHasError,
    onChangeHandler: passwordOnChangeHandler,
    onBlurHandler: passwordOnBlurHandler,
  } = useInput((data) => data.length > 8);
  let credentialErrors = {};
  if (data && data.status === 422) credentialErrors = data.errors;

  const formIsValid = !emailHasError && !passwordHasError;
  const emailInputClasses = `${classes.form__line} ${
    emailHasError ? classes["input_invalid"] : ""
  }`;
  const passwordInputClasses = `${classes.form__line} ${
    passwordHasError ? classes["input_invalid"] : ""
  }`;
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
            type="text"
            name="email"
            required
            onChange={emailOnChangeHandler}
            onBlur={emailOnBlurHandler}
          />
          <span className={classes.form__span}>Email</span>
          <i className={emailInputClasses}></i>
        </div>
        {credentialErrors.email && (
          <p className={classes.invalid}>{credentialErrors.email}</p>
        )}
        {emailHasError && (
          <p className={classes.invalid}>Must Include '@' symbol</p>
        )}
        <div className={classes.form__box}>
          <input
            className={classes.form__input}
            type="password"
            name="password"
            required
            onChange={passwordOnChangeHandler}
            onBlur={passwordOnBlurHandler}
          />
          <span className={classes.form__span}>Password</span>
          <i className={passwordInputClasses}></i>
        </div>
        {credentialErrors.password && (
          <p className={classes.invalid}>{credentialErrors.password}</p>
        )}
        {passwordHasError && (
          <p className={classes.invalid}>length must be greater than 8</p>
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
          disabled={submitting || !formIsValid}
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

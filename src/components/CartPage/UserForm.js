import classes from "./UserForm.module.css";
import useInput from "../../Hooks/use_input";

import OrderComplete from "./OrderComplete";
const UserForm = (props) => {
  const {
    value: firstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    onChangeHandler: firstNameChangeHanlder,
    onBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const firstNameInputClass = firstNameHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;

  const {
    value: lastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    onChangeHandler: lastNameChangeHanlder,
    onBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const lastNameInputClass = lastNameHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;
  const {
    value: address,
    valueIsValid: addressIsValid,
    hasError: addressHasError,
    onChangeHandler: addressChangeHanlder,
    onBlurHandler: addressBlurHandler,
    reset: addressReset,
  } = useInput((value) => value.trim() !== "");
  const addressInputClass = addressHasError
    ? `${classes.input} ${classes.invalid}`
    : `${classes.input}`;

  const formIsValid = firstNameIsValid && lastNameIsValid && addressIsValid;
  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    firstNameReset();
    lastNameReset();
    addressReset();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["container-grid"]}>
        <div className={firstNameInputClass}>
          <label htmlFor="FirstName">First</label>
          <input
            id="FirstName"
            type="text"
            onChange={firstNameChangeHanlder}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasError && (
            <p className={classes["error-text"]}>Can not accept empty texts</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="SecondName">Last</label>
          <input
            id="SecondName"
            type="text"
            onChange={lastNameChangeHanlder}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />

          {lastNameHasError && (
            <p className={classes["error-text"]}>Can not accept empty texts</p>
          )}
        </div>
        <div className={classes.input}>
          <label htmlFor="method">Payment Method</label>
          <select name="method" id="method">
            <option value="cash">Cash</option>
            <option value="card">Card</option>
          </select>
        </div>
      </div>
      <div className={addressInputClass}>
        <label htmlFor="address">Adress</label>
        <textarea
          id="adress"
          onChange={addressChangeHanlder}
          onBlur={addressBlurHandler}
          value={address}
        />
        {addressHasError && (
          <p className={classes["error-text"]}>Can not accept empty texts</p>
        )}
      </div>
      <div>
        <OrderComplete type="submit" disabled={!formIsValid}>
          Order
        </OrderComplete>
      </div>
    </form>
  );
};
export default UserForm;

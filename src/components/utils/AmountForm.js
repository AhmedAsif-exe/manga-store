import classes from "./AmountForm.module.css";
import { useEffect, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
const AmountForm = ({ formClass, quantityClass, children, cartData }) => {
  const ctx = useContext(CartContext);

  const [response, setResponse] = useState("");
  const [isValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const amount = data.get("amount");
    const number = +amount;
    if (amount.trim().length === 0 || number < 1 || number > 5) {
      setAmountIsValid(false);
      return;
    }
    setResponse(ctx.addItem({ ...cartData, amount: number }));
  };

  useEffect(() => {
    setTimeout(() => {
      setResponse("");
    }, 5000);
  }, [response]);

  const changeHandler = (event) => {
    if (event.target.value < 6 && event.target.value > 0)
      setAmountIsValid(true);
  };
  return (
    <form onSubmit={submitHandler} className={formClass || null}>
      <span className={quantityClass || null}>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          step="1"
          defaultValue="1"
          onChange={changeHandler}
        />
      </span>
      {!isValid && (
        <p className={classes["error-text"]}>
          Amount Can Not Exceed 5 And Don't Even Get Me Started On Negative
          Values
        </p>
      )}
      {response && <p className={classes["error-text"]}>{response}</p>}
      {children}
    </form>
  );
};
export default AmountForm;

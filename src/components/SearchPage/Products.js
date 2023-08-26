import { useContext, useState, useEffect } from "react";
import Card from "../utils/Card";
import classes from "./Products.module.css";
import CartContext from "../../store/cart-context";
const Products = ({ result }) => {
  const [isValid, setAmountIsValid] = useState(true);
  const [response, setResponse] = useState("");
  const ctx = useContext(CartContext);
  if (result.synopsis && result.synopsis.length > 200)
    result.synopsis = result.synopsis.slice(0, 200);
  useEffect(() => {
    setTimeout(() => {
      setResponse("");
    }, 5000);
  }, [response]);
  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const amount = data.get("amount");
    const number = +amount;
    if (amount.trim().length === 0 || number < 1 || number > 5) {
      setAmountIsValid(false);
      return;
    }
    setResponse(
      ctx.addItem({
        id: result.mal_id,
        author: result.author,
        title: result.title,
        amount: number,
        price: result.price,
      })
    );
  };
  return (
    <Card className={classes.card}>
      <h3 className={classes.title}>{result.title || "Title Not Found"}</h3>
      <div className={classes.container}>
        <img src={result.images.image_url} alt="title" />
        <div className={classes.synopsis}>
          <p>
            {result.synopsis || "Synopsis Not Found"}...
            {!result.synopsis || <a href="#">learn more</a>}
          </p>
        </div>
        <p className={classes.author}>
          by {result.author || "Author Not Found"}
        </p>
        <p className={classes.price}>
          {result.price ? `$${result.price} only` : "Free"}
        </p>
        <form onSubmit={submitHandler}>
          <span className={classes.quantity}>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
            />
          </span>
          {!isValid && (
            <p className={classes["error-text"]}>Can Not Accept Invalid Name</p>
          )}
          {response && <p className={classes["error-text"]}>{response}</p>}
          <button type="submit" disabled={!isValid}>
            + Add
          </button>
        </form>
      </div>
    </Card>
  );
};
export default Products;

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  let price = "";
  if (props.price) price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.title || "Title Not Available"}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price || "0.00"}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

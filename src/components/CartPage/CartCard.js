import CartItem from "./CartItem";
import { useContext, Fragment, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartCard.module.css";
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import UserForm from "./UserForm";
const CartCard = (props) => {
  const token = useRouteLoaderData("layout");
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${
    cartCtx.totalAmount.toFixed(2) === "-0.00"
      ? "0.00"
      : cartCtx.totalAmount.toFixed(2)
  }`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.incrementItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const orderHandler = () => {
    if (!token) navigate("/auth");
    setShowForm(true);
  };
  return (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Checkout
          </button>
        )}
        <button
          className={classes["button--alt"]}
          onClick={() => navigate("/")}
        >
          Cancel
        </button>

        {showForm && <UserForm />}
      </div>
    </Fragment>
  );
};

export default CartCard;

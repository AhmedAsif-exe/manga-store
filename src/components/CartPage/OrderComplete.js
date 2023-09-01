import classes from "./OrderComplete.module.css";
import { Fragment, useState, useContext } from "react";
import { useNavigate, useFetcher } from "react-router-dom";
import CartContext from "../../store/cart-context";
const OrderComplete = (props) => {
  const ctx = useContext(CartContext);
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const [showAnimation, setAnimation] = useState(false);
  const clickHandler = () => {
    if (!setAnimation) return;
    setAnimation(true);
    const summary = ctx.generateSummary();

    setTimeout(() => {
      setAnimation(false);
      ctx.clearCart();
      window.scrollTo(0, 0);
      navigate("/");
    }, 10000);
    fetcher.submit(summary, { method: "POST", action: "/orders" });
  };
  const orderClass = showAnimation
    ? `${classes.order} ${classes.animate}`
    : `${classes.order}`;
  return (
    <Fragment>
      <button
        type={props.type}
        className={orderClass}
        disabled={props.disabled}
        onClick={clickHandler}
      >
        <span className={classes["default"]}>{props.children}</span>
        <span className={classes["success"]}>
          Order Placed
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <div className={classes["box"]}></div>
        <div className={classes["truck"]}>
          <div className={classes["back"]}></div>
          <div className={classes["front"]}>
            <div className={classes["window"]}></div>
          </div>
          <div className={`${classes.light} ${classes.top}`}></div>
          <div className={`${classes.light} ${classes.bottom}`}></div>
        </div>
        <div className={classes["lines"]}></div>
      </button>
      <a
        className={classes["dribbble"]}
        href="https://dribbble.com/shots/7112021-Order-confirm-animation"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
          alt="excess external resource"
        />
      </a>
    </Fragment>
  );
};
export default OrderComplete;

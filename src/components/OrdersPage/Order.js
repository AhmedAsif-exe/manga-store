import classes from "./Order.module.css";
const Order = (props) => {
  return (
    <li className={classes.order}>
      <div>
        <h3>
          <section>Date: {props.date}</section>
          <section>Time: {props.time}</section>
        </h3>
        <div className={classes.summary}>Order Summary: {props.summary}</div>
        <div className={classes.price}>Total: {props.total}</div>
      </div>
    </li>
  );
};

export default Order;

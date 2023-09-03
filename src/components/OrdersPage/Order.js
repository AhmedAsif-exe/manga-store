import classes from "./Order.module.css";
const Order = (props) => {
  return (
    <li className={classes.order}>
      <div>
        <h3>
          <section>
            <span className={classes.heading}>Date:</span> {props.date}
          </section>
          <section>
            <span className={classes.heading}>Time:</span> {props.time}
          </section>
        </h3>

        <div className={classes.summary}>
          <span className={classes.heading}>Order Summary:</span>
          {props.summary}
        </div>
        <div className={classes.price}>Total: {props.total}</div>
      </div>
    </li>
  );
};

export default Order;

import classes from "./CartContainer.module.css";
import Card from "../utils/Card";
import CartCard from "./CartCard";
import { redirect } from "react-router-dom";
const CartContainer = () => {
  return (
    <div className={classes.container}>
      <h2>Your Cart..</h2>
      <Card className={classes.card}>
        <CartCard />
      </Card>
    </div>
  );
};
export default CartContainer;

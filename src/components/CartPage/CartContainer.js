import classes from "./CartContainer.module.css";
import Card from "../utils/Card";
import CartCard from "./CartCard";
import PageTemplate from "../utils/PageTemplate";
const CartContainer = () => {
  return (
    <PageTemplate title="Your Cart..">
      <Card className={classes.card}>
        <CartCard />
      </Card>
    </PageTemplate>
  );
};
export default CartContainer;

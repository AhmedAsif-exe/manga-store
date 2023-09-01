import classes from "./OrdersContainer.module.css";
import PageTemplate from "../utils/PageTemplate";
import Card from "../utils/Card";
import Order from "./Order";
const OrdersPage = ({ orders }) => {
  const isEmpty = orders.length === 0;
  return (
    <PageTemplate title="Your Orders">
      <Card className={classes.card}>
        {!isEmpty && (
          <ul>
            {orders.map((order) => (
              <Order {...order} key={order.id} />
            ))}
          </ul>
        )}
        {isEmpty && (
          <p className={classes.notice}>You Have No Order History.</p>
        )}
      </Card>
    </PageTemplate>
  );
};
export default OrdersPage;

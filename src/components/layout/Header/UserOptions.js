import classes from "./UserOptions.module.css";
import Modal from "../../utils/Modal";
import OrderHistory from "../../utils/icons/OrderHistory";
import Logout from "../../utils/icons/Logout";
import { useFetcher } from "react-router-dom";
const UserOptions = (props) => {
  const fetcher = useFetcher();

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.container}>
        <div>
          <OrderHistory className={classes.order} />
          <p>Order History</p>
        </div>
        <div>
          <fetcher.Form method="POST" action="/logout">
            <button>
              <Logout className={classes.order} />
              <p>Log Out</p>
            </button>
          </fetcher.Form>
        </div>
      </div>
    </Modal>
  );
};

export default UserOptions;

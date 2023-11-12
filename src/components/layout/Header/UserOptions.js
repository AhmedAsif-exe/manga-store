import classes from "./UserOptions.module.css";
import Modal from "../../utils/Modal";
import OrderHistory from "../../utils/icons/OrderHistory.svg";
import Logout from "../../utils/icons/Logout.svg";
import { Link, useFetcher } from "react-router-dom";
const UserOptions = (props) => {
  const fetcher = useFetcher();

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.container}>
        <div>
          <Link to={"/orders"} className={classes.link} onClick={props.onClose}>
            <img
              src={OrderHistory}
              className={classes.order}
              alt="orderhistory icon"
            />
            <p>Order History</p>
          </Link>
        </div>
        <div>
          <fetcher.Form method="POST" action="/logout">
            <button>
              <img src={Logout} className={classes.order} alt="logout icon" />
              <p>Log Out</p>
            </button>
          </fetcher.Form>
        </div>
      </div>
    </Modal>
  );
};

export default UserOptions;

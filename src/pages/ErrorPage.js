import Layout from "../components/layout/Layout";
import classes from "./ErrorPage.module.css";
import { useRouteError } from "react-router-dom";
const ErrorPage = (props) => {
  const error = useRouteError();

  let title = "An Error Occured";

  let message = "Something Went Wrong";
  if (error.status === 500) message = "Something Went Wrong";
  if (error.status === 501) message = "Could Not Authenticate User";
  if (error.status === 422) message = "Unsupported mode.";
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could Not Find Resources or page";
  }
  return (
    <Layout>
      <div className={classes.wrapper}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </Layout>
  );
};

export default ErrorPage;

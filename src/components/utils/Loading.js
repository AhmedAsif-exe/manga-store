import classes from "./Loading.module.css";
import PageTemplate from "./PageTemplate";
const Loading = () => {
  return (
    <PageTemplate title={"Searching..."}>
      <div className={classes["multi-ripple"]}>
        <div></div>
        <div></div>
      </div>
      <p className={classes.status}>Loading...</p>
    </PageTemplate>
  );
};
export default Loading;

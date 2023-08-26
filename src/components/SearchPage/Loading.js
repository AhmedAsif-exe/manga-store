import classes from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={classes.container}>
      <h2>Searching...</h2>
      <div className={classes["multi-ripple"]}>
        <div></div>
        <div></div>
      </div>
      <p>Loading...</p>
    </div>
  );
};
export default Loading;

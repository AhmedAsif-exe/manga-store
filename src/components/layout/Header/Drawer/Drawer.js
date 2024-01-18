import classes from "./Drawer.module.css";
const Drawer = (props) => {
  return <div className={classes.drawer}>{props.children}</div>;
};
export default Drawer;

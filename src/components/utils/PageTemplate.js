import classes from "./PageTemplate.module.css";
const PageTemplate = (props) => {
  return (
    <div className={classes.container}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default PageTemplate;

import classes from "./PageTemplate.module.css";
const PageTemplate = (props) => {
  return (
    <div className={classes.screen}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default PageTemplate;

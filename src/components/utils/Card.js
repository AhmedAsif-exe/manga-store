import classes from "./Card.module.css";

const Card = (props) => {
  const { className } = props;
  return (
    <div className={`${className ? className : ""} ${classes.card}`}>
      {props.children}
    </div>
  );
};

export default Card;

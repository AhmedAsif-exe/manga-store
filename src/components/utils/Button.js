import classes from "./Button.module.css";
import Dot from "./icons/Dot";

const Button = (props) => {
  const buttonClass = props.className
    ? `${props.className} ${classes.button}`
    : classes.button;
  return (
    <button
      className={`${buttonClass} btn `}
      onClick={props.clickHandler || null}
    >
      <Dot svg={classes.svg} />
      <p>{props.children}</p>
    </button>
  );
};

export default Button;

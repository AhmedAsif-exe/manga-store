import classes from "./Recommendations.module.css";
import Button from "../utils/Button";
const Recommendations = ({ details }) => {
  if (details.title.length > 18) {
    details.title = details.title.slice(0, 17);
    details.title += "...";
  }

  return (
    <div className={classes.container}>
      <img
        src={details.src}
        alt={"background"}
        className={classes.background}
      />
      <div className={`${classes.dataHolder} container`}>
        <p className={classes.author}>{details.author}</p>
        <h2>{details.title}</h2>
        <p className={classes.synopsis}>{details.synopsis}</p>
        <p className={classes.price}>${details.price} only</p>
        <Button className={classes.button}>Learn More</Button>
      </div>
    </div>
  );
};

export default Recommendations;

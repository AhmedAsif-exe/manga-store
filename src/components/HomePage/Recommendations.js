import classes from "./Recommendations.module.css";
import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";
const Recommendations = ({ details }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <img
        loading="lazy"
        src={details.src}
        alt={"background"}
        className={classes.background}
      />
      <div className={`${classes.dataHolder} container`}>
        <p className={classes.author}>{details.author}</p>
        <h2>{details.title}</h2>
        <p className={classes.synopsis}>{details.synopsis}</p>
        <p className={classes.price}>${details.price} only</p>
        <Button
          className={classes.button}
          clickHandler={() => {
            navigate(`/manga/${details.mal_id}`);
          }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Recommendations;

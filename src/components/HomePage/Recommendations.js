import classes from "./Recommendations.module.css";
import Button from "../utils/Button";
import { Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import useLineClamp from "../../Hooks/use_lineClamp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Recommendations = ({ details }) => {
  const navigate = useNavigate();
  const { line, textRef: paragraphRef } = useLineClamp();
  return (
    <div className={classes.container}>
      <LazyLoadImage
        src={details.src}
        effect="blur"
        height="100vh"
        width="100vw"
        alt={"background"}
        className={classes.background}
      />
      <div className={`${classes.dataHolder} `}>
        <p className={classes.author}>{details.author}</p>
        <h2>{details.title}</h2>
        <Text
          className={classes.synopsis}
          ref={paragraphRef}
          lineClamp={line}
          color="white"
          fw={"bold"}
          my={"5px"}
        >
          {details.synopsis}
        </Text>
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

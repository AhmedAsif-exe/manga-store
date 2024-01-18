import { LazyLoadImage } from "react-lazy-load-image-component";
import classes from "./Quality.module.css";
import { Text } from "@mantine/core";
const Quality = ({ src, text }) => {
  return (
    <div className={classes.body}>
      <LazyLoadImage src={src} />
      <Text>{text}</Text>
    </div>
  );
};
export default Quality;

import classes from "./ceo.module.css";
import { Card, Text, Title } from "@mantine/core";
import src from "../../../images/Head.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FaCircleUser } from "react-icons/fa6";

const CEO = () => {
  return (
    <section className={classes.body}>
      {/* <Title order={2}>Meet the CEO</Title> */}
      <div className={classes["basic-info"]}>
        <div className={classes.image}>
          <LazyLoadImage src={src} effect="blur" />
        </div>
        <Card
          bg={"whitesmoke"}
          shadow="3px 4px 52px -30px rgba(0,0,0,1)"
          className={classes.quote}
        >
          <Title order={3}>
            <FaCircleUser />
            <br />
            Ahmed
          </Title>
          <Text size="1vw" fs={"italic"}>
            CEO
          </Text>
          <Text className={classes["actual-text"]}>
            Welcome to our online manga haven! I'm Ahmed Asif, the proud founder
            and CEO of our manga-loving community. With a profound passion for
            the artistry and storytelling found in the pages of manga, we've
            meticulously curated a collection that transcends genres, embraces
            diverse cultures, and evokes a range of emotions – all thoughtfully
            selected to be delivered straight to your doorstep.
          </Text>
          <Text className={classes["actual-text"]}>
            At our manga haven, we believe in more than just providing a
            platform for purchasing manga; we aim to immerse you in an
            experience that celebrates the richness of this incredible medium.
            As a fellow manga enthusiast, I understand the joy of holding a
            physical copy, flipping through its pages, and getting lost in the
            intricate details of the artwork.
          </Text>
        </Card>
      </div>
    </section>
  );
};
export default CEO;

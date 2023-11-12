import classes from "./AboutUs.module.css";
import Card from "../utils/Card";
import Dot from "../utils/icons/Dot";
import { useEffect, useState } from "react";
import AU from "../../images/AboutUS.jpg";
const AboutUs = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.scrollY > 200));
    }
    return () =>
      window.removeEventListener("scroll", () =>
        setSmall(window.scrollY > 200)
      );
  }, []);

  if (!small)
    window.removeEventListener("scroll", () => setSmall(window.scrollY > 200));
  return (
    <section className={classes.container}>
      {small && (
        <div
          className={`${classes.dataholder} ${
            small ? classes["slide-up"] : ""
          }`}
        >
          <div className={classes.image}>
            <img src={AU} alt="it tells about us" />
          </div>
          <div className={classes.cardholder}>
            <Card className={classes.details}>
              <h2>About Us</h2>
              <div className={classes.dots}>
                <Dot />
                <Dot />
                <Dot />
              </div>
              <p className={classes.moreInfo}>
                Welcome to our online manga haven! We are your dedicated source
                for indulging in the captivating world of manga in its physical
                form. With a deep-rooted passion for the artistry and
                storytelling of manga, we've curated a collection that spans
                genres, cultures, and emotions, all delivered right to your
                doorstep.
              </p>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;

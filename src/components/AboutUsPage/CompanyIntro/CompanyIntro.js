import classes from "./CompanyIntro.module.css";

import { Text } from "@mantine/core";
const CompanyIntro = () => {
  return (
    <section className={classes["company-intro"]}>
      <Text fs={"italic"}>
        Welcome to our online manga haven! We are your dedicated source for
        indulging in the captivating world of manga in its physical form. With a
        deep-rooted passion for the artistry and storytelling of manga, we've
        curated a collection that spans genres, cultures, and emotions, all
        delivered right to your doorstep.
      </Text>
    </section>
  );
};
export default CompanyIntro;

import classes from "./AboutUs.module.css";
import { Title } from "@mantine/core";

import { FaNewspaper } from "react-icons/fa6";
import CEO from "./CEO/ceo";
import CompanyIntro from "./CompanyIntro/CompanyIntro";

import Contact from "./Contact/Contact";
import Qualities from "./Qualities/Qualities";

const AboutUs = () => {
  return (
    <section className={classes.body}>
      <article>
        <Title order={1} m="md" ta={"center"}>
          <FaNewspaper />
          <span className={classes.span}>About Us</span>
        </Title>

        <CompanyIntro />
        <Qualities />
        <CEO />
        <Contact />
      </article>
    </section>
  );
};

export default AboutUs;

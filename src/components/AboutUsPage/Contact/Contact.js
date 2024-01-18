import classes from "./Contact.module.css";

import Discord from "../../utils/icons/discord.svg";
import Instagram from "../../utils/icons/instagram.svg";
import Facebook from "../../utils/icons/facebook.svg";

import { Title } from "@mantine/core";
const Contact = () => {
  return (
    <>
      <Title order={2} m={"md"} mt={"10vh"} ta={"center"}>
        Reach Out to Us On...
      </Title>
      <div className={classes.contact}>
        <a href="https://discord.com/">
          <img loading="lazy" src={Discord} />
        </a>
        <a href="https://www.instagram.com/">
          <img loading="lazy" src={Instagram} />
        </a>
        <a href="https://web.facebook.com/?ref=tn_tnmn">
          <img loading="lazy" src={Facebook} />
        </a>
      </div>
    </>
  );
};

export default Contact;

import Discord from "../utils/icons/Discord.svg";
import Instagram from "../utils/icons/Instagram.svg";
import Facebook from "../utils/icons/Facebook.svg";
import classes from "./Contact.module.css";
const Contact = (props) => {
  return (
    <div className={classes.container}>
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
  );
};
export default Contact;

import Discord from "../utils/icons/Discord";
import Instagram from "../utils/icons/Instagram";
import Facebook from "../utils/icons/Facebook";
import classes from "./Contact.module.css";
import useScroll from "../../Hooks/use_scroll";
const Contact = (props) => {
  const { scrolled } = useScroll(200);

  return (
    <div
      className={`${scrolled ? classes.scroll : classes.notScroll} ${
        classes.container
      }`}
    >
      <a href="https://discord.com/">
        <Discord
          className={`${classes.svg} ${
            scrolled ? classes.svgScroll : classes.svgNotScroll
          }`}
        />
      </a>
      <a href="https://www.instagram.com/">
        <Instagram
          className={`${classes.svg} ${
            scrolled ? classes.svgScroll : classes.svgNotScroll
          }`}
        />
      </a>
      <a href="https://web.facebook.com/?ref=tn_tnmn">
        <Facebook
          className={`${classes.svg} ${
            scrolled ? classes.svgScroll : classes.svgNotScroll
          }`}
        />
      </a>
    </div>
  );
};
export default Contact;

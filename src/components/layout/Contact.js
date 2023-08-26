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
      <Discord
        className={`${classes.svg} ${
          scrolled ? classes.svgScroll : classes.svgNotScroll
        }`}
      />
      <Instagram
        className={`${classes.svg} ${
          scrolled ? classes.svgScroll : classes.svgNotScroll
        }`}
      />
      <Facebook
        className={`${classes.svg} ${
          scrolled ? classes.svgScroll : classes.svgNotScroll
        }`}
      />
    </div>
  );
};
export default Contact;

import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["copyright-area"]}>
        <div className={classes["copyright-text"]}>
          <p>Copyright &copy; 2023, All Right Reserved</p>
        </div>
      </div>
      <div className={classes["footer-menu"]}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Policy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;

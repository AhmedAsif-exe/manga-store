import classes from "./Header.module.css";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import Title from "./Title";
import LoginAuth from "./LoginAuth";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import Drawer from "./Drawer/Drawer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import info from "../../utils/icons/info.svg";
const Header = (props) => {
  const [opened, { toggle }] = useDisclosure();

  const [show, { close, open }] = useDisclosure(false);
  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth > 900) {
        open();
      } else close();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
  }, []);
  const search = <SearchBar />;
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Title />
      </div>
      <div className={classes["options"]}>
        <Link to="/about-us">
          <img src={info} className={classes.info} />
        </Link>
        <CartIcon />
        <LoginAuth />
        {show && search}
      </div>
      <div className={classes["burger"]}>
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          color="white"
          size={"sm"}
        />
        {opened && (
          <Drawer>
            {!show && search}
            <LoginAuth />
            <CartIcon />
            <Link to="/about-us" className={classes.info}>
              <img src={info} alt="info" />
            </Link>
          </Drawer>
        )}
      </div>
    </header>
  );
};

export default Header;

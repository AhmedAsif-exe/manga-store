import classes from "./Header.module.css";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import useScroll from "../../../Hooks/use_scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Title from "./Title";
import LoginAuth from "./LoginAuth";

const Header = (props) => {
  const { scrolled } = useScroll(60);

  return (
    <header>
      <Navbar
        expand="lg"
        className={`navbar navbar-expand-lg navbar-dark sticky-top ${
          classes.header
        } ${scrolled ? classes.scrolled : classes.notScrolled}`}
      >
        <Container>
          <Navbar.Brand>
            <Title />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={classes.toggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={`${classes.options} ${
                scrolled
                  ? classes["hamburger-scroll"]
                  : classes["hamburger-not-scroll"]
              }`}
            >
              <CartIcon />
              <LoginAuth />
              <SearchBar />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

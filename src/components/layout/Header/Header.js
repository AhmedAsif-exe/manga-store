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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={classes.options}>
              <ul className={"navbar-nav"}>
                <li className={"nav-link"}>
                  <CartIcon />
                </li>
                <li className={"nav-link"}>
                  <LoginAuth />
                </li>
                <li className={"nav-link"}>
                  <SearchBar />
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

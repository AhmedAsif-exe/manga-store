import Header from "./Header/Header";
import Contact from "./Contact";
import BackToTop from "./BackToTop";
import useScroll from "../../Hooks/use_scroll";
import Footer from "./Footer/Footer";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";
import CartProvider from "../../store/CartProvider";

const Layout = (props) => {
  const { scrolled } = useScroll(200);
  const clickHandler = () => {
    window.scrollTo(0, 0);
  };
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);
  return (
    <>
      <CartProvider>
        <Header />
        <main>
          <Outlet />
          {props.children || null}
          <Contact />
          <BackToTop scrolled={scrolled} clickHandler={clickHandler} />
        </main>
      </CartProvider>
      <Footer />
    </>
  );
};

export default Layout;

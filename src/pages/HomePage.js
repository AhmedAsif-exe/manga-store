import AboutUs from "../components/HomePage/AboutUs";
import { Fragment } from "react";
import CarouselRec from "../components/HomePage/CarouselRec";
const HomePage = () => {
  return (
    <Fragment>
      <CarouselRec />
      <AboutUs />
    </Fragment>
  );
};
export default HomePage;

import { lazy } from "react";
// import { Link } from "react-router-dom";
const HeroParallax = lazy(() =>
  import("@components/HeroParallax/HeroParallax")
);
// const Footer = lazy(() => import("@components/Footer/Footer"));
// const Team = lazy(() => import("@components/Team/Team"));
// import BgHero from "@images/parallax.jpg";
// import About1 from "@images/about/1_1.jpg";
// import About2 from "@images/about/2_1.jpg";
// import About3 from "@images/about/3_1.jpg";
// import About4 from "@images/about/4_1.jpg";
import "./_about-us.scss";

const AboutUs = () => {
  return (
    <>
      <HeroParallax title="About Us" />
    </>
  );
};

export default AboutUs;

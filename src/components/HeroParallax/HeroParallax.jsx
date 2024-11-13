// 1. React Imports
import { lazy } from "react";
import { Link } from "react-router-dom";

// 2. Media Imports, styles
const Header = lazy(() => import("@components/Header/Header"));
import "./_hero-parallax.scss";

const HeroParallax = ({ title }) => {
  return (
    <>
      <Header />
      <div className="hero-parallax">
        <div className="container">
          <div className="hero-parallax__wrapper">
            <h1>{title}</h1>
            <div className="hero-parallax__tag">
              <Link to="/">
                Home
                <i className="fa fa-angle-right"></i>
              </Link>
              <span>{title}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroParallax;

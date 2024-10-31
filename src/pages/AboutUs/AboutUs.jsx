import { lazy } from "react";
// import { Link } from "react-router-dom";
const HeroParallax = lazy(() =>
  import("@components/HeroParallax/HeroParallax")
);
const Footer = lazy(() => import("@components/Footer/Footer"));
const Team = lazy(() => import("@components/Team/Team"));
import About1 from "@images/about/1_1.jpg";
import About2 from "@images/about/2_1.jpg";
import About3 from "@images/about/3_1.jpg";
import About4 from "@images/about/4_1.jpg";
import "./_about-us.scss";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <HeroParallax title="About Us" />

      {/* ABOUT US START */}
      <section className="about-us">
        <div className="container">
          <div className="about-us__gallery">
            <p>
              Proin pellentesque quam at quam aliquet, eget mattis quam euismod.
              Curabitur imperdiet suscipit facilisis. Maecenas diam quam,
              sodales eu est eu, posuere ultricies augue. Sed rhoncus facilisis
              risus, nec sagittis dui luctus in. Nunc eget ante odio.
              Suspendisse eu diam ut nisi ullamcorper interdum. Pellentesque sit
              amet quam risus.
            </p>
            <div className="about-us__images">
              <img
                src={About1}
                width="414"
                height="277"
                alt="About Us page gallery images"
              />
              <img
                src={About2}
                width="414"
                height="277"
                alt="About Us page gallery images"
              />
              <img
                src={About3}
                width="414"
                height="277"
                alt="About Us page gallery images"
              />
              <img
                src={About4}
                width="414"
                height="277"
                alt="About Us page gallery images"
              />
            </div>
            <p>
              Quisque quis faucibus tellus, non tincidunt urna. Pellentesque
              faucibus aliquet mi, id efficitur nisl aliquam at. Phasellus
              volutpat lobortis consectetur. Duis efficitur iaculis ipsum ut
              sodales. Phasellus suscipit lectus eget sapien accumsan, vitae
              auctor magna suscipit. Ut sagittis mauris auctor dictum feugiat.
              Duis lectus neque, aliquet quis justo euismod, rutrum vehicula
              felis. In luctus dui nec pretium gravida. In mauris lorem,
              accumsan sit amet lacinia non, auctor id dui.
            </p>
          </div>
        </div>
      </section>
      {/* ABOUT US END */}

      {/* INNER PARALLAX START */}
      <section className="inner-parallax">
        <div className="container">
          <div className="inner-parallax__wrapper">
            <p>
              We design and develop <u>mobile apps</u> that delight your users
              and grow your business.
            </p>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </section>
      {/* INNER PARALLAX END */}
      <Team />
      <Footer />
    </>
  );
};

export default AboutUs;

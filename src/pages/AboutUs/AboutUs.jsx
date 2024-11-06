import { lazy } from "react";
// import { Link } from "react-router-dom";
const HeroParallax = lazy(() =>
  import("@components/HeroParallax/HeroParallax")
);
import CallToAction from "@components/CalltoAction/CallToAction";
import Testimonials from "@components/Testimonials/Testimonials";
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
              We craft mobile applications that blend innovative design with
              user-centered functionality. From concept to launch, we align
              every detail with our clients’ visions and user needs. Our
              commitment to excellence ensures each app is built with precision,
              creating impactful, engaging experiences.
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
              We focus on innovation and quality in each project to deliver
              mobile apps that meet the highest standards and exceed user
              expectations. With our expertise in design, development, and
              strategy, we aim to turn your ideas into successful mobile
              experiences that resonate with users and drive business success.
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
      <CallToAction/>
      <Testimonials/>
      <Footer />
    </>
  );
};

export default AboutUs;

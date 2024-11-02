import { lazy } from "react";
import { Link } from "react-router-dom";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
const Team = lazy(() => import("@components/Team/Team"));
// import BgBottom from "@images/bg-bottom.svg";
import img1png from "@images/easy_exchange.svg";
import img2png from "@images/inomarket_logo.svg";
import img3png from "@images/karly_icon.svg";
import img4png from "@images/quranic_calm.svg";
import img5png from "@images/tashkent_metro.svg";
import img6png from "@images/6.png";
import img7png from "@images/7.png";
import img8png from "@images/8.png";
// import WelcomeBg from "@images/welcome.jpg";
import HomeMockup from "@images/home-mockup.png";
// import Blog1 from "@images/1_1.jpg";
// import Blog2 from "@images/2_1.jpg";
// import Blog3 from "@images/3_1.jpg";

import "./_home.scss";

const Home = () => {
  return (
    <>
      <Header />

      {/* HERO SECTION START */}
      <section className="hero">
        <div className="container">
          <div className="hero__overlay">
            <div className="hero__content">
              <h1>Where Your Mobile App Dreams Take Shape.</h1>
              <p>
                Our enterprise-level development meets award-winning design to
                bring your mobile vision to life, captivating users and fueling
                measurable business success.
              </p>
              <Link to="/products">ALL PRODUCTS</Link>
            </div>
            <div className="hero__icons">
              <a href="/products">
                <img src={img1png} alt="Easy Exchange product Zbekz icon" />
              </a>
              <a href="/products">
                <img src={img2png} alt="InoMarket product Zbekz icon" />
              </a>
              <a href="/products">
                <img src={img3png} alt="Karly product Zbekz icon" />
              </a>
              <a href="/products">
                <img src={img4png} alt="Quranic calm product Zbekz icon" />
              </a>
              <a href="/products">
                <img src={img5png} alt="Tashkent Metro product Zbekz icon" />
              </a>
              <a href="/products">
                <img src={img6png} alt="App Icon 6" />
              </a>
              <a href="/products">
                <img src={img7png} alt="App Icon 7" />
              </a>
              <a href="/products">
                <img src={img8png} alt="App Icon 8" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* SERVICES SECTION START */}
      <section className="services">
        <div className="container">
          <div className="services__details">
            <div className="services__titles">
              <h1>Comprehensive App Development Solutions</h1>
              <p>
                We take pride in guiding your app from concept to launch,
                ensuring seamless functionality and user satisfaction throughout
                the entire development process.
              </p>
              <p>
                Our team focuses on building high-quality applications that
                engage users effectively while also delivering reliable
                performance and meeting your business goals.
              </p>
              <Link to="/services">SERVICES</Link>
            </div>
            <div className="services__boxes">
              <div className="services__item">
                <i className="fa fa-clone"></i>
                <h2>Mobility Services Strategy</h2>
                <p>
                  Customized strategies designed to elevate your mobile app's
                  success and reach.
                </p>
              </div>

              <div className="services__item active">
                <i className="fab fa-connectdevelop"></i>
                <h2>Native App Development</h2>
                <p>
                  Expertly crafted native applications that maximize the
                  strengths of each platform.
                </p>
              </div>

              <div className="services__item">
                <i className="fa fa-object-ungroup"></i>
                <h2>Design & User Experience</h2>
                <p>
                  Focused on creating visually appealing and user-friendly
                  interfaces that captivate users.
                </p>
              </div>

              <div className="services__item">
                <i className="fa fa-line-chart"></i>
                <h2>Maintenance & Monitoring</h2>
                <p>
                  Dedicated support to keep your app secure, updated, and
                  performing at its best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION END */}

      {/* STEPS SECTION START */}
      <section className="steps">
        <div className="container">
          <div className="steps__wrapper">
            <div className="steps__box">
              <img
                src={HomeMockup}
                alt="Mockup of home screen for app design process"
              />
            </div>
            <ul className="steps__list">
              <li className="steps__item">
                <div className="steps__number">
                  <span>1</span>
                </div>
                <div className="steps__content">
                  <h3>
                    {" "}
                    Design and UX that ensures your app will be loved and used
                  </h3>
                  <p>
                    Our design approach focuses on user engagement, creating
                    interfaces that are both intuitive and visually appealing,
                    ensuring a memorable experience for your users.
                  </p>
                </div>
              </li>

              <li className="steps__item">
                <div className="steps__number">
                  <span>2</span>
                </div>
                <div className="steps__content">
                  <h3>
                    {" "}
                    Enterprise-grade development secures reliability and quality
                  </h3>
                  <p>
                    With industry-standard development practices, we build apps
                    that are stable, secure, and optimized to handle high
                    performance demands across various platforms.
                  </p>
                </div>
              </li>

              <li className="steps__item">
                <div className="steps__number">
                  <span>3</span>
                </div>
                <div className="steps__content">
                  <h3> A proven and tested process guarantees your success</h3>
                  <p>
                    We follow a systematic approach to app development, with
                    each stage meticulously tested to reduce risks and increase
                    efficiency, ensuring successful project delivery.
                  </p>
                </div>
              </li>

              <li className="steps__item">
                <div className="steps__number">
                  <span>4</span>
                </div>
                <div className="steps__content">
                  <h3> Start-to-end app development agency</h3>
                  <p>
                    From initial concept to final deployment, we provide
                    complete app development services, guiding you through each
                    phase to bring your vision to life.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* STEPS SECTION END */}

      {/* TEAM SECTION START */}
      <Team />
      {/* TEAM SECTION END */}

      {/* PARALLAX START */}
      <section className="parallax">
        <div className="container">
          <div className="parallax__count">
            <div className="parallax__countItem">
              <span>126</span>
              <p>Mobile App Complete</p>
            </div>
            <div className="parallax__countItem">
              <span>76</span>
              <p>Happy Customer</p>
            </div>
            <div className="parallax__countItem">
              <span>176</span>
              <p>App Version</p>
            </div>
            <div className="parallax__countItem">
              <span>16</span>
              <p>Award Win</p>
            </div>
          </div>
        </div>
      </section>
      {/* PARALLAX END */}

      <Footer />
    </>
  );
};

export default Home;

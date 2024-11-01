import { lazy } from "react";
import { Link } from "react-router-dom";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
const Team = lazy(() => import("@components/Team/Team"));
// import BgBottom from "@images/bg-bottom.svg";
import img1png from "@images/1.png";
import img2png from "@images/2.png";
import img3png from "@images/3.png";
import img4png from "@images/4.png";
import img5png from "@images/5.png";
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
              <img src={img1png} alt="App Icon 1" />
              <img src={img2png} alt="App Icon 2" />
              <img src={img3png} alt="App Icon 3" />
              <img src={img4png} alt="App Icon 4" />
              <img src={img5png} alt="App Icon 5" />
              <img src={img6png} alt="App Icon 6" />
              <img src={img7png} alt="App Icon 7" />
              <img src={img8png} alt="App Icon 8" />
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
              <h1>Start-to-end app development agency</h1>
              <p>
                Pellentesque posuere vestibulum lorem, ut efficitur erat
                tristique sed. Ut vitae tincidunt ante.
              </p>
              <p>
                Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                quis arcu elementum, quis congue risus volutpat. Praesent tortor
                nulla, ullamcorper.
              </p>
              <Link to="/services">SERVICES</Link>
            </div>
            <div className="services__boxes">
              <div className="services__item">
                <i className="fa fa-clone"></i>
                <h2>Mobility Services Strategy</h2>
                <p>
                  Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                  mattis.
                </p>
              </div>

              <div className="services__item active">
                <i className="fab fa-connectdevelop"></i>
                <h2>Native App Development</h2>
                <p>
                  Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                  mattis.
                </p>
              </div>

              <div className="services__item">
                <i className="fa fa-object-ungroup"></i>
                <h2>Design & User Experience</h2>
                <p>
                  Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                  mattis.
                </p>
              </div>

              <div className="services__item">
                <i className="fa fa-line-chart"></i>
                <h2>Maintenance & Monitoring</h2>
                <p>
                  Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                  mattis.
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
                    Quisque nec consectetur arcu. Duis tellus ante, sodales sed
                    molestie at, sagittis id neque. Quisque condimentum libero
                    arcu. Mauris tellus sem, ultrices varius nisl at.
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
                    Quisque nec consectetur arcu. Duis tellus ante, sodales sed
                    molestie at, sagittis id neque. Quisque condimentum libero
                    arcu. Mauris tellus sem, ultrices varius nisl at.
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
                    Quisque nec consectetur arcu. Duis tellus ante, sodales sed
                    molestie at, sagittis id neque. Quisque condimentum libero
                    arcu. Mauris tellus sem, ultrices varius nisl at.
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
                    Quisque nec consectetur arcu. Duis tellus ante, sodales sed
                    molestie at, sagittis id neque. Quisque condimentum libero
                    arcu. Mauris tellus sem, ultrices varius nisl at.
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

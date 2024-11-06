import { lazy } from "react";
const HeroParallax = lazy(() =>
  import("@components/HeroParallax/HeroParallax")
);
import CalltoAction from "@components/CalltoAction/CalltoAction";
const Footer = lazy(() => import("@components/Footer/Footer"));
import "./_services.scss";

const Services = () => {
  return (
    <>
      <HeroParallax title="Services" />

      <div className="servicesPage">
        <div className="container">
          <div className="servicesPage__boxes">
            <div className="servicesPage__item">
              <i className="fa fa-clone"></i>
              <h2>Mobility Services Strategy</h2>
              <p>
                Customized strategies designed to elevate your mobile app's
                success and reach.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fab fa-connectdevelop"></i>
              <h2>Native App Development</h2>
              <p>
                Expertly crafted native applications that maximize the strengths
                of each platform.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-object-ungroup"></i>
              <h2>Design & User Experience</h2>
              <p>
                Focused on creating visually appealing and user-friendly
                interfaces that captivate users.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-line-chart"></i>
              <h2>Maintenance & Monitoring</h2>
              <p>
                Dedicated support to keep your app secure, updated, and
                performing at its best.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-user"></i>
              <h2>User Definition and User Profiling</h2>
              <p>
                Identifying user needs is essential for design. We analyze
                trends.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-image"></i>
              <h2>Graphic Assets for App Stores</h2>
              <p>
                Creating engaging visuals for app stores boosts visibility. We
                design.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-code"></i>
              <h2>API Development Using Node.js</h2>
              <p>
                We build robust APIs with Node.js for seamless integration. Fast
                and secure.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-database"></i>
              <h2>Database Solutions - MongoDB</h2>
              <p>
                Leveraging MongoDB, we provide scalable data solutions. Flexible
                and reliable.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-cubes"></i>
              <h2>Back-End and API Development</h2>
              <p>
                Our back-end services ensure smooth functionality and
                performance. Efficiently built.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalltoAction />
      <Footer />
    </>
  );
};

export default Services;

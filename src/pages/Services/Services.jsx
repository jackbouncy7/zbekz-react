import { lazy } from "react";
const HeroParallax = lazy(() =>
  import("@components/HeroParallax/HeroParallax")
);
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
                Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                mattis.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fab fa-connectdevelop"></i>
              <h2>Native App Development</h2>
              <p>
                Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                mattis.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-object-ungroup"></i>
              <h2>Design & User Experience</h2>
              <p>
                Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                mattis.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-line-chart"></i>
              <h2>Maintenance & Monitoring</h2>
              <p>
                Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                mattis.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-user"></i>
              <h2>User Definition and User Profiling</h2>
              <p>
                Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                mattis.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-image"></i>
              <h2>Graphic Assets for App Stores</h2>
              <p>
                Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                mattis.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-code"></i>
              <h2>API Development Using Node.js</h2>
              <p>
                Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                mattis.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-database"></i>
              <h2>Database Solutions - MongoDB</h2>
              <p>
                Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                mattis.
              </p>
            </div>

            <div className="servicesPage__item">
              <i className="fa fa-cubes"></i>
              <h2>Back-End and API Development</h2>
              <p>
                Morbi pharetra sapien ut mattis viverra. Curabitur sit amet
                mattis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;

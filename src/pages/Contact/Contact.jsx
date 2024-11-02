import { lazy } from "react";
const HeroParallax = lazy(() =>
  import("@components/HeroParallax/HeroParallax")
);
const Footer = lazy(() => import("@components/Footer/Footer"));
import "./_contact.scss";

const Contact = () => {
  return (
    <>
      <HeroParallax title="Contact Us" />

      <section className="contact">
        <div className="contact__wrapper">
          <iframe
            className="contact__canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48326.492848050554!2d-74.01469926442953!3d40.75904043464411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d2e11ab3%3A0x80bfb3a12226d8b5!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1697632905989!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="contact__details">
            <div className="container">
              <div className="contact__inner">
                <div className="contact__info">
                  <i className="fa fa-location-arrow"></i>
                  <div className="contact__text">
                    <p>455 West Orchard Street</p>
                    <p>Kings Mountain, NC 28086</p>
                  </div>
                </div>
                <div className="contact__info">
                  <i className="fa fa-phone"></i>
                  <div className="contact__text">
                    <a href="tel:+998905098313">(272) 211-7370</a>
                    <a href="tel:+998905098313">(272) 211-7370</a>
                  </div>
                </div>
                <div className="contact__info">
                  <i className="fa fa-envelope"></i>
                  <div className="contact__text">
                    <a href="mailto:business@gmail.com">
                      support@yourbrand.com
                    </a>
                  </div>
                </div>
                <div className="contact__info">
                  <ul className="contact__social-links">
                    <li>
                      <a href="">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="form">
        <div className="container">
          <div className="form__wrapper">
            <div className="form__box">
              <h1>Get in touch</h1>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra
                dictum.
              </p>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra
                dictum.
              </p>
            </div>
            <form action="" method="POST">
              <div className="form-inner">
                <input type="text" placeholder="Name, surname" name="name" required />
                <input type="email" placeholder="E-Mail" name="email" required />
              </div>
              <textarea placeholder="Your message" name="textare"></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

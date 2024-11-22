// 1. React Imports
import { lazy } from "react";

// 2. Media Imports, styles
const HeroParallax = lazy(() =>
  import("@components/HeroParallax/HeroParallax")
);
import Testimonials from "@components/Testimonials/Testimonials";
import Footer from "@components/Footer/Footer";
import "./_contact.scss";

const Contact = () => {
  return (
    <>
      <HeroParallax title="Contact Us" />

      <section className="contact">
        <div className="contact__wrapper">
          <iframe
            className="contact__canvas"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11992.825637716109!2d69.2096763!3d41.282612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5b81ef1e9bb%3A0x164bb2ef267efb27!2sZBEKZ%20GROUP!5e0!3m2!1sru!2s!4v1730552885063!5m2!1sen!2s"
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
                    <p>Chilanzar District, Choponota Street, 6</p>
                    <p>Tashkent, Uzbekistan</p>
                  </div>
                </div>
                <div className="contact__info">
                  <i className="fa fa-phone"></i>
                  <div className="contact__text">
                    <a href="tel:+998974334331">+998 (97) 433-43-31</a>
                  </div>
                </div>
                <div className="contact__info">
                  <i className="fa fa-envelope"></i>
                  <div className="contact__text">
                    <a href="mailto:bekzod@zbekz.com">bekzod@zbekz.com</a>
                  </div>
                </div>
                <div className="contact__info">
                  <ul className="contact__social-links">
                    <li>
                      <a href="https://www.upwork.com/agencies/zbekz/">
                        <i className="fab fa-upwork"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/zbekz-group">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://m.facebook.com/zbekzgroup/">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/zbekzgroup/">
                        <i className="fab fa-instagram"></i>
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
                We’d love to hear from you! Whether you have a question or need
                assistance, reach out to us, and we’ll get back to you soon.
              </p>
            </div>
            <form action="" method="POST">
              <div className="form-inner">
                <input
                  type="text"
                  placeholder="Name, surname"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  name="email"
                  required
                />
              </div>
              <textarea placeholder="Your message" name="textare"></textarea>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Contact;

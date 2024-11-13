// 1. React Imports
import { Link } from "react-router-dom";

// 2. Media Imports, styles
import LogoDark from "@images/logo.svg";
import "./_footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__box first">
              <img className="footer__logo" src={LogoDark} alt="Footer Logo" />
              <p>
                We specialize in crafting mobile applications that enhance user
                engagement and drive business growth. Our team is committed to
                delivering solutions tailored to your needs.
              </p>
            </div>
            <div className="footer__box-wrapper">
              <div className="footer__box">
                <strong>Helpful Links</strong>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link className="footer__box-link" to="/products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link className="footer__box-link" to="/aboutus">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link className="footer__box-link" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link className="footer__box-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__box">
                <strong>Latest Apps</strong>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link className="footer__box-link" to="/products">
                      InoMarket
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link className="footer__box-link" to="/products">
                      Karly
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link className="footer__box-link" to="/products">
                      Tashkent Metro
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link className="footer__box-link" to="/products">
                      Quranic Calm
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <Link className="footer__box-link" to="/products">
                      EasyExchange
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__box address">
                <strong>Contact Us</strong>
                <p>Chilanzar District, Choponota Street, 6</p>
                <p>Tashkent, Uzbekistan</p>
                <p>
                  Phone: <a href="tel:+998974334331">+998 (97) 433-43-31</a>
                </p>
                <p>
                  E-Mail: <a href="mailto:bekzod@zbekz.com">bekzod@zbekz.com</a>{" "}
                </p>
                <ul className="footer__social-links">
                  <li>
                    <a
                      target="_blank"
                      href="https://www.upwork.com/agencies/zbekz/"
                    >
                      <i className="fab fa-upwork"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/zbekz-group"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://m.facebook.com/zbekzgroup/"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/zbekzgroup/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="footer__line" />
          <small className="footer__copyright">
            © 2024 ZBEKZ GROUP. All Rights Reserved.
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;

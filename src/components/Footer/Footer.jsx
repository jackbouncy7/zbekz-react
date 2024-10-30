import LogoDark from "@images/logo-dark.svg";
import "./_footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__box first">
              <img src={LogoDark} alt="Footer Logo" />
              <p>
                Morbi convallis bibendum urna ut viverra. Maecenas quis
                consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                ultricies laoreet ullamcorper phasellus semper.
              </p>
            </div>
            <div className="footer__box-wrapper">
              <div className="footer__box">
                <strong>Helpful Links</strong>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <a className="footer__box-link" href="#">
                      Products
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <a className="footer__box-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <a className="footer__box-link" href="#">
                      Services
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <a className="footer__box-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__box">
                <strong>Latest Apps</strong>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <a className="footer__box-link" href="#">
                      Dance School
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <a className="footer__box-link" href="#">
                      Coiner
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <a className="footer__box-link" href="#">
                      Cloud Manager
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <a className="footer__box-link" href="#">
                      Coding Life
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>
                    <a className="footer__box-link" href="#">
                      Smart Office
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__box address">
                <strong>Contact Us</strong>
                <p>455 West Orchard Street</p>
                <p>Kings Mountain, NC 28086</p>
                <p>Phone: (272) 211-7370</p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:support@yourbrand.com">
                    support@yourbrand.com
                  </a>{" "}
                </p>
                <ul className="footer__social-links">
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

          <hr className="footer__line" />
          <small className="footer__copyright">
            © 2024 Zbekz group. All Rights Reserved.
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;

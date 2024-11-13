// 1. React Imports
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// 2. Media Imports, styles
import Logo from "@images/logo-dark.svg";
import LogoDarkHeader from "@images/logo.svg";
import "./_header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const headerClasses = scrolled ? "header-area scrolled" : "header-area";
  const isProductsPage = location.pathname.startsWith("/products");
  const switchHeader = isProductsPage ? "header-area switched" : "";

  return (
    <header className={switchHeader || headerClasses}>
      <div className="container">
        <nav className="main-nav">
          <Link to="/" className="logo">
            <img
              src={switchHeader || scrolled ? LogoDarkHeader : Logo}
              className="light-logo"
              width={125}
              height="40px"
              alt="Beapp"
            />
            <img
              src={LogoDarkHeader}
              className="dark-logo"
              width={125}
              height="40px"
              alt="Beapp"
            />
          </Link>
          <ul className={`nav ${isOpen ? "open" : ""}`}>
            <li>
              <NavLink
                className="main-nav__links"
                style={{
                  color: switchHeader || scrolled ? "#3B566E" : "",
                }}
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className="main-nav__links"
                style={{
                  color: switchHeader || scrolled ? "#3B566E" : "",
                }}
                to="/products"
              >
                PRODUCTS
              </NavLink>
            </li>
            <li>
              <NavLink
                className="main-nav__links"
                style={{
                  color: switchHeader || scrolled ? "#3B566E" : "",
                }}
                to="/aboutus"
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                className="main-nav__links"
                style={{
                  color: switchHeader || scrolled ? "#3B566E" : "",
                }}
                to="/services"
              >
                SERVICES
              </NavLink>
            </li>
            {/* <li> */}
            {/*   <a style={{ color: scrolled ? '#3B566E' : 'white' }} href="blog.html">BLOG</a> */}
            {/* </li> */}
            <li>
              <Link
                style={{
                  border:
                    switchHeader || scrolled
                      ? "1px solid #4886FF"
                      : "1px solid white",
                  color: switchHeader || scrolled ? "#4886FF" : "",
                }}
                to="/contact"
                className="btn-nav-line"
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <a
            className={`menu-trigger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span>Menu</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

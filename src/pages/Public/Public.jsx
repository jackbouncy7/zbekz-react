// 1. React Imports
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// 2. Component, Page Imports
const Home = lazy(() => import("@pages/Home/Home"));
const NotFoundError = lazy(() => import("@pages/404/404"));
const AboutUs = lazy(() => import("@pages/AboutUs/AboutUs"));
const Services = lazy(() => import("@pages/Services/Services"));
const Contact = lazy(() => import("@pages/Contact/Contact"));
const Products = lazy(() => import("@pages/Products/Products"));
const ProductSingle = lazy(() => import("@pages/ProductSingle/ProductSingle"));
const ProductPrivacy = lazy(() =>
  import("@pages/ProductPrivacy/ProductPrivacy")
);
const ProductTerms = lazy(() => import("@pages/ProductTerms/ProductTerms"));

import Logo from "@images/logo-dark.svg";

export const Public = () => {
  return (
    <>
      {/* <Header /> */}
      <Suspense
        fallback={
          <div className="loader-wrapper">
            <img src={Logo} alt="" />
            <div className="center">
              <div className="dot dot-one"></div>
              <div className="dot dot-two"></div>
              <div className="dot dot-three"></div>
              <div className="dot dot-four"></div>
              <div className="dot dot-five"></div>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundError />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:router" element={<ProductSingle />} />
          <Route
            path="/products/:router/privacy-policy"
            element={<ProductPrivacy />}
          />
          <Route
            path="/products/:router/terms-of-service"
            element={<ProductTerms />}
          />
          <Route
            path="/products/:router/download"
            element={<ProductSingle />}
          />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

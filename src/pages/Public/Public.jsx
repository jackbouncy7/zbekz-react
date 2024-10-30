import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// const Header = lazy(() => import("@components/Header/Header"));
// const Footer = lazy(() => import("@components/Footer/Footer"));
const Home = lazy(() => import("@pages/Home/Home"));
// const NotFoundError = lazy(() => import("@pages/404/404"));
// const AboutUs = lazy(() => import("@pages/AboutUs/AboutUs"));
// const Services = lazy(() => import("@pages/Services/Services"));
// const Contact = lazy(() => import("@pages/Contact/Contact"));
const Products = lazy(() => import("@pages/Products/Products"));
const ProductSingle = lazy(() => import("@pages/ProductSingle/ProductSingle"));
const ProductPrivacy = lazy(() =>
  import("@pages/ProductPrivacy/ProductPrivacy")
);

export const Public = () => {
  return (
    <>
      {/* <Header /> */}
      <Suspense
        fallback={
          <div className="loader-wrapper">
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
          {/* <Route path="*" element={<NotFoundError />} /> */}
          {/* <Route path="/aboutus" element={<AboutUs />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductSingle />} />
          <Route
            path="/products/:id/privacy-policy"
            element={<ProductPrivacy />}
          />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};

import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import Header from "@components/Header/Header";
import CallToAction from "@components/CalltoAction/CallToAction";
const Testimonials = lazy(() =>
  import("@components/Testimonials/Testimonials")
);
import Footer from "@components/Footer/Footer";
import "./_products.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AppStoreLogo from "@images/download-apple-store.png";
import PlayStoreLogo from "@images/download-google-play.png";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getDocs(collection(db, "products"));
        const productList = response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <section className="section products">
        <div className="container">
          <h2 className="products__title">Our products</h2>

          <div className="product__grid">
            {loading
              ? Array(6)
                  .fill()
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      height={568}
                      width={"100%"}
                      borderRadius={32}
                      baseColor="#ddd"
                      highlightColor="#f3f3f3"
                    />
                  ))
              : products.map((product, index) => (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <div
                      className="products__box"
                      style={{
                        backgroundImage: `url(${product.imgList[0]?.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="products__content">
                        <h3 className="products__title--content">
                          {product?.name}
                        </h3>
                        <span className="products__devices">
                          {product.tags.map((tag, index) => (
                            <span key={index} className="products__device-tag">
                              {tag}
                            </span>
                          ))}
                        </span>
                        <div className="product__downloads">
                          {product?.appstore && (
                            <a href={product?.appstore}>
                              <img
                                src={AppStoreLogo}
                                width={120}
                                height={40}
                                alt="product download link"
                                onClick={(event) => event.stopPropagation()}
                              />
                            </a>
                          )}
                          {product?.playmarket && (
                            <a href={product?.playmarket}>
                              <img
                                src={PlayStoreLogo}
                                width={120}
                                height={40}
                                alt="product download link"
                                onClick={(event) => event.stopPropagation()}
                              />
                            </a>
                          )}
                        </div>
                        <div className="products__button-link">
                          <Link
                            className="products__link"
                            to={`/products/${product.id}`}
                          >
                            Explore more <i className="fa fa-arrow-right"></i>{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>
      </section>
      <CallToAction />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Products;

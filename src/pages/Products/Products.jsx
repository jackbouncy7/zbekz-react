import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
const Header = lazy(() => import("@components/Header/Header"));
const Footer = lazy(() => import("@components/Footer/Footer"));
import "./_products.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
          <h2 className="products__title">Featured case studies</h2>

          {loading ? (
            <Skeleton
              height={568}
              width={"100%"}
              borderRadius={32}
              baseColor="#ddd"
              highlightColor="#f3f3f3"
            />
          ) : (
            products.map((product, index) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <div className="products__box">
                  <div className="products__content">
                    <h3 className="products__title--content">
                      {product?.name}
                    </h3>
                    <span className="products__devices">
                      {product.tags.join(", ")}
                    </span>
                    {/* <span className='products__category'>Finance</span> */}
                    {/* <span className='products__country'>US</span> */}
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
            ))
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;


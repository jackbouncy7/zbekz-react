// 1. React Imports
import { lazy, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// 2. Media Imports, styles
import { db } from "../../firebase.js";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import { useLocation } from "react-router-dom";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import AppStoreLogo from "@images/download-apple-store.png";
import PlayStoreLogo from "@images/download-google-play.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./_productSingle.scss";

const ProductSingle = () => {
  const { router } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const fetchProduct = async () => {
    const q = query(collection(db, "products"), where("router", "==", router));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProduct(doc.data());
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [router]);

  // console.log('OBJECT', product)

  useEffect(() => {
    if (product?.playmarket || product?.appstore) {
      const redirectUser = () => {
        const userAgent =
          navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
          window.location.href = product.playmarket;
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          window.location.href = product.appstore;
        }
      };

      if (location.pathname === `/products/${product.router}/download`) {
        redirectUser();
      }
    }
  }, [product, loading, location]);

  return (
    <>
      <Header />
      <section className="section product-single">
        <div className="container">
          <nav className="product-single__breadcrumb" aria-label="breadcrumb">
            <ol className="product-single__breadcrumb-list">
              <li className="product-single__breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="product-single__breadcrumb-item">
                <Link to="/products">Products</Link>
              </li>
              <li
                className="product-single__breadcrumb-item active"
                aria-current="page"
              >
                {product?.name}
              </li>
            </ol>
          </nav>

          {/* Details start */}
          <div className="product-details">
            <div className="product-details__titleWrapper">
              {loading ? (
                <Skeleton
                  height={40}
                  width={"60%"}
                  borderRadius={8}
                  baseColor="#ddd"
                  highlightColor="#f3f3f3"
                  style={{ margin: "20px 0" }}
                />
              ) : (
                <h2 className="product-details__title">{product?.name}</h2>
              )}
            </div>
          </div>
          {/* Details end */}

          <div className="product-details__imageWrapper">
            <img src={product?.imgList[1]?.img} alt="" />
          </div>
        </div>

        {/* Product items start */}
        <div className="product-item">
          <div className="container">
            <div className="product-item__wrapper">
              <div className="product-item__side">
                {/* <div className='product-item__info-block'> */}
                {/* 	<p className='product-item__headText'>Industry</p> */}
                {/* 	<span className='product-item__val'>Fintech</span> */}
                {/* </div> */}

                <div className="product-item__info-block">
                  <p className="product-item__headText">Supported devices</p>
                  <span className="product-item__val">
                    {product?.tags.join(", ")}
                  </span>
                </div>

                <div className="product-item__info-block">
                  {(product?.appstore || product?.playmarket) && (
                    <p className="product-item__headText">Available on</p>
                  )}
                  <span className="product-item__val">
                    {product?.appstore && (
                      <a href={product?.appstore} target="_blank">
                        <img
                          src={AppStoreLogo}
                          width="150"
                          alt="app store logo"
                        />
                      </a>
                    )}
                    {product?.playmarket && (
                      <a href={product?.playmarket} target="_blank">
                        <img
                          src={PlayStoreLogo}
                          width="150"
                          height="50"
                          alt="play store logo"
                        />
                      </a>
                    )}
                  </span>
                  <p>© ZBEKZ GROUP</p>
                  {(product?.privacypolicy || product?.terms) && (
                    <span>
                      {product.privacypolicy && (
                        <Link
                          to={`/products/${product?.router}/privacy-policy`}
                        >
                          Privacy Policy
                        </Link>
                      )}
                      {product.privacypolicy && product.terms && " | "}
                      {product?.terms && (
                        <Link
                          to={`/products/${product?.router}/terms-of-service`}
                        >
                          Terms of Service
                        </Link>
                      )}
                    </span>
                  )}
                </div>
              </div>
              <div className="product-item__side">
                <h3 className="product-item__clientTitle">About the product</h3>
                <div className="product-item__clientDescrWrapper">
                  <span className="product-item__clientSubtext">
                    {product?.name} is an innovative solution designed to meet
                    modern demands and deliver exceptional results.
                  </span>
                  <p
                    className="product-item__clientDescr"
                    dangerouslySetInnerHTML={{ __html: product?.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product items end */}
      </section>

      <section className="product-spotlight">
        <div className="container">
          <div className="product-spotlight__inner">
            <div className="product-spotlight__wrapper">
              <h3>Product spotlight</h3>
              <p>Take a look at some of the apps we’ve built.</p>
              <Link to="/products">View all products</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductSingle;

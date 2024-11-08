import { lazy, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase.js";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import BgProduct from "@images/products/project1-detailed.png";
import AppStoreLogo from "@images/download-apple-store.png";
import PlayStoreLogo from "@images/download-google-play.png";
import "./_productSingle.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSingle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    const q = query(collection(db, "products"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProduct(doc.data());
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // console.log('OBJECT', product)

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
                  {product?.terms && (
                    <span>
                      © ZBEKZ GROUP |{" "}
                      <Link to={`/products/${product?.id}/privacy-policy`}>
                        Privacy Policy
                      </Link>{" "}
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

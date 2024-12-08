// 1. React Imports
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// 2. Media Imports, styles
import { db } from "../../firebase.js";
import { doc, getDocs, collection, query, where } from "firebase/firestore";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import "react-loading-skeleton/dist/skeleton.css";
import "./_product-privacy.scss";

const ProductPrivacy = () => {
  const { router } = useParams();
  const [privacyContent, setPrivacyContent] = useState("");

  const fetchPrivacy = async () => {
    const q = query(collection(db, "products"), where("router", "==", router));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setPrivacyContent(doc.data());
    });
  };

  useEffect(() => {
    fetchPrivacy();
  }, [router]);

  // console.log('OBJECT', privacyContent)
  // console.log('OBJECT', productName)

  return (
    <>
      <Header />
      <section className="section privacy-single">
        <div className="container">
          <nav className="privacy-single__breadcrumb" aria-label="breadcrumb">
            <ol className="privacy-single__breadcrumb-list">
              <li className="privacy-single__breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="privacy-single__breadcrumb-item">
                <Link to="/products">Products</Link>
              </li>
              <li className="privacy-single__breadcrumb-item">
                <Link to={`/products/${privacyContent?.router}`}>
                  {privacyContent?.name}
                </Link>
              </li>
              <li
                className="privacy-single__breadcrumb-item active"
                aria-current="page"
              >
                Privacy Policy
              </li>
            </ol>
          </nav>

          {/* Details start */}
          <div className="privacy-details">
            <div className="privacy-details__titleWrapper">
              <h2 className="privacy-details__title">Privacy Policy</h2>
            </div>
          </div>
          {/* Details end */}

          <div className="privacy-output">
            <p
              className="privacy-output__res"
              dangerouslySetInnerHTML={{ __html: privacyContent?.privacypolicy }}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductPrivacy;

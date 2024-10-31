import { lazy, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase.js";
import { doc, getDocs, collection, query, where } from "firebase/firestore";
const Header = lazy(() => import("@components/Header/Header"));
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./_product-privacy.scss";

const ProductPrivacy = () => {
  const { id } = useParams();
  const [privacyContent, setPrivacyContent] = useState("");

  const fetchPrivacy = async () => {
    const q = query(collection(db, "products"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setPrivacyContent(doc.data());
    });
  };

  useEffect(() => {
    fetchPrivacy();
  }, [id]);

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
                <Link to={`/products/${privacyContent?.id}`}>
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
              dangerouslySetInnerHTML={{ __html: privacyContent?.terms }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPrivacy;

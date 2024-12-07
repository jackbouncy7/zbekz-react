// 1. React Imports
import { Link } from "react-router-dom";

//  2. Style Imports
import "./_call-to-action.scss";

const CallToAction = () => {
  return (
    <>
      <div className="call-action">
        <div className="container">
          <div className="call-action__wrapper">
            <div className="call-action__background"></div>
            <div className="call-action__items">
              <div className="call-action__itemsTextWrapper">
                <span>We'd love to help bring your next idea to life.</span>
              </div>
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;

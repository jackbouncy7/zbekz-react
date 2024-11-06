import CallActionPic from "@images/home-call-to-action.png";
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
              <a href="/contact">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;

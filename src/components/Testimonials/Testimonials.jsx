import Logo from "@images/testimonials-owner-logo.svg";
import TestimonialsOwn from "@images/testimonials-owner.webp";
import "./_testimonials.scss";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="container">
          <h1 className="testimonials__title">Our clients say it better</h1>
          <div className="testimonials__wrapper">
            <img
              className="testimonials__logo"
              src={Logo}
              width={170}
              height={80}
              alt="client brand"
            />
            <p className="testimonials__text">
              The ZBEKZ GROUP team was always accommodating to our needs and
              very flexible which is crucial for any startup or a new product
              being created. We felt like the developers were a part of our team
              while we worked together which was incredibly important to us.
            </p>
            <div className="testimonials__owner">
              <img
                src={TestimonialsOwn}
                width={72}
                height={72}
                alt="testimonials writer"
              />
              <div className="testimonials__ownerItems">
                <p>Spencer Dennis</p>
                <span>Co-founder & CEO, Liquid Barcodes, US</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

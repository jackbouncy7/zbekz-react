// 1. React Imports
import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 2. Media Imports, styles
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

import Logo from "@images/testimonials-owner-logo.svg";
import TestimonialsOwn from "@images/testimonials-owner.webp";
import "./_testimonials.scss";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const response = await getDocs(collection(db, "testimonials"));
        const testimonialList = response.docs.map((doc) => ({
          ...doc.data(),
        }));
        setTestimonials(testimonialList);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTestimonial();
  }, []);

  console.log(testimonials);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="testimonials">
        <div className="container">
          <h1 className="testimonials__title">Our clients say it better</h1>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonials__wrapper">
                <img
                  className="testimonials__logo"
                  src={testimonial.imgList[0]?.img}
                  width={170}
                  height={80}
                  alt="client brand"
                />
                <p
                  className="testimonials__text"
                  dangerouslySetInnerHTML={{ __html: testimonial?.description }}
                ></p>
                <div className="testimonials__owner">
                  <img
                    src={testimonial.imgList[1]?.img}
                    width={72}
                    height={72}
                    alt="testimonials writer"
                  />
                  <div className="testimonials__ownerItems">
                    <p>{testimonial?.name}</p>
                    <span>{testimonial.jobtitle}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

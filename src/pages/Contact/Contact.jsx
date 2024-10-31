import { lazy } from "react";
const HeroParallax = lazy(() =>
  import("@components/HeroParallax/HeroParallax")
);

const Contact = () => {
  return (
    <>
      <HeroParallax title="Contact Us" />
    </>
  );
};

export default Contact;

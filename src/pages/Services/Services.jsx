import { lazy } from "react";
const HeroParallax = lazy(() =>
  import("@components/HeroParallax/HeroParallax")
);

const Services = () => {
  return (
    <>
      <HeroParallax title="Services" />
    </>
  );
};

export default Services;

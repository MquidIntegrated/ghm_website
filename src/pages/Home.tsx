import React from "react";
import Clients from "../components/Clients";
import ValueOffer from "../components/ValueOffer";
import OurPlans from "../components/OurPlans";
import TestimonialSlider from "../components/TestimonialSlider";
import FAQs from "../components/FAQs";
import CTA from "../components/CTA";
import HomeHeroSection from "../components/HomeHeroSection";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <Clients />
      <ValueOffer />
      <OurPlans />
      <TestimonialSlider />
      <CTA />
      <FAQs />
    </div>
  );
};

export default Home;

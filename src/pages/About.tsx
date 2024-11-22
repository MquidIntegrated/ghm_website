import React from "react";
import DynamicBreadcrumbSection from "../components/DynamicBreadcrumbSection";
import bg from "../assets/png/aboutBreadcrumbBg.png";
import WhoWeAre from "../components/WhoWeAre";
import MissionVisionValue from "../components/MissionVisionValue";
import OurTeam from "../components/OurTeam";
import Clients from "../components/Clients";
import CTA from "../components/CTA";

const About = () => {
  return (
    <div>
      <DynamicBreadcrumbSection
        backgroundImage={bg}
        title="About Us"
        breadcrumbText="We secure your tomorrow today, 
one client at a time"
      />
      <WhoWeAre />
      <MissionVisionValue />
      <OurTeam />
      <Clients />
      <CTA />
    </div>
  );
};

export default About;

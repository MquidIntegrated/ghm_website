import DynamicBreadcrumbSection from "../components/DynamicBreadcrumbSection";
import bg from "../assets/png/aboutBreadcrumbBg.png";
import WhoWeAre from "../components/WhoWeAre";
import MissionVisionValue from "../components/MissionVisionValue";
// import OurTeam from "../components/OurTeam";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import AllPlansCTA from "../components/AllPlansCTA";

const About = () => {
  return (
    <div>
      {/* <DynamicBreadcrumbSection
        backgroundImage={bg}
        title="About Us"
        breadcrumbText="We secure your tomorrow today, 
one client at a time"
      /> */}

      <WhoWeAre />
      {/* <AllPlansCTA /> */}
      <MissionVisionValue />
      {/* <OurTeam /> */}
      <Clients />
      <AllPlansCTA />
    </div>
  );
};

export default About;

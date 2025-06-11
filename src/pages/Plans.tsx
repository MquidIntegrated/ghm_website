import DynamicBreadcrumbSection from "../components/DynamicBreadcrumbSection";
import bg from "../assets/png/plansBreadcrumbBg.png";
import OurPlans from "../components/OurPlans";
import Clients from "../components/Clients";
import CTA from "../components/CTA";

const Plans = () => {
  return (
    <div>
      {/* <DynamicBreadcrumbSection
        backgroundImage={bg}
        title="Health Plans"
        breadcrumbText="Get full health coverage"
      /> */}{" "}
      <OurPlans />
      <CTA />
      <Clients />
    </div>
  );
};

export default Plans;

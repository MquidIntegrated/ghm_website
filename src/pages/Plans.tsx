import DynamicBreadcrumbSection from "../components/DynamicBreadcrumbSection";
import bg from "../assets/png/plansBreadcrumbBg.png";
import OurPlans from "../components/OurPlans";
import Clients from "../components/Clients";
import CTA from "../components/CTA";

const Plans = () => {
  return (
    <div>
      <DynamicBreadcrumbSection
        backgroundImage={bg}
        title="Health Plans"
        breadcrumbText="Plans to insure health at all levels"
      />
      <OurPlans />
      <Clients />
      <CTA />
    </div>
  );
};

export default Plans;

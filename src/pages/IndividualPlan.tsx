import React from "react";
import DynamicBreadcrumbSection from "../components/DynamicBreadcrumbSection";
import bg from "../assets/png/individualPlansBreadcrumbBg.png";
import CTA from "../components/CTA";
import RetailPlans from "../components/RetailPlans";

const IndividualPlan = () => {
  return (
    <div>
      <DynamicBreadcrumbSection
        backgroundImage={bg}
        title="Retail Plans"
        breadcrumbText="Plans to insure health at all levels"
      />
      <RetailPlans />
      <CTA />
    </div>
  );
};

export default IndividualPlan;

import IndividualPlansTable from "../components/IndividualPlansTable";
import CTA from "../components/CTA";

const FullPlanDetails = () => {
  return (
    <>
      <div className="ghm-container py-10 md:py-20">
        <div className="max-w-sm text-center mx-auto">
          {/* title */}
          <p className="mb-5 text-ghmPurple-300">
            For Individuals and families
          </p>
          {/* breadcrumb text */}
          <h2 className="text-4xl font-bold text-center mb-8 text-ghmBlack">
            Select the best plan for you
          </h2>
        </div>
        <IndividualPlansTable />
      </div>

      <CTA />
    </>
  );
};

export default FullPlanDetails;

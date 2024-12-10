import ConfirmPlanDetailsForm from "../components/ConfirmPlanDetailsForm";

const ConfirmPlanDetails = () => {
  return (
    <div className="ghm-container py-10 md:py-20">
      {" "}
      <div className="text-center max-w-xl mx-auto">
        <p className="text-ghmPurple-300 mb-4">Finishing Up</p>
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4">
          Enter your billing info to complete your purchase
        </h2>
      </div>
      <ConfirmPlanDetailsForm />
    </div>
  );
};

export default ConfirmPlanDetails;

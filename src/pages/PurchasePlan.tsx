import PurchasePlanForm from "../components/PurchasePlanForm";

const PurchasePlan = () => {
  return (
    <div className="ghm-container py-10 md:py-20">
      {" "}
      <div className="text-center">
        <p className="text-ghmPurple-300 mb-4">Buy a Health Insurance Plan</p>
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4">
          Who are you buying for?
        </h2>
        <p className="text-ghmGrey-500 mb-5 md:mb-10">
          Get a discount by buying more
        </p>
      </div>
      <PurchasePlanForm />
    </div>
  );
};

export default PurchasePlan;

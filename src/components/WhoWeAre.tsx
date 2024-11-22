import cross from "../assets/svg/ghm-right-cross.svg";

const WhoWeAre = () => {
  return (
    <div className="relative">
      {/* cross design */}
      <div className="absolute right-0 bottom-0 hidden md:block">
        <img src={cross} alt="background cross" />
      </div>

      <div className="ghm-container py-10 md:py-20">
        <h4 className="text-ghmPurple-300 mb-4 text-sm md:text-base">
          Who We Are
        </h4>
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl max-w-lg mb-10">
          We are a dynamic and innovative health insurance provider
        </h2>
        <p className="text-ghmGrey-500 mb-5 md:mb-10 max-w-3xl">
          <span className="font-semibold">
            Grooming Health Management Limited (GHML)
          </span>{" "}
          was established in the year 2021 and is proudly registered with the
          Corporate Affairs Commission (CAC) under{" "}
          <span className="font-semibold">certificate number 1771536.</span> Our
          organization operates as a nationally recognized{" "}
          <span className="font-semibold">
            Health Maintenance Organization (HMO)
          </span>{" "}
          , serving as a pivotal entity in the Health Insurance landscape.
        </p>
        <p className="text-ghmPurple-300 ">
          That&apos;s why we go beyond traditional Health Insurance models to
          deliver robust benefits.{" "}
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;

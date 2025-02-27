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
          We are a dynamic and innovative health insurance company
        </h2>
        <p className="text-ghmGrey-500 mb-5 md:mb-10 max-w-3xl">
          Established in 2021,{" "}
          <span className="font-semibold">
            Grooming Health Management Limited (GHML)
          </span>{" "}
          is a nationally recognized Health Maintenance Organization (HMO)
          registered with the Corporate Affairs Commission (CAC) under{" "}
          <span className="font-semibold">certificate number 1771536.</span> As
          a key player in the health insurance sector, GHML is committed to
          providing comprehensive and reliable healthcare solutions, ensuring
          quality and accessible medical services for individuals and
          organizations nationwide.
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

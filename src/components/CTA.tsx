import React from "react";
import bg from "../assets/png/cta-bg.png";

const CTA = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className="bg-cover bg-center">
      <div className="ghm-container text-white py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Get full health coverage starting from just ₦9,000/m*
          </h2>
          <p className="mb-6">
            Starting at ₦9,000 a month, our health insurance plans offer clear
            pricing and access to quality care for you, your family, or your
            team.
          </p>
          <button className="bg-white mb-6 lg:mb-8 text-ghmGrey-800 rounded-full px-4 py-2 md:px-6 md:py-3">
            Explore Plans &rarr;
          </button>
          <span className="block text-[#85BDAA]">*for individuals</span>
        </div>
      </div>
    </div>
  );
};

export default CTA;

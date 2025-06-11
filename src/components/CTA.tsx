import {Link} from "react-router-dom";
import bg from "../assets/png/cta-bg.png";

const CTA = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className="bg-cover bg-center">
      <div className="ghm-container text-white py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Get full health coverage as an Individual, starting from just
            ₦6,300/m*
          </h2>
          {/* <p className="mb-6">
            Starting at ₦6,300 a month, our health insurance plans offer clear
            pricing and access to quality care for you, your family, or your
            team.
          </p> */}
          <Link
            to="/plans/retail"
            className="bg-white mb-4 text-ghmGrey-800 inline-block rounded-full px-4 py-2 md:px-6 md:py-3"
          >
            Purchase Plans &rarr;
          </Link>
          {/* <span className="block text-[#85BDAA]">*for individuals</span> */}
        </div>
      </div>
    </div>
  );
};

export default CTA;

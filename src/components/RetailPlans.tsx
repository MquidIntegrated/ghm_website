import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import RetailPlansCarousel from "./RetailPlansCarousel";
import {Link} from "react-router-dom";

const RetailPlans = () => {
  return (
    <div className="relative w-full px-4 py-20 ">
      <div className="max-w-sm text-center mx-auto">
        {/* title */}
        <p className="mb-5 text-ghmPurple-300">Our Retail Plans</p>
        {/* breadcrumb text */}
        <h2 className="text-4xl font-bold text-center mb-8 text-ghmBlack">
          Select the best plan for you
        </h2>
      </div>

      <RetailPlansCarousel />
      <div className="flex flex-col items-center space-y-4 mt-16">
        <Link
          to="/plans/retail/full-plan-details"
          className="text-ghmPurple-500 underline hover:no-underline cursor-pointer"
        >
          View Full Details
        </Link>
        <button className="ghm-bg-button-gradient group flex items-center space-x-2">
          <span> Start Enjoying Our Health Plans</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default RetailPlans;

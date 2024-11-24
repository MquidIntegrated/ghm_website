import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/retailPlansCarousel.css";
import goldIcon from "../assets/svg/gold.svg";
import pearlIcon from "../assets/svg/pearl.svg";
import rubyIconPoular from "../assets/svg/ruby-popular.svg";
import rubyIcon from "../assets/svg/ruby.svg";
import checkWhite from "../assets/svg/check-circle-white.svg";
import checkPurple from "../assets/svg/check-circle-purple.svg";

type Plan = {
  icon: string;
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
};

const plans: Plan[] = [
  {
    icon: goldIcon,
    title: "Gold",
    price: "₦75,600",
    features: [
      "Roam across 700+ Hospitals",
      "In-patient care with feeding-General ward",
      "Surgical benefit up to the limit of ₦200,000",
      "Dental care Benefit up to the limit of ₦20,000",
      "Optical care Benefit (includes biennial lens and frame up to the limit of ₦12,500)",
      "Maternal care benefit up to ₦200,000",
      "5 Physiotherapy Sessions",
      "Accident & Emergency benefit",
      "Consultation with core and Non core Specialist",
    ],
  },
  {
    icon: pearlIcon,
    title: "Pearl",
    price: "₦125,600",
    features: [
      "Roam across 800+ Hospitals",
      "In-patient care with feeding- Semi-private ward",
      "Surgical benefit up to the limit of ₦300,000",
      "Dental care Benefit up to the limit of ₦30,000",
      "Optical care Benefit (includes biennial lens and frame up to the limit of ₦15,000)",
      "Maternal care benefit up to ₦300,000",
      "7 Physiotherapy Sessions",
      "Accident & Emergency benefit",
      "Consultation with core and Non core Specialist",
    ],
  },
  {
    icon: rubyIconPoular,
    title: "Ruby",
    price: "₦205,600",
    features: [
      "Roam across 1000+ Hospitals",
      "In-patient care with feeding- Private ward",
      "Surgical benefit up to the limit of ₦450,000",
      "Dental care Benefit up to the limit of ₦40,000",
      "Optical care Benefit (includes biennial lens and frame up to the limit of ₦25,000)",
      "Maternal care benefit up to ₦500,000",
      "10 Physiotherapy Sessions",
      "Accident & Emergency benefit",
      "Consultation with core and Non core Specialist",
    ],
    isPopular: true,
  },
  {
    icon: rubyIcon,
    title: "Ruby Plus",
    price: "₦457,600",
    features: [
      "Roam across 1000+ Hospitals",
      "In-patient care with feeding- Private ward",
      "Surgical benefit up to the limit of ₦1,000,000",
      "Dental care Benefit up to the limit of ₦70,000",
      "Optical care Benefit (includes biennial lens and frame up to the limit of ₦40,000)",
      "Maternal care benefit up to ₦750,000",
      "15 Physiotherapy Sessions",
      "Accident & Emergency benefit",
      "Consultation with core and Non core Specialist",
    ],
  },
];

const RetailPlansCarousel: React.FC = () => {
  return (
    <div className="px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{clickable: true}}
        breakpoints={{
          // "@0.00": {
          //   slidesPerView: 1,
          //   spaceBetween: 10,
          // },
          // "@0.75": {
          //   slidesPerView: 2,
          //   spaceBetween: 20,
          // },
          // "@1.00": {
          //   slidesPerView: 3,
          //   spaceBetween: 40,
          // },
          // "@1.50": {
          //   slidesPerView: 4,
          //   spaceBetween: 50,
          // },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <div
              className={`border rounded-3xl p-6 shadow-lg text-left ${
                plan.isPopular
                  ? "ghm-bg-card-gradient"
                  : "bg-gradient-to-br from-[#fffdff] via-[#ffe3e2] to-[#fffdff]"
              }`}
            >
              <span className="flex items-center mb-8">
                <div>
                  {" "}
                  <img src={plan.icon} alt="Icon" />
                </div>

                {plan.isPopular && (
                  <div className="text-sm text-center text-ghmPink-600 bg-white rounded-full px-1 py-2 inline-block ">
                    Most Popular
                  </div>
                )}
              </span>

              <h3
                className={`text-2xl font-medium  ${
                  !plan.isPopular ? "text-ghmPurple-300" : "text-white"
                }`}
              >
                {plan.title.toUpperCase()}
              </h3>
              <p
                className={`text-[40px] font-semibold  ${
                  !plan.isPopular ? "text-[#331629]" : "text-white"
                }`}
              >
                {plan.price}{" "}
                <span
                  className={`text-sm ${
                    plan.isPopular ? " text-inherit" : "text-ghmPurple-400"
                  } `}
                >
                  /year
                </span>
              </p>
              <button
                className={`mt-6 w-full bg-white py-2 ${
                  plan.isPopular
                    ? "text-ghmPink-600"
                    : "text-ghmPurple-500 border-ghmPurple-500"
                }  rounded-full border `}
              >
                Select Plan
              </button>
              <ul
                className={`mt-8 space-y-2 text-base border-t py-8 ${
                  plan.isPopular ? "border-white" : "border-ghmPurple-200"
                }`}
              >
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex  space-x-2 ${
                      plan.isPopular ? "text-white" : "text-ghmPurple-500"
                    } `}
                  >
                    <span>
                      <img
                        src={plan.isPopular ? checkWhite : checkPurple}
                        alt=""
                      />
                    </span>
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RetailPlansCarousel;

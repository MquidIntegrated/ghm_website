import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import {Autoplay} from "swiper/modules";
import gmfb from "../assets/svg/grooming-microfinance.svg";
import staySafeFacilities from "../assets/svg/staysafe-facilities.svg";
import ecosense from "../assets/svg/eco-sense.svg";
import staySafeSystems from "../assets/svg/stay-safe-systems.svg";
import mquid from "../assets/svg/mquid.svg";
import betaPrint from "../assets/svg/beta-print.svg";
import sunlayInsurance from "../assets/svg/sunlay-brokers.svg";
import creditStar from "../assets/svg/creditstar.svg";

import "../styles/carousel.css";

const logos = [
  {
    src: gmfb,
    alt: "Grooming Microfinance Bank",
  },
  {src: staySafeFacilities, alt: "Staysafe Facilities"},
  {src: ecosense, alt: "Eco-Sense Construction"},
  {src: staySafeSystems, alt: "Staysafe Studios"},
  {src: mquid, alt: "Mquid"},
  {src: betaPrint, alt: "Beta Print"},
  {src: sunlayInsurance, alt: "Sunlay Insurance"},
  {src: creditStar, alt: "Creditstar Microinsurance"},
  {
    src: gmfb,
    alt: "Grooming Microfinance Bank",
  },
  {src: staySafeFacilities, alt: "Staysafe Facilities"},
  {src: ecosense, alt: "Eco-Sense Construction"},
  {src: staySafeSystems, alt: "Staysafe Studios"},
  {src: mquid, alt: "Mquid"},
  {src: betaPrint, alt: "Beta Print"},
  {src: sunlayInsurance, alt: "Sunlay Insurance"},
  {src: creditStar, alt: "Creditstar Microinsurance"},
];

const ClientCarousel = () => {
  return (
    <>
      {" "}
      <Swiper
        slidesPerView={8}
        spaceBetween={2}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="px-4"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo.src} alt={logo.alt} className="h-12" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ClientCarousel;

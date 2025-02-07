import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import cross from "../assets/svg/bg-cross.svg";
import testimonialImg from "../assets/svg/clients/testimonial-img.svg";
import {Link} from "react-router-dom";

const testimonials = [
  {
    name: "Oluwatobiloba",
    plan: "Ruby Health Plan",
    location: "Mquid integration solution",
    image: testimonialImg,
    quote: `"Grooming HMO offers me affordable healthcare coverage that goes beyond just saving money. They provide exceptional benefits, especially for preventive care such as checkups, immunizations for my child , and screenings, while maintaining cost-effective premiums, ensuring I get great value and comprehensive care"`,
  },
  {
    name: "Stanley",
    plan: "Emerald Health Plan",
    location: "Credit Star",
    image: testimonialImg,
    quote: `"I want to express my sincere appreciation for the exceptional care our staffs received under grooming Health Maintenance Organization (HMO). Recently, our staffs had the opportunity to access medical services through the grooming HMO, and we are thoroughly impressed with the quality of care provided."`,
  },
  {
    name: "Yusuf",
    plan: "Ruby Health Plan",
    location: "Staysafe Facilities Limited",
    image: testimonialImg,
    quote: `"Over the past year, GHML and my hospital have provided me with exceptional care and support, always ensuring my healthcare needs were met with professionalism and compassion"`,
  },
  {
    name: "Okoli Fidelia",
    plan: "Emerald Health Plan",
    location: "GC",
    image: testimonialImg,
    quote: `"One thing I truly appreciate about my HMO, GHML, is their unwavering commitment to being available whenever I reach out. No matter the time or situation, they consistently respond promptly and provide the help I need"`,
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center text-center py-10 md:py-20 bg-white relative">
      {/* cross design */}
      <div className="absolute left-0 bottom-0 hidden md:block">
        <img src={cross} alt="background cross" />
      </div>
      <h2 className="text-3xl md:text-4xl mb-8 text-ghmBlack font-semibold  ">
        What Our Clients Say
      </h2>

      <div className="max-w-5xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 30}}
            transition={{duration: 0.5}}
            className="flex flex-col items-center"
          >
            <p className="text-lg text-gray-600 italic mb-6">
              {testimonials[currentIndex].quote}
            </p>
            {/* <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full mb-4"
            /> */}
            <h3 className="font-semibold text-lg">
              {testimonials[currentIndex].name}
            </h3>
            {/* <p className="text-sm text-pink-600">
              {testimonials[currentIndex].plan}
            </p> */}
            <p className="text-sm text-gray-500">
              {testimonials[currentIndex].location}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={handlePrevious}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-500"
        >
          <span className="text-lg">&lt;</span>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-500"
        >
          <span className="text-lg">&gt;</span>
        </button>
      </div>

      <div className="flex space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-pink-600" : "bg-pink-200"
            }`}
          ></div>
        ))}
      </div>

      <Link
        to="/plans"
        className="mt-10 ghm-bg-button-gradient px-4 py-2 md:px-6 md:py-3"
      >
        Explore Plans &rarr;
      </Link>
    </div>
  );
};

export default TestimonialSlider;

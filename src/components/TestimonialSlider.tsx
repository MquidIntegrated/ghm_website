import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import cross from "../assets/svg/bg-cross.svg";
import testimonialImg from "../assets/svg/clients/testimonial-img.svg";

const testimonials = [
  {
    name: "Adebayo Musa",
    plan: "Ruby Health Plan",
    location: "Abuja",
    image: testimonialImg,
    quote: `"GROOMING HMO has been a game-changer for my business. The flexible health plans give my employees peace of mind, which boosts morale and productivity. It’s an investment I’m proud to make!"`,
  },
  {
    name: "Chinwe Okafor",
    plan: "Emerald Health Plan",
    location: "Lagos",
    image: testimonialImg,
    quote: `"GROOMING HMO has been a game-changer for my business. The flexible health plans give my employees peace of mind, which boosts morale and productivity. It’s an investment I’m proud to make!"`,
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
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-pink-600">
              {testimonials[currentIndex].plan}
            </p>
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

      <button className="mt-10 ghm-bg-button-gradient px-4 py-2 md:px-6 md:py-3">
        Explore Plans &rarr;
      </button>
    </div>
  );
};

export default TestimonialSlider;

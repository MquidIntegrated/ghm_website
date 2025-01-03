import {useState} from "react";
import cross from "../assets/svg/faq-cross.svg";

interface FAQ {
  question: string;
  answer: string | JSX.Element;
}

interface FAQToggleBarProps {
  faqs: FAQ[];
}

const FAQToggleBar = ({faqs}: FAQToggleBarProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="space-y-3 ">
      {faqs.map((faq: any, index: number) => (
        <div
          key={index}
          className="border border-pink-600 rounded-tr-[30px] md:rounded-tr-[50px] px-4 md:px-8 py-3 md:py-5"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full text-left text-pink-700 font-semibold hover:text-pink-900 focus:outline-none"
          >
            <span className="ghm-text-gradient font-medium text-base md:text-lg">
              {faq.question}
            </span>
            <span
              className={`transition-transform ${
                activeIndex === index ? "rotate-45" : "rotate-0"
              }`}
            >
              <img
                src={cross}
                alt="Toggle FAQ"
                className="w-4 h-4 md:w-auto md:h-auto"
              />
            </span>
          </button>
          {activeIndex === index && (
            <p className="mt-2 md:mt-3 text-ghmGrey-800 text-sm md:text-base">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQToggleBar;

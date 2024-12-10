import {useState} from "react";
import cross from "../assets/svg/faq-cross.svg";

const faqs = [
  {
    question: "What is health insurance?",
    answer:
      "Health insurance is a type of coverage that pays for medical expenses incurred by the insured.",
  },
  {
    question: "What is an HMO?",
    answer:
      "An HMO (Health Maintenance Organization) provides health services to members through a network of doctors and hospitals.",
  },
  {
    question: "What is GHML?",
    answer:
      "GHML stands for General Health Management Limited, a provider of health insurance services.",
  },
  {
    question: "Who is eligible to register with GHML?",
    answer:
      "Anyone seeking health insurance coverage is eligible to register with GHML.",
  },
  {
    question: "Can I change my plan type?",
    answer:
      "Yes, you can change your plan type by contacting customer support or through your account settings.",
  },
  {
    question: "Can I access my health records online?",
    answer:
      "Yes, you can access your health records online through the GHML portal.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-white to-[#FFE7EF]">
      <div className="ghm-container py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text  */}
        <div className="text-left">
          <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4 md:mb-6">
            Clients Ask Us
          </h2>
          <p className="text-ghmGrey-500 mb-5 md:mb-7 text-base">
            Here are a few common questions we receive from clients looking for
            the best in health insurance. If you don&apos;t find your question
            here, please reach out to us, and we&apos;ll be happy to assist you!
          </p>
          <div>
            <button className="ghm-bg-button-gradient text-sm md:text-base px-4 py-2 md:px-6 md:py-3">
              Contact Us
            </button>
          </div>
        </div>

        {/* faq dropdowns */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
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
                <p className="mt-2 md:mt-3 text-ghmGrey-800 text-xs md:text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

// bg-gradient-to-b from-white to-pink-100

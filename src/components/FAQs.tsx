import {useState} from "react";
import cross from "../assets/svg/faq-cross.svg";
import {Link} from "react-router-dom";

const faqs = [
  {
    question: "How can I purchase a health plan?",
    answer:
      "You can purchase a health plan directly through our website. Simply select the plan that best suits your needs, whether individual or family and make payment. Our sales agent will contact you",
  },
  {
    question: "How can I register my company for the health plan?",
    answer: (
      <>
        You can register your company by submitting your details through this{" "}
        <Link to="/contact" className="text-ghmPurple-700 underline">
          link
        </Link>
        . A sales agent will get in touch with you.
      </>
    ),
  },
  {
    question:
      "How do I add my dependents (e.g., spouse, children) to the plan?",
    answer: (
      <>
        For corporate plans, please contact your HR department or the
        company&apos;s designated liaison officer to initiate the process of
        adding dependents to your plan. <br /> For retail plans, please contact
        our sales team on 09087966270 for further assistance. <br /> In both
        cases, additional documentation may be required, and any associated fees
        will be communicated to you.
      </>
    ),
  },
  {
    question: "How soon will I receive my policy number after registration?",
    answer:
      "After successful registration, your policy number is sent to your registered email. If you do not receive it within 24hrs, please contact our call center (09087966270 or 09087966271) for assistance.",
  },
  {
    question: "How can I view the benefits of my health plan?",
    answer: (
      <>
        You can view the benefits of your health plan by clicking{" "}
        <Link
          to="/plans/retail/full-plan-details"
          className="text-ghmPurple-700 underline"
        >
          health plans.
        </Link>
      </>
    ),
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
            <Link
              to="/contact"
              className="ghm-bg-button-gradient text-sm md:text-base px-4 py-2 md:px-6 md:py-3"
            >
              Contact Us
            </Link>
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
                <p className="mt-2 md:mt-3 text-ghmGrey-800 text-sm md:text-base">
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

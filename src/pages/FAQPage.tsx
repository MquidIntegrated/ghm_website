import {Link} from "react-router-dom";
import FAQToggleBar from "../components/FAQToggleBar";

const membershipAndEnrollmentFaqs = [
  {
    question: "How can I purchase a health plan?",
    answer:
      "You can purchase a health plan directly through our website. Simply select the plan that best suits your needs, whether individual or family and make payment. Our sales agent will contact you",
  },
  {
    question: "How can I buy a health plan for my company?",
    answer: (
      <>
        To register your company, send us a message{" "}
        <Link to="/plans/corporate" className="text-ghmPurple-700 underline">
          here
        </Link>
        . A sales agent will contact you.
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
];

const coverageFaqs = [
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
  {
    question: "How can I find the list of excluded benefits under my plan?",
    answer:
      "To view the benefit excluded from your plan, please refer to the exclusion section of your health plan on our website here.",
  },
  {
    question: "I am over 65 years, can I purchase a health plan?",
    answer: (
      <>
        Yes, GHML has senior citizen plans for individuals over 65 years. For
        additional information, please contact{" "}
        <a
          href="mailto:client.service@groominghm.com"
          className="text-ghmPurple-700 underline"
        >
          client.service@groominghm.com
        </a>{" "}
        or call 09087966270.
      </>
    ),
  },
];

const accessToCareFaqs = [
  {
    question: "How soon can I start enjoying the health cover?",
    answer:
      "You can start enjoying the health cover immediately after successful registration and enrollment.",
  },
  {
    question: "Can I access healthcare if I relocate to another city or area?",
    answer:
      "Yes, you can. If you are relocating, please contact us on 09087966270 or 09087966271.",
  },
];

const claimsFaqs = [
  {
    question: "How do I submit a claim?",
    answer:
      "Claims can be submitted electronically via our online portal. Ensure that all necessary documents are provided for a seamless process.",
  },
  {
    question: "Why was my claim denied or partially paid?",
    answer: (
      <>
        Claims may be denied or partially paid for the following reasons:{" "}
        <ul className="list-disc ml-5">
          <li>The service is not covered under Enrolee policy.</li>
          <li>Missing or incomplete documentation.</li>
          <li>The claims Amount submitted exceeds policy limits.</li>
          <li>Non-compliance with the terms and conditions of the policy.</li>
          <li>The service rate submitted are higher than the agreed rate</li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I appeal a denied claim?",
    answer:
      "Yes, you can appeal a denied claim. If denied you will receive a detailed explanation on the reason for denial. To appeal, simply provide further clarification and documentation to support your claim.",
  },
  {
    question: "How can I check the status of a claim?",
    answer:
      "You can track the status of your claims through our online portal or by contacting our customer service (09087966270, 090879666271). Kindly note that you will receive notification regarding the progress of your claim at every stage.",
  },
  {
    question: "What should I do in case of a medical emergency?",
    answer:
      "In case of an emergency, you can access care at any accredited healthcare facility. However, you need to notify us within 24 hours.",
  },
];

const complaintsAndFeedbackFaqs = [
  {
    question: "How do I file a complaint or report an issue?",
    answer: (
      <>
        You can submit your complaints to{" "}
        <a
          href="mailto:client.service@groominghm.com"
          className="text-ghmPurple-700 underline"
        >
          client.service@groominghm.com
        </a>{" "}
        or call our hotlines (09087966271 or 09087966270).
      </>
    ),
  },
];

const FAQPage = () => {
  return (
    <div className="ghm-container py-10 md:py-20">
      <div className="text-center">
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-ghmGrey-500 mb-5 md:mb-10">
          Your questions answered, all in one place.
        </p>
      </div>
      {/* Membership and Enrollment faq dropdowns */}
      <div className="max-w-6xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold mb-5 ">
          Membership and Enrollment
        </h3>
        <FAQToggleBar faqs={membershipAndEnrollmentFaqs} />
      </div>

      {/* Coverage faq dropdowns */}
      <div className="max-w-6xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold mb-5 ">Coverage</h3>
        <FAQToggleBar faqs={coverageFaqs} />
      </div>

      {/* Access to care faq dropdowns */}
      <div className="max-w-6xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold mb-5 ">Access to Care</h3>
        <FAQToggleBar faqs={accessToCareFaqs} />
      </div>

      {/* Claims dropdowns */}
      <div className="max-w-6xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold mb-5 ">Claims</h3>
        <FAQToggleBar faqs={claimsFaqs} />
      </div>

      {/* Complaints and Feedback dropdowns */}
      <div className="max-w-6xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold mb-5 ">
          Complaints and Feedback
        </h3>
        <FAQToggleBar faqs={complaintsAndFeedbackFaqs} />
      </div>
    </div>
  );
};

export default FAQPage;

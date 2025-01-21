const definitions = [
  {
    spanText: "HMO",
    text: `Health Maintenance Organization responsible for managing the Retail Health Plan, in this case "GHML".`,
  },
  {
    spanText: "Enrollee",
    text: `An individual who subscribes to the Retail Health Plan.`,
  },
  {
    spanText: "Provider",
    text: `A healthcare facility or professional accredited by the HMO to provide care.`,
  },
  {
    spanText: "Plan",
    text: `The retail health insurance product you have purchased.`,
  },
  {
    spanText: "Premium",
    text: `The amount paid by the Enrollee for coverage under the Plan.`,
  },
  {
    spanText: "Exclusions",
    text: `Services, treatments, or items not covered under the Plan.`,
  },
  {
    spanText: "Waiting Period",
    text: `The specified time period after enrolment during which certain benefits or services are not covered under the Plan.`,
  },
];

const waitingPeriods = [
  "Maternity Services: Can be accessed after one year of subscription",
  "Surgeries: Can be accessed after one year of subscription.",
  "Immunization: Can be accessed after 12 months of subscription.",
  "Neonatal Care Services: Can be accessed after 12 months of subscription.",
  "Wellness Benefits: Can be accessed after 12 months of subscription.",
];

const exclusions = [
  "Experimental treatments and drugs.",
  "Self-inflicted injuries or conditions resulting from substance abuse.",
  "Pre-existing conditions not disclosed during enrolment.",
  "Psychiatric Institutionalization",
  "Infertility Investigation other than listed or treatment such as IVF, ICSI, G.I.F.T, etc Virility enhancing drugs",
  "Organ Surgery and Transplant",
  "Cosmetic and Plastic Treatment",
  "Drug and Alcohol Abuse and Rehabilitation",
  "Supply of Prosthesis (Artificial Limbs, Dental Prosthesis)",
  "Hormonal Replacement Therapy",
  "Treatment of Obesity",
  "Treatment of Epidemic and Pandemic Home Care, Domiciliary Care",
  "Herbal Drugs, Non-prescription Drugs",
  "Dental Care not listed in covered services",
  "Comprehensive Health Screening outside the scope of benefit",
  "Treatment for New Born not registered under the plan",
  "Congenital Abnormalities & Conditions (e.g., sickle cell anemia)",
  "Neonatal Care not listed under Neonatal Services",
  "Speech Disorders Learning Difficulties, Behavioral and Developmental problem",
  "Consultation with unrecognized Consultants, Hospitals, Family Doctors, Therapist, Dental Practitioners or Complimentary/Traditional Medicine Practitioners Elective Caesarean Section.",
];

const TermsAndConditions = () => {
  return (
    <div className="ghm-container py-10 md:py-20">
      <div className="text-center">
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4">
          Terms and Conditions
        </h2>
        <p className="text-ghmGrey-500 mb-5 md:mb-10">
          Your guide to using our services responsibly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto *:mb-7">
        <p className="text-base ">
          These Terms and Conditions outline the rights, responsibilities, and
          obligations of the Enrollee (referred to as "You") and the Health
          Maintenance Organization (referred to as "GHML") under this Retail
          Health Plan. By enrolling in this plan, you agree to the following
          terms:
        </p>
        {/* definitions */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            1. Definitions
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            {definitions.map(definition => (
              <li>
                <span className="font-semibold">{definition.spanText}:</span>{" "}
                {definition.text}
              </li>
            ))}
          </ul>
        </div>
        {/* age limits */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            2.1 Age Limits
          </h3>
          <p>
            The Retail Health Plan is available to individuals aged 18 to 65
            years at the time of enrolment.{" "}
          </p>
        </div>
        {/* family plan */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            2.2 Family Plan
          </h3>
          <p>
            The family plan covers 2 to 6 members, including the principal
            enrollee, a spouse, and up to four children aged 18 years or
            younger.
          </p>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-5 ">
          3. Scope of Coverage
        </h3>

        {/* Covered Services */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            3.1 Covered Services
          </h3>
          <p>
            The Plan covers medically necessary services as stated in the
            benefits plan and limits.
          </p>
        </div>

        {/* Limitations */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            3.2 Limitations
          </h3>
          <p>
            The plan is subject to certain limit on coverage. Benefits are
            categorized into two sections:{" "}
            <span className="italic">Inpatient Limit and Outpatient Limit</span>
            . Each section has specific benefit limits. Once a specific benefit
            limit is fully utilized, the remaining sectional limit can be used
            for other benefits within that section, excluding the exhausted
            benefit limit.
          </p>
        </div>

        {/* Waiting Period for Specific Benefits */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            3.3 Waiting Period for Specific Benefits
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            {waitingPeriods.map(waitingPeriod => (
              <li>{waitingPeriod}</li>
            ))}
          </ul>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-5 ">
          4. Premium Payments
        </h3>

        {/* Payment Terms */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            4.1. Payment Terms
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            <li>
              Premiums must be paid annually, as agreed upon at enrolment.
            </li>
            <li>
              Failure to pay the premium within the grace period (7 days from
              the due date) will result in suspension or termination of
              coverage.
            </li>
          </ul>
        </div>

        {/* Non-Refundable Premiums */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            4.2. Non-Refundable Premiums
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            <li>
              Premiums are non-refundable except in cases of termination of the
              Plan by the HMO.
            </li>
          </ul>
        </div>

        {/* Health Check */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            5. Health Check
          </h3>
          <p>
            Enrollees are eligible to undergo a comprehensive health check
            annually at a designated center approved by the HMO.
          </p>
        </div>

        {/* Exclusions */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            6. Exclusions
          </h3>
          <p className="mb-2">The following services are not covered:</p>
          <ul className="list-disc ml-4 *:mb-2">
            {exclusions.map(exclusion => (
              <li>{exclusion}</li>
            ))}
          </ul>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-5 ">
          7. Enrollee Obligations
        </h3>

        {/* Accurate Information */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            7.1. Accurate Information
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            <li>
              You must provide accurate personal and medical information during
              enrolment.
            </li>
            <li>
              Failure to disclose relevant information may lead to termination
              of the Plan.
            </li>
          </ul>
        </div>

        {/* Use of Accredited Providers */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            7.2. Use of Accredited Providers
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            <li>
              You are required to use accredited Providers for all covered
              services unless in an emergency.
            </li>
            <li>
              Unauthorized care from non-accredited Providers will not be
              reimbursed unless approved in advance by the HMO.
            </li>
          </ul>
        </div>

        {/* Pre-Authorization */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            7.3. Pre-Authorization
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            <li>
              Certain services require pre-authorization from the HMO. These
              include specialist consultations, surgeries, and diagnostic tests.
            </li>
          </ul>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-5 ">
          8. HMO Obligations
        </h3>

        {/* Access to Providers */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            8.1. Access to Providers
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            <li>
              We will ensure access to a network of accredited Providers for
              timely and quality care.
            </li>
          </ul>
        </div>

        {/* Claims Processing */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            8.2. Claims Processing
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            <li>
              Claims will be processed within 30 days of submission, provided
              all required documents are complete.
            </li>
          </ul>
        </div>

        {/* Dispute Resolution */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            8.3. Dispute Resolution
          </h3>
          <ul className="list-disc ml-4 *:mb-2">
            <li>
              Any disputes regarding coverage or claims will be resolved through
              the HMO's grievance procedure.
            </li>
          </ul>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-5 ">
          9. Termination of Plan
        </h3>

        {/* By the HMO */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            9.1. By the HMO
          </h3>
          <p className="mb-2">
            The HMO reserves the right to terminate your Plan for the following
            reasons:
          </p>
          <ul className="list-disc ml-4 *:mb-2">
            <li>Non-payment of premiums.</li>
            <li>Fraud or intentional misrepresentation.</li>
            <li>Misuse of the Plan</li>
          </ul>
        </div>

        {/* By the Enrollee */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            9.2. By the Enrollee
          </h3>
          <p>
            You may terminate your Plan by providing written notice to the HMO.
            Termination will be effective at the end of the premium payment
            period.
          </p>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-5 ">
          10. General Provisions
        </h3>

        {/* Amendments */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            10.1. Amendments
          </h3>
          <p>
            The HMO reserves the right to amend these Terms and Conditions with
            30 days' notice to the enrollee.
          </p>
        </div>

        {/* Privacy */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            10.2. Privacy
          </h3>
          <p>
            Your personal and medical information will be handled in compliance
            with applicable data protection laws.
          </p>
        </div>

        {/* Force Majeure */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            10.3. Force Majeure
          </h3>
          <p>
            The HMO is not liable for service delays or non-availability due to
            events beyond its control, including natural disasters, strikes, or
            governmental actions.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 ">
            10.4. Governing Law
          </h3>
          <p>
            These Terms and Conditions are governed by the laws of Nigeria.{" "}
            <br /> By enrolling in this Plan, you acknowledge that you have
            read, understood, and agree to abide by these Terms and Conditions.{" "}
            <br /> For questions or clarifications, please contact our Clients
            Team at{" "}
            <a
              href="tel:+2349087966270"
              className="text-ghmPurple-400 underline hover:no-underline"
            >
              09087966270
            </a>{" "}
            or email{" "}
            <a
              className="text-ghmPurple-400 underline hover:no-underline"
              href="mailto:client.service@groominghm.com"
            >
              {" "}
              client.service@groominghm.com
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

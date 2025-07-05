import LinkCard from "./LinkCard";
import retailPlan from "../assets/webp/retailPlan.webp";
import studentPlan from "../assets/webp/studentPlan.webp";
import corporatePlan from "../assets/webp/corporatePlan.webp";

const linkCardProps = [
  {
    imageSrc: retailPlan,
    title: "Retail Plans",
    description: "Perfect for individuals and families — no employer needed.",
    buttonText: "View Retail Plans",
    buttonLink: "/plans/retail",
  },
  {
    imageSrc: studentPlan,
    title: "Student Plans",
    description:
      "Cover everything from routine checkups to emergencies for students.",
    buttonText: "Learn More",
    buttonLink: "/plans/student",
  },
  {
    imageSrc: corporatePlan,
    title: "Corporate Plans",
    description:
      "Comprehensive coverage, flexible options, and seamless onboarding for your staff",
    buttonText: "Learn More",
    buttonLink: "/plans/corporate",
  },
];

const OurPlans = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-2xl py-10 md:py-20">
        <h4 className="text-ghmPurple-300 mb-2 md:mb-4 text-sm md:text-base">
          Our Plans
        </h4>
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl max-w-xl mb-4 md:mb-6">
          Explore Our Health Plans
        </h2>
        <p className="text-ghmGrey-500 mb-10 md:mb-12 max-w-3xl">
          Our plans are designed with flexibility in mind, ensuring that you,
          your family, and your team have comprehensive insurance coverage
          whenever you need it. Enjoy easy access to care and support tailored
          to your needs.
        </p>

        {/* health plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-0">
          {linkCardProps.map((linkCard, index) => (
            <LinkCard
              key={index}
              imageSrc={linkCard.imageSrc}
              title={linkCard.title}
              description={linkCard.description}
              buttonText={linkCard.buttonText}
              buttonLink={linkCard.buttonLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPlans;

// className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 "

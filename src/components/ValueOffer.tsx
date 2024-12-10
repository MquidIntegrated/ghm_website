import triangle from "../assets/svg/triangle.svg";
import globe from "../assets/svg/global.svg";
import shuffle from "../assets/svg/group.svg";
import headphones from "../assets/svg/headphones.svg";
import users from "../assets/svg/users-02.svg";
import microscope from "../assets/svg/microscope.svg";

const values = [
  {
    icon: triangle,
    title: "Comprehensive Coverage",
    description:
      "Enjoy a wide range of health services that protect you from unexpected medical costs.",
  },
  {
    icon: globe,
    title: "Global Standards",
    description:
      "Experience Health Insurance that meets international best practices for quality.",
  },
  {
    icon: shuffle,
    title: "Flexible Plans",
    description:
      "Find a health plan that suits you. Discover plans for individuals, families, and organizations.",
  },
  {
    icon: headphones,
    title: "Dedicated Support",
    description:
      "Access responsive customer service to assist with inquiries and streamline claims processes.",
  },
  {
    icon: users,
    title: "Extensive Network",
    description:
      "Benefit from a broad network of accredited hospitals and clinics for easy access to care.",
  },
  {
    icon: microscope,
    title: "Preventive Focus",
    description:
      "Stay healthy with plans prioritizing preventive services for better long-term well-being.",
  },
];

const ValueOffer = () => {
  return (
    <div>
      <div className="ghm-container py-24">
        <h4 className="text-ghmPurple-300 mb-4 text-sm md:text-base">
          Our Value Offer
        </h4>
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl max-w-lg mb-10">
          We Offer Comprehensive Health Insurance Services for Everyone
        </h2>
        <p className="text-ghmGrey-500 mb-10 md:mb-20">
          GROOMING HMO provides health insurance for individuals, families,
          SMEs, and large corporate organizations. We&apos;re setting new
          standards in Health Insurance across Nigeria and Africa by adopting
          global best practices. Whatever your Health Insurance needs, we have a
          plan that works for you.
        </p>

        {/* services grid */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div className="w-11/12">
              {/* icon */}
              <div
                className={`bg-gradient-to-b from-[#A13332] to-[#432037] w-fit px-2 py-4  mb-7 ${
                  index < 3 ? "rounded-tr-3xl" : "rounded-br-3xl"
                }`}
              >
                <img src={value.icon} alt="" />
              </div>
              {/* write-up  */}
              <div>
                <h3 className="mb-3 text-xl font-medium">{value.title}</h3>
                <p className="text-ghmGrey-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValueOffer;

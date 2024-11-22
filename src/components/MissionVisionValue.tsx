import missionIcon from "../assets/svg/mission-rocket.svg";
import visionIcon from "../assets/svg/vision-eye.svg";
import valueIcon from "../assets/svg/value-heart.svg";
import hereForYou from "../assets/png/hereForYou.png";
import fatherSonImage from "../assets/png/fatherSon.png";
import halfcross from "../assets/svg/half-cross.svg";
import darkHalfCross from "../assets/svg/half-cross-dark.svg";

interface ICard {
  icon: string;
  title: string;
  description: string;
}

const cardDetails: ICard[] = [
  {
    icon: missionIcon,
    title: "Our Mission",
    description:
      "Our mission is to empower individuals and communities to achieve optimal health and well-being through personalized, accessible, and evidence-based Health Insurance solutions",
  },
  {
    icon: visionIcon,
    title: "Our Vision",
    description:
      "Our vision is to be a leader in innovative health management, delivering comprehensive and integrated care that promotes lifelong wellness and vitality.",
  },
  {
    icon: valueIcon,
    title: "Core Value",
    description:
      "Prioritizing the needs and satisfaction of customers with Implementation of practices that ensure the viability and sustainability of Health Insurance services.",
  },
];

const Card = ({icon, title, description}: ICard) => (
  <div className="bg-ghmPink-200 p-4 max-w-[380px] max-h-[400px] flex flex-col justify-between rounded-lg">
    {/* icon */}
    <div className="mb-24">
      <img src={icon} alt="" className="h-16 w-16" />
    </div>
    {/* writeup */}
    <div>
      <h3 className="ghm-text-gradient italic font-instrument text-[40px]">
        {title}
      </h3>
      <p className="text-ghmPurple-400 ">{description}</p>
    </div>
  </div>
);

const MissionVisionValue = () => {
  return (
    <div className="ghm-container py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        style={{backgroundImage: `url(${hereForYou})`}}
        className="lg:row-span-2 bg-cover bg-center rounded-lg w-full md:w-11/12 px-7 py-3 h-[400px] md:h-full text-white text-3xl font-semibold flex items-end"
      >
        <p className="flex items-center">
          Here for you.{" "}
          <span className="inline-block -ml-4">
            <img src={darkHalfCross} />
          </span>
        </p>
      </div>
      {cardDetails.map((card, index) => (
        <Card
          icon={card.icon}
          title={card.title}
          description={card.description}
          key={index}
        />
      ))}
      <div
        style={{backgroundImage: `url(${fatherSonImage})`}}
        className="bg-cover bg-center rounded-lg w-full md:w-9/12 h-[400px] p-4 flex justify-end items-end"
      >
        <img src={halfcross} alt="" />
      </div>
    </div>
  );
};

export default MissionVisionValue;

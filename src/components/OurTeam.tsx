import profilePic from "../assets/png/dummyTeamMember.png";

interface ITeamMember {
  imgSrc: string;
  name: string;
  jobTitle: string;
}

const teamMembers: ITeamMember[] = [
  {
    imgSrc: profilePic,
    name: "Joan Rivers",
    jobTitle: "President / CEO",
  },
  {
    imgSrc: profilePic,
    name: "James Luke",
    jobTitle: "President / CEO",
  },
  {
    imgSrc: profilePic,
    name: "Candace Vishram",
    jobTitle: "President / CEO",
  },
];

const ProfileCard = ({imgSrc, name, jobTitle}: ITeamMember) => (
  <div>
    <img src={imgSrc} alt="" className="mb-6" />
    <h4 className="font-semibold text-xl">{name}</h4>
    <p>{jobTitle}</p>
  </div>
);

const OurTeam = () => {
  return (
    <div className="ghm-container py-10 md:py-20">
      {" "}
      <h4 className="text-ghmPurple-300 mb-2 md:mb-4 text-sm md:text-base">
        Our Team
      </h4>
      <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4 md:mb-6">
        Dedicated to maintaining your health
      </h2>
      <p className="text-ghmGrey-500 mb-10 md:mb-20">
        At Grooming Health, our team of professionals across various fields work
        together to support your health journey. We&apos;re committed to
        providing the resources and guidance you need for insured long-term
        well-being and a healthy future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <ProfileCard
            imgSrc={member.imgSrc}
            name={member.name}
            jobTitle={member.jobTitle}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

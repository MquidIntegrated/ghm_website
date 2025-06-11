import heroImg from "../assets/png/homeHero.png";

const HomeHeroSection = () => {
  return (
    <section
      style={{backgroundImage: `url(${heroImg})`}}
      className="bg-cover bg-center relative h-screen w-full flex items-end md:items-center"
    >
      <div className="ghm-container">
        <div className="max-w-3xl text-white mb-10 md:mb-0">
          <h1 className="text-4xl md:text-[64px] md:leading-[70px] font-bold mb-4">
            Best Affordable Health Insurance for Individuals, Families &
            Businesses in Nigeria
          </h1>
          <p className="text-lg mb-8">
            Our health insurance provides easy access to quality medical care.
            Covering everything from routine checkups and specialist
            consultations to emergencies. With us, you and your loved ones can
            enjoy a healthy and worry-free life.
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <a
              href="/plans"
              className="bg-ghmPurple-300 text-white text-center px-24 py-3 rounded-full hover:bg-white hover:text-ghmPurple-300"
            >
              View Our Plans
            </a>
            {/* <a
              href="/plans"
              className="text-white border text-center px-6 py-3 rounded-full"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;

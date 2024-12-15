import heroImg from "../assets/png/homeHero.png";

const HomeHeroSection = () => {
  return (
    <section
      style={{backgroundImage: `url(${heroImg})`}}
      className="bg-cover bg-center relative h-screen w-full flex items-end md:items-center"
    >
      <div className="ghm-container">
        <div className="max-w-2xl text-white mb-10 md:mb-0">
          <h1 className="text-4xl md:text-[64px] md:leading-[70px] font-bold mb-4">
            Health Insurance for people who care
          </h1>
          <p className="text-lg mb-8">
            Protect what matters most with health insurance designed to make
            life easier. We've got your back for everything from routine
            checkups to unexpected emergencies, so you can focus on enjoying
            life.
          </p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <a
              href="/plans/retail"
              className="bg-ghmPurple-300 text-white text-center px-6 py-3 rounded-full hover:bg-ghmPurple-700"
            >
              View Retail Plans
            </a>
            <a
              href="/plans"
              className="text-white border text-center px-6 py-3 rounded-full"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;

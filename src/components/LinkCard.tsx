import {Link} from "react-router-dom";

interface LinkCardProps {
  imageSrc: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

const LinkCard = ({imageSrc, title, buttonText, buttonLink}: LinkCardProps) => {
  return (
    <div
      style={{backgroundImage: `url(${imageSrc})`}}
      className={`w-full max-w-[394.67px] mx-auto rounded-lg overflow-hidden shadow-lg bg-cover bg-center h-[500px] xl:h-[850px] relative flex flex-col justify-end`}
      role="article"
      aria-labelledby="card-title"
    >
      {/* Gradient overlay instead of solid black for better depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

      {/* Content container with proper spacing */}
      <div className="relative p-4 z-10">
        <h2
          id="card-title"
          className="text-white text-xl md:text-2xl font-semibold mb-3"
        >
          {title}
        </h2>

        <Link to={buttonLink} className="inline-block">
          <button className="inline-flex items-center space-x-2 bg-white hover:bg-gray-400 text-ghmGrey-800 py-1.5 px-3 md:py-2 md:px-4 rounded-full transition-all duration-200 group text-sm md:text-base">
            <span>{buttonText}</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LinkCard;

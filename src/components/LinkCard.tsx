import {Link} from "react-router-dom";

interface LinkCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const LinkCard = ({
  imageSrc,
  title,
  description,
  buttonText,
  buttonLink,
}: LinkCardProps) => {
  return (
    <div
      className="w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl bg-white"
      role="article"
      aria-labelledby="card-title"
    >
      {/* Image container */}
      <div className="relative h-52 overflow-hidden mx-2 rounded-2xl">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container */}
      <div className="p-6 space-y-4">
        <h2
          id="card-title"
          className="text-[#540D2D] text-xl md:text-2xl font-bold leading-tight"
        >
          {title}
        </h2>

        <p className=" text-sm md:text-base leading-relaxed">{description}</p>

        <Link to={buttonLink} className="block">
          <button className="w-full bg-ghmPurple-300 hover:bg-ghmPurple-200 text-white hover:text-black py-3 px-6 rounded-full transition-colors duration-200 font-medium text-sm md:text-base">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LinkCard;

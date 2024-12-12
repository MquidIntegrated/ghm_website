import {Link} from "react-router-dom";
import image from "../assets/png/404_Image.png";

const NotFoundPage = () => {
  return (
    <div className="ghm-404-bg-gradient">
      <div className="ghm-container py-10 md:py-20">
        <div className="flex items-center justify-center">
          <div>
            {/* image */}
            <div className="flex justify-center mb-8">
              <img src={image} alt="ghm logo" />
            </div>
            {/* writeup */}
            <div className="flex flex-col justify-center text-center *:mb-6">
              <h2 className="text-5xl font-semibold ghm-404-text-gradient pb-1">
                Page Not Found
              </h2>
              <p className="text-ghmGrey-800">
                Oops!! We couldn&apos;t find the page you were looking for.
              </p>
              <Link
                to="/"
                className="bg-ghmGrey-800 w-fit text-white px-5 py-3 rounded-full self-center"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

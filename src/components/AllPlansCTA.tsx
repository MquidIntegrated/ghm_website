import {Link} from "react-router-dom";

const AllPlansCTA = () => {
  return (
    <div className="bg-white text-black py-16 ">
      <div className="ghm-container flex flex-col items-center justify-center">
        <div className="">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Start Enjoying Our Health Plans
          </h2>
          {/* <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis!
          </p> */}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 ">
          <Link
            to="/plans"
            className="ghm-bg-button-gradient text-ghmBlue inline-block rounded-full px-6 py-5 font-medium hover:bg-ghmPurple-400 transition-colors"
          >
            Explore Our Plans &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPlansCTA;

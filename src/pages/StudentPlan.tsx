import image from "../assets/png/studentPlanImg.png";

const StudentPlan = () => {
  return (
    <div className="ghm-container py-10 md:py-20">
      <div className="flex flex-col-reverse  lg:flex-row gap-y-10 lg:gap-y-0 lg:space-x-16 xl:space-x-28">
        {/* image */}
        <div>
          <img src={image} alt="" />
        </div>
        {/* form  */}
        <div className="flex-1">
          {" "}
          <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl max-w-xl mb-4">
            Get your Student Plan
          </h2>
          <p className="text-ghmGrey-700 mb-5 md:mb-10">
            Fill out the form below and our team will reach out to provide a
            customized quote
          </p>
          <form className="space-y-4 md:w-10/12">
            {/* name of school field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolName" className="text-ghmGrey-500">
                Name of School
              </label>
              <input
                type="text"
                placeholder="School Name"
                id="schoolName"
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* school email field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolEmail" className="text-ghmGrey-500">
                Official Email
              </label>
              <input
                type="text"
                placeholder="School Official Email"
                id="schoolEmail"
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* Official Phone Number field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolName" className="text-ghmGrey-500">
                Official Phone Number
              </label>
              <input
                type="number"
                placeholder="080 393 29333"
                id="officialPhoneNumber"
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* school address field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolAddress" className="text-ghmGrey-500">
                School Address
              </label>
              <input
                type="text"
                placeholder="Physical address of the school"
                id="schoolAddress"
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>

            {/* submit button */}
            <input
              type="submit"
              name="Submit"
              id="submit"
              className="px-16 py-4 bg-ghmPurple-300 rounded-full text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentPlan;

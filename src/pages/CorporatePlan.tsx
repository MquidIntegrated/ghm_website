import React from "react";
import image from "../assets/png/corporatePlanForm.png";

const CorporatePlan = () => {
  return (
    <div className="ghm-container py-10 md:py-20">
      <div className="flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 lg:space-x-16 xl:space-x-28">
        {/* image */}
        <div>
          <img src={image} alt="" />
        </div>
        {/* form  */}
        <div className="flex-1">
          {" "}
          <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl max-w-xl mb-4">
            Get a Corporate Plan
          </h2>
          <p className="text-ghmGrey-700 mb-5 md:mb-10">
            Please fill out the form to receive customized health plan quotes,
            thoughtfully designed to meet the specific needs of your
            organization.
          </p>
          <form className="space-y-4 md:w-10/12">
            {/* name of organization field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolName" className="text-ghmGrey-500">
                Name of Organization
              </label>
              <input
                type="text"
                placeholder="Organization Name"
                id="schoolName"
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* official email field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolEmail" className="text-ghmGrey-500">
                Official Email
              </label>
              <input
                type="text"
                placeholder="Official Email"
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
                placeholder="080 000 0000"
                id="officialPhoneNumber"
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* name and phone number of representatives */}
            <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              {/* representatives name field */}
              <div className="flex flex-col space-y-2 w-full">
                <label
                  htmlFor="schoolName"
                  className="text-ghmGrey-500 text-nowrap"
                >
                  Name of Organization&apos;s Representative
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  id="representativeFullName"
                  className="border px-6 py-4 rounded-full border-ghmPurple-200"
                />
              </div>
              {/* representatives number field */}
              <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="schoolName" className="text-ghmGrey-500">
                  Phone Number of Representative
                </label>
                <input
                  type="number"
                  placeholder="080 000 0000"
                  id="representativePhoneNumber"
                  className="border px-6 py-4 rounded-full border-ghmPurple-200"
                />
              </div>
            </div>
            {/* office address field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolAddress" className="text-ghmGrey-500">
                Office Address
              </label>
              <input
                type="text"
                placeholder="Physical address of the organization"
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

export default CorporatePlan;

import {useState} from "react";
import nameIcon from "../assets/svg/userContactForm.svg";
import mailIcon from "../assets/svg/mailContactForm.svg";
// import deal from "../assets/svg/deal.svg";
import api from "../utils/ApiBaseUrl";
import phone from "../assets/svg/phone.svg";

const Whistleblowing = () => {
  const [isFormSuccess, setIsFormSuccess] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    nameOfOfficer: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {id, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await api.post("/form/whistleblowing-form", formData);

      if (response.data.success) {
        setIsFormSuccess("Report submitted successfully");
        setFormStatus(true);
      } else {
        setIsFormSuccess("Failed to submit the report. Please try again.");
        setFormStatus(false);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setIsFormSuccess("An error occurred. Please try again later.");
      setFormStatus(false);
    } finally {
      setFormData({
        nameOfOfficer: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        comments: "",
      });
      setIsLoading(false);
      setTimeout(() => {
        setFormStatus(null);
        setIsFormSuccess("");
      }, 3000);
    }
  };

  return (
    <div className="ghm-container py-10 md:py-20">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {/* <button className="flex gap-x-2 text-ghmPurple-300 border border-ghmPurple-300 rounded-full px-4 py-2 mb-2">
            <span>
              <img src={deal} alt="" />
            </span>
            Report Confidentially
          </button> */}
          <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl max-w-xl mb-3">
            Whistleblowing Form
          </h2>
          <p className="text-ghmGrey-700 mb-5 md:mb-10">
            Would you like to report any unethical or illegal activity within
            Grooming Health Management? Your report will be handled with strict
            confidentiality. Please provide as much detail as possible.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* name of officer field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="nameOfOfficer" className="text-ghmGrey-500">
                Name of Officer <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                  <img src={nameIcon} alt="Name Icon" />
                </div>
                <input
                  required
                  type="text"
                  placeholder="Officer's Name"
                  id="nameOfOfficer"
                  value={formData.nameOfOfficer}
                  onChange={handleChange}
                  className="border ps-16 px-6 py-4 rounded-full border-ghmPurple-200 w-full"
                />
              </div>
            </div>

            {/* comments field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="comments" className="text-ghmGrey-500">
                Comments <span className="text-red-600">*</span>
              </label>
              <textarea
                required
                name="comments"
                id="comments"
                cols={30}
                rows={6}
                placeholder="Please provide detailed information about the incident..."
                value={formData.comments}
                onChange={handleChange}
                className="border px-6 py-4 rounded-3xl border-ghmPurple-200"
              ></textarea>
            </div>

            {/* first name field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="firstName" className="text-ghmGrey-500">
                First Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                  <img src={nameIcon} alt="Name Icon" />
                </div>
                <input
                  type="text"
                  placeholder="Your First Name"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border ps-16 px-6 py-4 rounded-full border-ghmPurple-200 w-full"
                />
              </div>
            </div>

            {/* last name field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="lastName" className="text-ghmGrey-500">
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                  <img src={nameIcon} alt="Name Icon" />
                </div>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border ps-16 px-6 py-4 rounded-full border-ghmPurple-200 w-full"
                />
              </div>
            </div>

            {/* email field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-ghmGrey-500">
                Email Address <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                  <img src={mailIcon} alt="Mail Icon" />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border ps-16 px-6 py-4 rounded-full border-ghmPurple-200 w-full"
                />
              </div>
            </div>

            {/* phone number field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="phoneNumber" className="text-ghmGrey-500">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                  <img src={phone} alt="Phone Icon" className="h-5" />
                </div>
                <input
                  type="tel"
                  placeholder="080 000 0000"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border ps-16 px-6 py-4 rounded-full border-ghmPurple-200 w-full"
                />
              </div>
            </div>

            {/* Form success/error message */}
            <p
              className={`${
                formStatus === null
                  ? ""
                  : formStatus
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }`}
            >
              {isFormSuccess}
            </p>

            {/* submit button */}
            <input
              type="submit"
              name="Submit"
              disabled={isLoading}
              value={isLoading ? "Submitting..." : "Submit Report"}
              id="submit"
              className={`px-10 py-4 ${
                isLoading ? "bg-ghmPurple-400" : "bg-ghmPurple-300"
              } rounded-full text-white cursor-pointer`}
            />
          </form>

          <div className="mt-10 text-ghmGrey-700">
            <p>
              Download our whistleblowing policy{" "}
              <span className="underline hover:no-underline">
                <a href="/pdfs/whistleblowing-policy.pdf" download>
                  here
                </a>
              </span>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whistleblowing;

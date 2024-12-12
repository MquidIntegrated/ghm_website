import {useState} from "react";
import image from "../assets/png/contactForm.png";
import nameIcon from "../assets/svg/userContactForm.svg";
import mailIcon from "../assets/svg/mailContactForm.svg";
import deal from "../assets/svg/deal.svg";
import api from "../utils/ApiBaseUrl";

const Contact = () => {
  const [isFormSuccess, setIsFormSuccess] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
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
      const response = await api.post("/form/contact-form", formData);

      if (response.data.success) {
        setIsFormSuccess("Message sent successfully");
        setFormStatus(true);
      } else {
        setIsFormSuccess("Failed to send the message. Please try again.");
        setFormStatus(false);
      }
      // console.log("Response:", response.data);
    } catch (error) {
      console.error("Error during form submission:", error);
      setIsFormSuccess("An error occurred. Please try again later.");
      setFormStatus(false);
    } finally {
      setFormData({
        fullName: "",
        email: "",
        message: "",
      }); // Reset form fields
      setIsLoading(false);
      setTimeout(() => {
        setFormStatus(null);
        setIsFormSuccess("");
      }, 3000);
    }
  };

  return (
    <div className="ghm-container py-10 md:py-20">
      <div className="flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 lg:space-x-16 xl:space-x-28">
        {/* image */}
        <div>
          <img src={image} alt="" />
        </div>
        {/* form  */}
        <div className="flex-1">
          <button className="flex gap-x-2 text-ghmPurple-300 border border-ghmPurple-300 rounded-full px-4 py-2 mb-2">
            <span>
              <img src={deal} />
            </span>
            We are here to help
          </button>{" "}
          <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl max-w-xl mb-3">
            Contact us
          </h2>
          <p className="text-ghmGrey-700 mb-5 md:mb-10">
            Reach out to us and we will respond as soon as possible.
          </p>
          <form className="space-y-4 md:w-10/12" onSubmit={handleSubmit}>
            {/* full name field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="fullName" className="text-ghmGrey-500">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                  <img src={nameIcon} alt="Name Icon" />
                </div>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border ps-16 px-6 py-4 rounded-full border-ghmPurple-200 w-full"
                />
              </div>
            </div>
            {/* email field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-ghmGrey-500">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                  <img src={mailIcon} alt="Mail Icon" />
                </div>
                <input
                  required
                  type="text"
                  placeholder="Your Email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border ps-16 px-6 py-4 rounded-full border-ghmPurple-200 w-full"
                />
              </div>
            </div>
            {/* message field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-ghmGrey-500">
                Message
              </label>
              <textarea
                required
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Good day.."
                value={formData.message}
                onChange={handleChange}
                className="border px-6 py-4 rounded-3xl border-ghmPurple-200"
              ></textarea>
              {/* <input
                type="number"
                placeholder="080 000 0000"
                id="officialPhoneNumber"
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              /> */}
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
              value={isLoading ? "Sending..." : "Send Message"}
              id="submit"
              className={`px-10 py-4 ${
                isLoading ? "bg-ghmPurple-400" : "bg-ghmPurple-300"
              } rounded-full text-white`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

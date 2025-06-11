import {useState} from "react";
import image from "../assets/png/studentPlanImg.png";
import api from "../utils/ApiBaseUrl";

const StudentPlan = () => {
  const [isFormSuccess, setIsFormSuccess] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const [formStatus, setFormStatus] = useState<boolean>();
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolEmail: "",
    officialPhoneNumber: "",
    schoolAddress: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      const response = await api.post("/form/student-plan", formData);

      if (response.data.success) {
        setIsFormSuccess("Form submitted successfully");
        setFormStatus(true);

        // alert("Form submitted successfully!");
      } else {
        setIsFormSuccess("Form failed to submit. Please try again");
        setFormStatus(false);
      }
      // console.log("Response:", response.data);
    } catch (error) {
      console.error("Error during form submission:", error);
      setIsFormSuccess("Failed to submit the form.");
      setFormStatus(false);

      // alert("Failed to submit the form.");
    } finally {
      setFormData({
        schoolName: "",
        schoolEmail: "",
        officialPhoneNumber: "",
        schoolAddress: "",
      }); // Reset form fields
      setIsLoading(false);
      setTimeout(() => {
        setFormStatus(false);
        setIsFormSuccess("");
      }, 3000);
    }
  };

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
          <form className="space-y-4 md:w-10/12" onSubmit={handleSubmit}>
            {/* name of school field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolName" className="text-ghmGrey-500">
                Name of School
              </label>
              <input
                required
                type="text"
                placeholder="School Name"
                id="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* school email field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolEmail" className="text-ghmGrey-500">
                Official Email
              </label>
              <input
                required
                type="text"
                placeholder="School Official Email"
                id="schoolEmail"
                value={formData.schoolEmail}
                onChange={handleChange}
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* Official Phone Number field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolName" className="text-ghmGrey-500">
                Official Phone Number
              </label>
              <input
                required
                type="number"
                placeholder="080 393 29333"
                id="officialPhoneNumber"
                value={formData.officialPhoneNumber}
                onChange={handleChange}
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* school address field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="schoolAddress" className="text-ghmGrey-500">
                School Address
              </label>
              <input
                required
                type="text"
                placeholder="Physical address of the school"
                id="schoolAddress"
                value={formData.schoolAddress}
                onChange={handleChange}
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>

            {/* Form success/error message */}
            <p
              className={`${
                formStatus
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
              value={isLoading ? "Submitting" : "Submit"}
              id="submit"
              className={`px-16 py-4 ${
                isLoading ? "bg-ghmPurple-400" : "bg-ghmPurple-300"
              }  rounded-full text-white`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentPlan;

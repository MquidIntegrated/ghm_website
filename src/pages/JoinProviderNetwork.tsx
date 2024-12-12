import {useState} from "react";
import image from "../assets/png/providerNetworkForm.png";
import api from "../utils/ApiBaseUrl";

const JoinProviderNetwork = () => {
  const [isFormSuccess, setIsFormSuccess] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const [formStatus, setFormStatus] = useState<boolean>();
  const [formData, setFormData] = useState({
    hospitalName: "",
    officialEmail: "",
    officialPhoneNumber: "",
    medicalDirectorName: "",
    medicalDirectorPhoneNumber: "",
    hospitalAddress: "",
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
    // console.log(formData);

    try {
      setIsLoading(true);
      const response = await api.post("/form/provider-form", formData);

      response.data.success
        ? (setIsFormSuccess("Form submitted successfully"), setFormStatus(true))
        : (setIsFormSuccess("Form failed to submit. Please try again"),
          setFormStatus(false));
    } catch (error) {
      console.error("Error during form submission:", error);
      setIsFormSuccess("Failed to submit the form.");
      setFormStatus(false);
    } finally {
      setFormData({
        hospitalName: "",
        officialEmail: "",
        officialPhoneNumber: "",
        medicalDirectorName: "",
        medicalDirectorPhoneNumber: "",
        hospitalAddress: "",
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
      <div className="flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 lg:space-x-16 xl:space-x-28">
        {/* image */}
        <div>
          <img src={image} alt="" />
        </div>
        {/* form  */}
        <div className="flex-1">
          {" "}
          <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl max-w-xl mb-4">
            Join Our Network
          </h2>
          <p className="text-ghmGrey-700 mb-5 md:mb-5">
            Reach out to us and we will respond as soon as possible.
          </p>
          <form className="space-y-4 md:w-10/12" onSubmit={handleSubmit}>
            {/* name of hospital field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="hospitalName" className="text-ghmGrey-500">
                Name of Hospital
              </label>
              <input
                required
                type="text"
                placeholder="Hospital Name"
                id="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* official email field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="officialEmail" className="text-ghmGrey-500">
                Official Email
              </label>
              <input
                required
                type="text"
                placeholder="Official Email"
                id="officialEmail"
                value={formData.officialEmail}
                onChange={handleChange}
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* Official Phone Number field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="officialPhoneNumber" className="text-ghmGrey-500">
                Official Phone Number
              </label>
              <input
                required
                type="number"
                placeholder="080 000 0000"
                id="officialPhoneNumber"
                value={formData.officialPhoneNumber}
                onChange={handleChange}
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>
            {/* name and phone number of medical doctor */}
            <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              {/* medical doctor name field */}
              <div className="flex flex-col space-y-2 w-full">
                <label
                  htmlFor="medicalDirectorName"
                  className="text-ghmGrey-500 text-nowrap"
                >
                  Name of Medical Director
                </label>
                <input
                  required
                  type="text"
                  placeholder="MD's full name"
                  id="medicalDirectorName"
                  value={formData.medicalDirectorName}
                  onChange={handleChange}
                  className="border px-6 py-4 rounded-full border-ghmPurple-200"
                />
              </div>
              {/* representatives number field */}
              <div className="flex flex-col space-y-2 w-full">
                <label
                  htmlFor="medicalDirectorPhoneNumber"
                  className="text-ghmGrey-500"
                >
                  Phone Number of Medical Director
                </label>
                <input
                  required
                  type="number"
                  placeholder="080 000 0000"
                  id="medicalDirectorPhoneNumber"
                  value={formData.medicalDirectorPhoneNumber}
                  onChange={handleChange}
                  className="border px-6 py-4 rounded-full border-ghmPurple-200"
                />
              </div>
            </div>
            {/* office address field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="hospitalAddress" className="text-ghmGrey-500">
                Hospital Address
              </label>
              <input
                required
                type="text"
                placeholder="Physical address of the hospital"
                id="hospitalAddress"
                value={formData.hospitalAddress}
                onChange={handleChange}
                className="border px-6 py-4 rounded-full border-ghmPurple-200"
              />
            </div>

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

export default JoinProviderNetwork;

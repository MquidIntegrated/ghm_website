import {useEffect, useState} from "react";
import {useFamilyContext} from "../contexts/FamilyContext";
import {useNavigate} from "react-router-dom";
import rightArrow from "../assets/svg/rigth-arrow.svg";
import goldMini from "../assets/svg/noun-gold.svg";
import pearlMini from "../assets/svg/noun-pearl.svg";
import rubyMini from "../assets/svg/noun-ruby.svg";
import rubyPlusMini from "../assets/svg/noun-ruby-pro.svg";
import api from "../utils/ApiBaseUrl";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    familySize,
    persons,
    paymentTotal,
    fullName,
    email,
    phoneNumber,
    address,
  } = useFamilyContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (
      !persons.length ||
      paymentTotal === 0 ||
      !fullName ||
      !email ||
      !phoneNumber ||
      !address
    ) {
      navigate("/confirm-plan-details");
    }
    console.log(
      familySize,
      persons,
      paymentTotal,
      fullName,
      email,
      phoneNumber,
      address
    );
  }, [persons, paymentTotal, fullName, email, phoneNumber, address]);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/payment/payment-link", {
        familySize,
        persons,
        paymentTotal: "30",
        fullName,
        email,
        phoneNumber,
        address,
        currency: "NGN",
        redirect_url: "http://localhost:5173/payment-status",
      });

      // console.log(response);

      if (response.data?.data?.data?.link) {
        // Redirect user to the payment link
        // console.log(response.data.data.data.link);

        window.location.href = response.data.data.data.link;
      } else {
        console.log(response);

        throw new Error("Unable to generate payment link. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ghm-container py-10 md:py-20">
      {" "}
      <div className="text-center">
        <p className="text-ghmPurple-300 mb-4">Payment Details</p>
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4">
          Confirm your health plans
        </h2>
      </div>
      {/* confirm details card */}
      <div className="bg-white shadow-md max-w-4xl mx-auto p-6 rounded-lg flex flex-col gap-y-6">
        {/* number of people in family */}
        <div className="flex justify-between">
          <p>Number of People in family</p>
          <p>{familySize}</p>
        </div>
        {/* plans */}
        <div className="flex flex-col gap-y-3">
          {persons.map((person, index) => (
            <div
              key={index}
              className="p-3 bg-ghmPurple-100 rounded-lg flex flex-col space-y-3"
            >
              <div className="flex justify-between">
                <p className="text-ghmPurple-300">Plan #{index + 1}</p>
                <p className="border border-ghmPurple-300 rounded-full font-medium ghm-text-gradient-2 px-4 py-1 flex gap-x-3">
                  <img
                    src={
                      (person.plan === "Gold" && goldMini) ||
                      (person.plan === "Pearl" && pearlMini) ||
                      (person.plan === "Ruby" && rubyMini) ||
                      (person.plan === "Ruby Plus" && rubyPlusMini) ||
                      undefined
                    }
                    className="h-6 w-6"
                  />

                  {person.plan}
                </p>
              </div>

              <div className="flex justify-between">
                <p>
                  {person.relationship}{" "}
                  <span className="text-ghmPurple-300 ml-2">{person.name}</span>
                </p>
                <p className="text-ghmPurple-300">&#8358;{person.price}</p>
              </div>
            </div>
          ))}
        </div>
        {/* user form details */}
        <div className="flex flex-col gap-y-4">
          {/* full name */}
          <div className="flex flex-col md:flex-row justify-between">
            <p>Full Name</p>
            <p>{fullName}</p>
          </div>
          {/* email */}
          <div className="flex flex-col md:flex-row justify-between">
            {" "}
            <p>Email</p>
            <p>{email}</p>
          </div>
          {/* phone number */}
          <div className="flex flex-col md:flex-row justify-between">
            {" "}
            <p>Phone Number</p>
            <p>+234{phoneNumber}</p>
          </div>
          {/* address */}
          <div className="flex flex-col md:flex-row justify-between">
            {" "}
            <p>Address</p>
            <p>{address}</p>
          </div>
        </div>

        {/* payment total */}
        <div className="flex justify-between items-center">
          {" "}
          <p className="text-lg font-medium text-ghmGrey-700">Payment Total:</p>
          <p className="text-xl font-bold text-ghmBlack">
            ₦{paymentTotal.toLocaleString()}
          </p>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* agreement check box */}
        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 bg-white border-ghmPurple-200 "
          />
          <label className="ms-2 text-sm font-medium text-ghmPurple-800">
            I agree to Grooming Health's{" "}
            <a href="" className="underline hover:no-underline">
              Terms and Conditions
            </a>{" "}
            and confirm I have reviewed the{" "}
            <a href=" " className="underline hover:no-underline">
              Full Plan Details
            </a>{" "}
            list
          </label>
        </div>
      </div>
      {/* action buttons  */}
      <div className="my-6 flex w-full justify-end space-x-4 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/confirm-plan-details")}
          className="bg-ghmPurple-100 text-ghmPurple-300 px-8 py-2 rounded-full"
        >
          Back
        </button>
        <button
          onClick={handlePayment}
          disabled={loading}
          className={`${
            loading
              ? "bg-ghmPurple-200 text-white"
              : "bg-ghmPurple-300 text-white"
          } px-4 py-2 rounded-full flex items-center gap-x-2`}
        >
          {loading ? "Processing..." : "Make Payment"}{" "}
          {!loading && (
            <span>
              <img src={rightArrow} alt="Make Payment" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Checkout;

import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useFamilyContext} from "../contexts/FamilyContext";
import rightArrow from "../assets/svg/rigth-arrow.svg";
import ngFlag from "../assets/svg/ng-flag.svg";

const ConfirmPlanDetailsForm = () => {
  const navigate = useNavigate();
  const {persons, paymentTotal} = useFamilyContext();

  useEffect(() => {
    if (!persons.length || paymentTotal === 0) {
      navigate("/purchase-plan");
    }
  }, [persons, paymentTotal]);

  return (
    <div className="flex flex-col items-center py-8 px-4 max-w-4xl mx-auto">
      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full mb-8">
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-ghmGrey-500">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 px-4 py-2 w-full border rounded-full "
            />
          </div>
          <div>
            <label className="block text-sm text-ghmGrey-500">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-1 px-4 py-2 w-full border rounded-full "
            />
          </div>
          <div>
            <label className="block text-sm text-ghmGrey-500">
              Phone Number
            </label>
            <div className="relative flex items-center mt-1">
              <span className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-500">
                <img src={ngFlag} alt="" /> +234
              </span>
              <input
                type="number"
                placeholder="123 4567 890"
                className=" ps-20 px-4 py-2 w-full border border-gray-300 rounded-full"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-ghmGrey-500">
              Street Address
            </label>
            <input
              type="text"
              placeholder="Your street address"
              className="mt-1 px-4 py-2 w-full border rounded-full "
            />
          </div>
        </form>
      </div>
      {/* back and continue button  */}
      <div className="my-6 flex w-full justify-end space-x-4">
        <button
          onClick={() => navigate("/purchase-plan")}
          className="bg-ghmPurple-100 text-ghmPurple-300 px-8 py-2 rounded-full"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/checkout")}
          className="bg-ghmPurple-300 text-white px-4 py-2 rounded-full flex items-center gap-x-2"
        >
          Continue{" "}
          <span>
            <img src={rightArrow} />
          </span>
        </button>
      </div>

      {/* Summary Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-ghmGrey-500">
              <th className="px-4 py-2 text-sm font-medium">Buying For</th>
              <th className="px-4 py-2 text-sm font-medium">Relation</th>
              <th className="px-4 py-2 text-sm font-medium">Age</th>
              <th className="px-4 py-2 text-sm font-medium">Plan</th>
              <th className="px-4 py-2 text-sm font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={index} className="text-ghmGrey-700">
                <td className="px-4 py-2 ">{person.name}</td>
                <td className="px-4 py-2 ">{person.relationship}</td>
                <td className="px-4 py-2 ">{person.age}</td>
                <td className="px-4 py-2 ">{person.plan}</td>
                <td className="px-4 py-2 ">₦{person.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-between items-center w-full px-4">
        <p className="text-lg font-medium text-ghmGrey-700">Payment Total:</p>
        <p className="text-xl font-bold text-ghmBlack">
          ₦{paymentTotal.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ConfirmPlanDetailsForm;

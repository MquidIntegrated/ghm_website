import React, {useState, useEffect} from "react";
import nameIcon from "../assets/svg/userContactForm.svg";
import {useNavigate} from "react-router-dom";
// import trashIcon from "../assets/svg/trash.svg";
import rightArrow from "../assets/svg/rigth-arrow.svg";
import {useFamilyContext, PersonDetails} from "../contexts/FamilyContext";

const FamilyDetailsForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    familySize,
    persons,
    setFamilySize,
    setPersons,
    setPaymentTotal,
    setDiscountedPriceTotal,
  } = useFamilyContext();

  const familyOptions = [
    "Individual",
    "Family of 2",
    "Family of 3",
    "Family of 4",
    "Family of 5",
    "Family of 6",
  ];

  const relationshipOptions = [
    "Self",
    "Spouse",
    "Son",
    "Daughter",
    "Father",
    "Mother",
    "Sibling",
    "Grandfather",
    "Grandmother",
    "Cousin",
    "Friend",
    "Other",
  ];

  const planOptions = ["Gold", "Pearl", "Ruby", "Ruby Plus"];

  const planPrices: {[key: string]: number} = {
    Gold: 1062500,
    Pearl: 850000,
    Ruby: 650000,
    "Ruby Plus": 1200000,
  };

  const [errors, setErrors] = useState<{[index: number]: boolean}>({});

  const updatePerson = (
    index: number,
    key: keyof PersonDetails,
    value: any
  ) => {
    const updatedPersons = [...persons];
    updatedPersons[index] = {
      ...updatedPersons[index],
      [key]: value,
      ...(key === "plan" && {price: planPrices[value] || 0}), // Automatically update price
    };
    setPersons(updatedPersons);

    // Clear error if the field is valid
    if (errors[index]) {
      const newErrors = {...errors};
      delete newErrors[index];
      setErrors(newErrors);
    }
  };

  // const deletePerson = (index: number) => {
  //   const updatedPersons = persons.filter((_, i) => i !== index);
  //   setPersons(updatedPersons);
  // };

  useEffect(() => {
    // console.log(discountedPriceTotal);

    const newSize = parseInt(familySize.split(" ")[2] || "1", 10);
    const updatedPersons = [...persons];
    while (updatedPersons.length < newSize) {
      updatedPersons.push({
        name: "",
        relationship: "",
        age: 0,
        plan: "",
        price: 0,
      });
    }
    while (updatedPersons.length > newSize) {
      updatedPersons.pop();
    }
    setPersons(updatedPersons);
  }, [familySize]);

  const calculateTotal = () => {
    let total = persons.reduce((sum, person) => sum + person.price, 0);
    let discountPrice = 0;
    // Apply discount if applicable
    if (
      (familySize === "Family of 5" || familySize === "Family of 6") &&
      persons.every(
        person => person.plan === persons[0].plan && person.plan !== ""
      )
    ) {
      discountPrice = total * 0.9; // Apply 10% discount
    } else {
      discountPrice = total; // No discount
    }

    return {
      total,
      discountPrice,
    };
  };
  const validateInputs = () => {
    const newErrors: {[index: number]: boolean} = {};
    persons.forEach((person, index) => {
      if (
        !person.name ||
        !person.relationship ||
        person.age <= 0 ||
        isNaN(person.age) ||
        !person.plan
      ) {
        newErrors[index] = true; // Mark error for this person
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleContinue = () => {
    if (validateInputs()) {
      const {total, discountPrice} = calculateTotal(); // Calculate total payment
      setPaymentTotal(total); // Store the total payment in the context
      setDiscountedPriceTotal(discountPrice);
      navigate("/confirm-plan-details");
      console.log("Submitted Data:", {persons, total});
      // Proceed to the next step
    } else {
      alert("Please fill all the required fields!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="shadow-md p-6 rounded-lg bg-white">
        {/* family size */}
        <div className="flex flex-col gap-y-1 items-center">
          <label className="text-sm text-ghmGrey-500">Family Size</label>
          <select
            value={familySize}
            onChange={e => setFamilySize(e.target.value)}
            className="mb-4 px-6 py-2 md:w-4/12  border rounded-full "
          >
            {familyOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {persons.map((person, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4"
          >
            {/* buying for  */}
            <div>
              <label className="text-sm text-ghmGrey-500">Buying For</label>
              <div className="relative">
                {" "}
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img src={nameIcon} alt="" />
                </div>
                <input
                  type="text"
                  placeholder={`Person ${index + 1}`}
                  value={person.name}
                  onChange={e => updatePerson(index, "name", e.target.value)}
                  className={`p-2 ps-12  border rounded-full w-full ${
                    errors[index] && !person.name ? "border-red-500" : ""
                  }`}
                />
              </div>
            </div>

            {/* choose relationship */}
            <div>
              <label className="text-sm text-ghmGrey-500">Relationship</label>
              <select
                value={person.relationship}
                onChange={e =>
                  updatePerson(index, "relationship", e.target.value)
                }
                className={`py-2 px-3 border rounded-full w-full ${
                  errors[index] && !person.relationship ? "border-red-500" : ""
                }`}
              >
                <option value="">Choose relationship</option>
                {relationshipOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* age  */}
            <div>
              <label className="text-sm text-ghmGrey-500">Age</label>
              <input
                type="number"
                value={person.age}
                onChange={e =>
                  updatePerson(index, "age", parseInt(e.target.value, 10))
                }
                className={`p-2 border rounded-full w-full ${
                  errors[index] && person.age <= 0 ? "border-red-500" : ""
                }`}
                min={0}
              />
            </div>

            {/* plan */}
            <div>
              <label className="text-sm text-ghmGrey-500">Plan</label>
              <select
                value={person.plan}
                onChange={e => updatePerson(index, "plan", e.target.value)}
                className={`py-2 px-3 border rounded-full w-full ${
                  errors[index] && !person.plan ? "border-red-500" : ""
                }`}
              >
                <option value="">Choose a plan</option>
                {planOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* price  */}
            <div>
              <label className="text-sm text-ghmGrey-500">Price</label>
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    &#8358;
                  </div>
                  <input
                    type="number"
                    value={person.price}
                    readOnly
                    className="p-2 ps-7 border rounded-full w-full bg-gray-100"
                  />
                </div>

                {/* <button
                onClick={() => deletePerson(index)}
                className="text-red-500 ml-2"
              >
                <img src={trashIcon} alt="" />
              </button> */}
              </div>
            </div>
            {/* Error Message */}
            {errors[index] && (
              <p className="text-red-500 text-sm mt-2 text-nowrap">
                Please fill all fields for this person
              </p>
            )}
          </div>
        ))}
      </div>
      {/* payment total  */}
      <div className="mt-4 flex items-center justify-between max-w-4xl">
        <p className="text-lg font-semibold">Payment Total:</p>
        <p className="text-lg font-semibold">
          ₦ {calculateTotal().total.toLocaleString()}
        </p>
      </div>
      {/* discounted price total */}
      {calculateTotal().total !== calculateTotal().discountPrice &&
        calculateTotal().discountPrice > 0 && (
          <div className="mt-4 flex items-center justify-between max-w-4xl">
            <p className="text-lg font-semibold">Discounted Price:</p>
            <p className="text-lg font-semibold">
              <p> ₦ {calculateTotal().discountPrice.toLocaleString()}</p>
            </p>
          </div>
        )}

      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-ghmPurple-100 text-ghmPurple-300 px-8 py-2 rounded-full">
          Back
        </button>
        <button
          onClick={handleContinue}
          className="bg-ghmPurple-300 text-white px-4 py-2 rounded-full flex items-center gap-x-2"
        >
          Continue{" "}
          <span>
            <img src={rightArrow} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default FamilyDetailsForm;

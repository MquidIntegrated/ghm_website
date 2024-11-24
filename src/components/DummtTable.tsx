import React from "react";
import ngSvg from "../assets/svg/Nigeria (NG).svg";

const IndividualPlansTable = () => {
  const plans = [
    {
      name: "GOLD",
      hospitalCategory: "D",
      totalBenefit: "₦1,062,500",
      premium: "₦75,600",
    },
    {
      name: "PEARL",
      hospitalCategory: "C-D",
      totalBenefit: "₦1,218,500",
      premium: "₦125,600",
    },
    {
      name: "RUBY",
      hospitalCategory: "B-D",
      totalBenefit: "₦2,440,000",
      premium: "₦205,600",
    },
    {
      name: "RUBY PLUS",
      hospitalCategory: "A-D",
      totalBenefit: "₦4,560,000",
      premium: "₦457,600",
    },
  ];

  const renderCheckmark = () => (
    <svg
      className="w-5 h-5 text-purple-500"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
  );

  return (
    <div className="w-full text-ghmGrey-500 p-4">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-ghmGrey-400">
              <th className="p-4 text-left font-medium border-b">
                BENEFIT SUB-CATEGORIES
              </th>
              {plans.map(plan => (
                <th
                  key={plan.name}
                  className="p-4 text-left  font-medium border-b"
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 border-b ">Region of Cover</td>
              {plans.map(plan => (
                <td key={plan.name} className="p-4 border-b">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">
                      <img src={ngSvg} alt="" />
                    </span>
                    <span>Nigeria</span>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b ">Hospital Category</td>
              {plans.map(plan => (
                <td key={plan.name} className="p-4 border-b">
                  {plan.hospitalCategory}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b ">Total Plan Benefit</td>
              {plans.map(plan => (
                <td key={plan.name} className="p-4 border-b">
                  {plan.totalBenefit}
                </td>
              ))}
            </tr>
            <tr>
              <td colSpan={5} className="p-4 border-b bg-gray-50 font-medium">
                PREMIUM
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b ">Premium per person / annum</td>
              {plans.map(plan => (
                <td key={plan.name} className="p-4 border-b">
                  {plan.premium}
                </td>
              ))}
            </tr>
            <tr>
              <td colSpan={5} className="p-4 border-b bg-gray-50 font-medium">
                AGE LIMIT
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b ">Principal / Spouse</td>
              <td colSpan={4} className="p-4 border-b">
                18 - 65 YEARS
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b">Dependents</td>
              <td colSpan={4} className="p-4 border-b">
                0 - 18 YEARS
              </td>
            </tr>
            <tr>
              <td className="p-4 border-b ">OUT-PATIENT BENEFITS</td>
              <td className="p-4 border-b">UP TO LIMIT OF ₦250,000</td>
              <td className="p-4 border-b">UP TO LIMIT OF ₦300,000</td>
              <td className="p-4 border-b">UP TO LIMIT OF ₦400,000</td>
              <td className="p-4 border-b">UP TO LIMIT OF ₦500,000</td>
            </tr>
            <tr>
              <td className="p-4 border-b ">
                General Consultation, Specialist Consultation, Out Patient Care
                including Laboratory Investigations, Basic Imaging (X-Ray & USS)
              </td>
              {plans.map(plan => (
                <td key={plan.name} className="p-4 border-b text-center">
                  {renderCheckmark()}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b ">
                Prescribed medications and drugs
              </td>
              {plans.map(plan => (
                <td key={plan.name} className="p-4 border-b text-center">
                  {renderCheckmark()}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b ">IN-PATIENT BENEFITS</td>
              <td className="p-4 border-b">UP TO LIMIT OF ₦350,000</td>
              <td className="p-4 border-b">UP TO LIMIT OF ₦500,000</td>
              <td className="p-4 border-b">UP TO LIMIT OF ₦1,000,000</td>
              <td className="p-4 border-b">UP TO LIMIT OF ₦2,000,000</td>
            </tr>
            <tr>
              <td className="p-4 border-b ">Admission & Feeding</td>
              <td className="p-4 border-b">General Ward</td>
              <td className="p-4 border-b">Semi private Ward</td>
              <td className="p-4 border-b">Private Ward</td>
              <td className="p-4 border-b">Private Ward</td>
            </tr>
            <tr>
              <td className="p-4 border-b ">
                Laboratory investigations, Nursing Care, Dressing & Prescribed
                Medications
              </td>
              {plans.map(plan => (
                <td key={plan.name} className="p-4 border-b text-center">
                  {renderCheckmark()}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b ">Intensive care services</td>
              {plans.map(plan => (
                <td key={plan.name} className="p-4 border-b text-center">
                  {renderCheckmark()}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 border-b ">
                MAJOR DISEASE CONDITION BENEFITS (AFTER 6 MONTHS WAITING PERIOD)
              </td>
              <td colSpan={4} className="p-4 border-b"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndividualPlansTable;

import React, {useState, useEffect} from "react";
import filter from "../assets/svg/filter.svg";
import {div} from "framer-motion/client";

interface Provider {
  name: string;
  address: string;
  services: string[];
  state: string;
  city: string;
}

interface ProvidersTableProps {
  filters: {
    state: string;
    city: string;
    services: string[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      state: string;
      city: string;
      services: string[];
    }>
  >;
  onToggleFilterModal: () => void;
}

const ProvidersTable: React.FC<ProvidersTableProps> = ({
  filters,
  setFilters,
  onToggleFilterModal,
}) => {
  const dummyData: Provider[] = [
    {
      name: "Simeone Specialist Hospital",
      address: "2 /4 Abagana Street, Aba",
      services: ["Diagnostics Services", "General Surgery"],
      state: "Abia",
      city: "Osisioma",
    },
    {
      name: "God's Grace Diagnostics LTD",
      address: "30 Abiriba St, Umuahia",
      services: ["Optical", "Diagnostics Services"],
      state: "Abia",
      city: "Umuahia North",
    },
    {
      name: "Extravagant Grace Children's Clinic",
      address: "13 Kaduna Street, Umuahia",
      services: ["Optical", "Diagnostics Services"],
      state: "Abia",
      city: "Aba North",
    },
    {
      name: "Lagos Central Hospital",
      address: "10 Marina Road, Lagos",
      services: ["General Surgery", "Cardiology"],
      state: "Lagos",
      city: "Ikeja",
    },
    {
      name: "Victoria Medical Center",
      address: "25 Ajose Street, Victoria Island",
      services: ["Diagnostics Services", "Optical"],
      state: "Lagos",
      city: "Victoria Island",
    },
    {
      name: "Simeone Specialist Hospital",
      address: "2 /4 Abagana Street, Aba",
      services: ["Diagnostics Services", "General Surgery"],
      state: "Abia",
      city: "Osisioma",
    },
    {
      name: "God's Grace Diagnostics LTD",
      address: "30 Abiriba St, Umuahia",
      services: ["Optical", "Diagnostics Services"],
      state: "Abia",
      city: "Umuahia North",
    },
    {
      name: "Extravagant Grace Children's Clinic",
      address: "13 Kaduna Street, Umuahia",
      services: ["Optical", "Diagnostics Services"],
      state: "Abia",
      city: "Aba North",
    },
    {
      name: "Lagos Central Hospital",
      address: "10 Marina Road, Lagos",
      services: ["General Surgery", "Cardiology"],
      state: "Lagos",
      city: "Ikeja",
    },
    {
      name: "Victoria Medical Center",
      address: "25 Ajose Street, Victoria Island",
      services: ["Diagnostics Services", "Optical"],
      state: "Lagos",
      city: "Victoria Island",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Extract unique states and cities based on dummy data
  const states = Array.from(new Set(dummyData.map(provider => provider.state)));

  const citiesByState: Record<string, string[]> = dummyData.reduce(
    (acc, provider) => {
      if (!acc[provider.state]) {
        acc[provider.state] = [];
      }
      if (!acc[provider.state].includes(provider.city)) {
        acc[provider.state].push(provider.city);
      }
      return acc;
    },
    {} as Record<string, string[]>
  );

  // Filter data based on selected filters
  const filteredData = dummyData.filter(provider => {
    return (
      (!filters.state || provider.state === filters.state) &&
      (!filters.city || provider.city === filters.city) &&
      (filters.services.length === 0 ||
        filters.services.some(service => provider.services.includes(service)))
    );
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Reset city dropdown when state changes
  const handleStateChange = (state: string) => {
    setFilters(prev => ({
      ...prev,
      state,
      city: "", // Reset city when state changes
    }));
  };

  return (
    <div className="">
      {/* Filter Dropdowns */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-center gap-4 mb-4 text-ghmPurple-400">
        {/* State Dropdown */}
        <div className="flex flex-col gap-y-1 ">
          <label htmlFor="select state" className="text-ghmGrey-500 text-sm">
            State
          </label>
          <select
            className="border border-ghmPurple-200 rounded-full py-2 pl-2 pr-72 "
            value={filters.state}
            onChange={e => handleStateChange(e.target.value)}
          >
            <option value="">Select State</option>
            {states.map(state => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* City Dropdown */}
        <div className="flex flex-col gap-y-1 ">
          <label htmlFor="select city" className="text-ghmGrey-500 text-sm">
            City
          </label>
          <select
            className="border border-ghmPurple-200 rounded-full py-2 pl-2 pr-72"
            value={filters.city}
            onChange={e =>
              setFilters(prev => ({...prev, city: e.target.value}))
            }
            disabled={!filters.state} // Disable if no state is selected
          >
            <option value="">Select City</option>
            {filters.state &&
              citiesByState[filters.state].map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        <button
          className="border border-ghmPurple-200 rounded-full px-4 py-2 flex items-center gap-x-2 w-fit"
          onClick={onToggleFilterModal}
        >
          <span>
            <img src={filter} alt="filter icon" />
          </span>{" "}
          Filter
        </button>
      </div>

      <div className="overflow-x-auto">
        {/* Table */}
        <table className="w-full text-left table-auto overflow-scroll">
          <thead className="bg-ghmPurple-100 text-ghmPurple-300">
            <tr>
              <th className=" px-4 py-2">Provider Name</th>
              <th className=" px-4 py-2">Address</th>
              <th className=" px-4 py-2">Services</th>
              <th className=" px-4 py-2">State</th>
              <th className=" px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((provider, index) => (
              <tr key={index} className="text-ghmGrey-700">
                <td className="border-b border-gray-200 px-4 py-4">
                  {provider.name}
                </td>
                <td className="border-b border-gray-200 px-4 py-4">
                  {provider.address}
                </td>
                <td className="border-b border-gray-200 px-4 py-4">
                  {provider.services.map(service => (
                    <div className="bg-ghmPurple-100 text-ghmPurple-300 w-fit px-4 py-2 rounded-full m-1">
                      {service}
                    </div>
                  ))}
                </td>
                <td className="border-b border-gray-200 px-4 py-4">
                  {provider.state}
                </td>
                <td className="border-b border-gray-200 px-4 py-4">
                  {provider.city}
                </td>
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  No Providers Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`border border-ghmPurple-200 rounded-full px-4 py-2 ${
            currentPage === 1 ? "text-gray-400" : "text-ghmPurple-300"
          }`}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </div>
        <button
          className={`border border-ghmPurple-200 rounded-full px-4 py-2 ${
            currentPage === Math.ceil(filteredData.length / rowsPerPage)
              ? "text-gray-400"
              : "text-ghmPurple-300"
          }`}
          disabled={
            currentPage === Math.ceil(filteredData.length / rowsPerPage)
          }
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProvidersTable;

import React, {useState} from "react";
import filter from "../assets/svg/filter.svg";

interface Provider {
  state: string;
  lga: string;
  name: string;
  address: string;
  plans: string;
  services: string[];
}

interface ProvidersTableProps {
  providers: Provider[];
  filters: {
    state: string;
    lga: string;
    services: string[];
    plans: string[];
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      state: string;
      lga: string;
      services: string[];
      plans: string[];
    }>
  >;
  onToggleFilterModal: () => void;
}

const ProvidersTable: React.FC<ProvidersTableProps> = ({
  providers,
  filters,
  setFilters,
  onToggleFilterModal,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Extract unique states and lgas based on dummy data
  const states = Array.from(new Set(providers.map(provider => provider.state)));

  const lgaByState: Record<string, string[]> = providers.reduce(
    (acc, provider) => {
      if (!acc[provider.state]) {
        acc[provider.state] = [];
      }
      if (!acc[provider.state].includes(provider.lga)) {
        acc[provider.state].push(provider.lga);
      }
      return acc;
    },
    {} as Record<string, string[]>
  );

  // Filter data based on selected filters
  const filteredData = providers.filter(provider => {
    return (
      (!filters.state || provider.state === filters.state) &&
      (!filters.lga || provider.lga === filters.lga) &&
      (filters.services.length === 0 ||
        filters.services.some(service =>
          provider.services.some(provService =>
            provService.toLowerCase().includes(service.toLowerCase())
          )
        )) &&
      (filters.plans.length === 0 || filters.plans.includes(provider.plans))
    );
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Reset lga dropdown when state changes
  const handleStateChange = (state: string) => {
    setFilters(prev => ({
      ...prev,
      state,
      lga: "", // Reset lga when state changes
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

        {/* lga Dropdown */}
        <div className="flex flex-col gap-y-1 ">
          <label htmlFor="select lga" className="text-ghmGrey-500 text-sm">
            LGA
          </label>
          <select
            className="border border-ghmPurple-200 rounded-full py-2 pl-2 pr-72"
            value={filters.lga}
            onChange={e => setFilters(prev => ({...prev, lga: e.target.value}))}
            disabled={!filters.state} // Disable if no state is selected
          >
            <option value="">Select Lga</option>
            {filters.state &&
              lgaByState[filters.state].map(lga => (
                <option key={lga} value={lga}>
                  {lga}
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
              <th className="px-4 py-2">Plans</th>
              <th className=" px-4 py-2">Services</th>
              <th className=" px-4 py-2">State</th>
              <th className=" px-4 py-2">LGA</th>
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
                  {provider.plans}
                </td>
                <td className="border-b border-gray-200 px-4 py-4">
                  {provider.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-ghmPurple-100 text-ghmPurple-300 w-fit px-4 py-2 rounded-full m-1"
                    >
                      {service}
                    </div>
                  ))}
                </td>
                <td className="border-b border-gray-200 px-4 py-4">
                  {provider.state}
                </td>
                <td className="border-b border-gray-200 px-4 py-4">
                  {provider.lga}
                </td>
              </tr>
            ))}
            {paginatedData.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`border border-ghmPurple-200 rounded-full font-semibold px-4 py-2 ${
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
          className={`border border-ghmPurple-200 rounded-full font-semibold px-4 py-2 ${
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

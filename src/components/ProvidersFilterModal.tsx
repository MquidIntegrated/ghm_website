import React, {useState, useMemo} from "react";

interface Provider {
  name: string;
  address: string;
  services: string[];
  state: string;
  city: string;
}

interface ProvidersFilterModalProps {
  currentFilters: {
    state: string;
    city: string;
    services: string[];
  };
  onClose: () => void;
  onApply: (filters: any) => void;
}

const ProvidersFilterModal: React.FC<ProvidersFilterModalProps> = ({
  currentFilters,
  onClose,
  onApply,
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
  ];

  // Extract unique states
  const states = Array.from(new Set(dummyData.map(provider => provider.state)));

  // Group cities and services by state
  const citiesByState: Record<string, string[]> = useMemo(() => {
    return dummyData.reduce((acc, provider) => {
      if (!acc[provider.state]) {
        acc[provider.state] = [];
      }
      if (!acc[provider.state].includes(provider.city)) {
        acc[provider.state].push(provider.city);
      }
      return acc;
    }, {} as Record<string, string[]>);
  }, [dummyData]);

  const servicesByState: Record<string, string[]> = useMemo(() => {
    return dummyData.reduce((acc, provider) => {
      if (!acc[provider.state]) {
        acc[provider.state] = [];
      }
      provider.services.forEach(service => {
        if (!acc[provider.state].includes(service)) {
          acc[provider.state].push(service);
        }
      });
      return acc;
    }, {} as Record<string, string[]>);
  }, [dummyData]);

  const allServices = Array.from(
    new Set(dummyData.flatMap(provider => provider.services))
  );

  const [filters, setFilters] = useState(currentFilters);

  const handleServiceToggle = (service: string) => {
    setFilters(prevFilters => {
      const newServices = prevFilters.services.includes(service)
        ? prevFilters.services.filter(s => s !== service)
        : [...prevFilters.services, service];
      return {...prevFilters, services: newServices};
    });
  };

  const handleStateChange = (state: string) => {
    setFilters(prev => ({
      ...prev,
      state,
      city: "", // Reset city when state changes
      services: [], // Reset services when state changes
    }));
  };

  const availableCities = filters.state ? citiesByState[filters.state] : [];
  const availableServices = filters.state
    ? servicesByState[filters.state]
    : allServices;

  const handleReset = () => {
    setFilters({
      state: "",
      city: "",
      services: [],
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-10/12 md:w-1/2 relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Providers Filter</h2>

        {/* State and City Filters */}
        <div className="flex gap-4 mb-4 text-ghmPurple-400">
          {/* select state */}
          <div className="w-full flex flex-col gap-y-1 ">
            <label htmlFor="select state" className="text-ghmGrey-500">
              State
            </label>
            <select
              className="border border-ghmPurple-200 rounded-full p-2 w-full"
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
          {/* select city  */}
          <div className="w-full flex flex-col gap-y-1 ">
            <label htmlFor="select city" className="text-ghmGrey-500 ">
              City
            </label>
            <select
              className="border border-ghmPurple-200 rounded-full p-2 w-full"
              value={filters.city}
              onChange={e => setFilters({...filters, city: e.target.value})}
              disabled={!filters.state} // Disable if no state is selected
            >
              <option value="">Select City</option>
              {availableCities.map(city => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services */}
        <div className="mb-4">
          <h3 className=" text-ghmGrey-500 ">Services</h3>
          <div className="flex gap-2 flex-wrap">
            {availableServices.map(service => (
              <button
                key={service}
                className={`px-4 py-2  rounded-full ${
                  filters.services.includes(service)
                    ? "bg-ghmPurple-300 text-white"
                    : "bg-ghmPurple-100 text-ghmPurple-300"
                }`}
                onClick={() => handleServiceToggle(service)}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:justify-end gap-4">
          <button
            className=" px-16 py-2 border border-ghmPurple-200 rounded-full text-ghmPurple-300"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-ghmPurple-300 text-white px-16 py-2 rounded-full text-nowrap"
            onClick={() => onApply(filters)}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProvidersFilterModal;

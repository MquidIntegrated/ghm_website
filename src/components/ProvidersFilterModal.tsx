import React, {useState, useMemo} from "react";

interface Provider {
  state: string;
  lga: string;
  name: string;
  address: string;
  plans: string;
  services: string[];
}

interface ProvidersFilterModalProps {
  providers: Provider[];
  currentFilters: {
    state: string;
    lga: string;
    services: string[];
  };
  onClose: () => void;
  onApply: (filters: any) => void;
}

const ProvidersFilterModal: React.FC<ProvidersFilterModalProps> = ({
  providers,
  currentFilters,
  onClose,
  onApply,
}) => {
  // Extract unique states
  const states = useMemo(
    () => Array.from(new Set(providers.map(provider => provider.state))),
    [providers]
  );

  // Group cities and services by state
  const lgasByState: Record<string, string[]> = useMemo(() => {
    return providers.reduce((acc, provider) => {
      if (!acc[provider.state]) {
        acc[provider.state] = [];
      }
      if (!acc[provider.state].includes(provider.lga)) {
        acc[provider.state].push(provider.lga);
      }
      return acc;
    }, {} as Record<string, string[]>);
  }, [providers]);

  const servicesByState: Record<string, string[]> = useMemo(() => {
    return providers.reduce((acc, provider) => {
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
  }, [providers]);

  const allServices = useMemo(
    () => Array.from(new Set(providers.flatMap(provider => provider.services))),
    [providers]
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
      lga: "", // Reset lga when state changes
      services: [], // Reset services when state changes
    }));
  };

  const availableCities = filters.state ? lgasByState[filters.state] : [];
  const availableServices = filters.state
    ? servicesByState[filters.state]
    : allServices;

  const handleReset = () => {
    setFilters({
      state: "",
      lga: "",
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

        {/* State and lga Filters */}
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
          {/* select LGA  */}
          <div className="w-full flex flex-col gap-y-1 ">
            <label htmlFor="select lga" className="text-ghmGrey-500 ">
              LGA
            </label>
            <select
              className="border border-ghmPurple-200 rounded-full p-2 w-full"
              value={filters.lga}
              onChange={e => setFilters({...filters, lga: e.target.value})}
              disabled={!filters.state} // Disable if no state is selected
            >
              <option value="">Select LGA</option>
              {availableCities.map(lga => (
                <option key={lga} value={lga}>
                  {lga}
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

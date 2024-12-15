import {useState, useEffect} from "react";
import ProvidersTable from "../components/ProvidersTable";
import ProvidersFilterModal from "../components/ProvidersFilterModal";

interface Provider {
  state: string;
  lga: string;
  name: string;
  address: string;
  plans: string;
  services: string[];
}

const ProvidersList = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [filters, setFilters] = useState({
    state: "",
    lga: "",
    services: [] as string[],
  });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  useEffect(() => {
    const fetchProvidersData = async () => {
      const url = import.meta.env.VITE_GOOGLESHEET_URL;

      try {
        const response = await fetch(url);
        const result = await response.json();

        // Transform raw data into Provider objects, skipping the header row
        const transformedProviders: Provider[] = result
          .slice(1)
          .map((row: any) => ({
            state: row[0],
            lga: row[1],
            name: row[2],
            address: row[3],
            plans: row[4],
            services: row[5].split(",").map((service: any) => service.trim()),
          }));

        setProviders(transformedProviders);
      } catch (error) {
        console.error("Error fetching CSV:", error);
      }
    };

    fetchProvidersData();
  }, []);

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const applyFilters = (newFilters: any) => {
    setFilters(newFilters);
    setIsFilterModalOpen(false);
  };

  return (
    <div className="ghm-container py-10 md:py-20">
      <div className="text-center">
        <h2 className="text-ghmBlack font-semibold text-3xl md:text-4xl mb-4">
          Provider List
        </h2>
        <p className="text-ghmGrey-500 mb-5 md:mb-10">
          Browse our list of affiliated providers and take advantage of the best
          health care plans near you.
        </p>
      </div>

      <ProvidersTable
        providers={providers}
        filters={filters}
        setFilters={setFilters}
        onToggleFilterModal={toggleFilterModal}
      />
      {isFilterModalOpen && (
        <ProvidersFilterModal
          providers={providers}
          currentFilters={filters}
          onClose={toggleFilterModal}
          onApply={applyFilters}
        />
      )}
    </div>
  );
};

export default ProvidersList;

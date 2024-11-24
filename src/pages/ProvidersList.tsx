import React, {useState} from "react";
import ProvidersTable from "../components/ProvidersTable";
import ProvidersFilterModal from "../components/ProvidersFilterModal";

const ProvidersList = () => {
  const [filters, setFilters] = useState({
    state: "",
    city: "",
    services: [] as string[],
  });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

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
        filters={filters}
        setFilters={setFilters}
        onToggleFilterModal={toggleFilterModal}
      />
      {isFilterModalOpen && (
        <ProvidersFilterModal
          currentFilters={filters}
          onClose={toggleFilterModal}
          onApply={applyFilters}
        />
      )}
    </div>
  );
};

export default ProvidersList;

import React, { useState } from "react";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";

const ProductListingPage = () => {
  const [currentFilters, setCurrentFilters] = useState({
    brand: [],
    category: [],
    gender: [],
    condition: ''
  });

  const handleFilterChange = (filterName, value, isChecked, type) => {
    setCurrentFilters((prev) => {
      if (type === 'checkbox') {
        const arr = prev[filterName];
        return {
          ...prev,
          [filterName]: isChecked
            ? [...arr, value]
            : arr.filter((v) => v !== value)
        };
      } else if (type === 'radio') {
        return {
          ...prev,
          [filterName]: value
        };
      }
      return prev;
    });
  };

  return (
    
    <div className="flex min-h-screen bg-gray-50">
  {/* Sidebar de filtros */}


  
  <aside
    className="
   
    top-[200px]
    left-[100px]
    bg-white
    rounded
    shadow-sm
    p-[30px]
    flex
    flex-col
    gap-[20px]
    w-[308px]
 
    "
  >
    <FilterGroup
      onFilterChange={handleFilterChange}
      currentFilters={currentFilters}
    />
  </aside>

  {/* Conteúdo principal */}
  <main className="flex-1">
    <ProductListing filters={currentFilters} />
  </main>
</div>
  );
};

export default ProductListingPage;
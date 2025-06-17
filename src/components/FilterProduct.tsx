import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FilterProduct: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('mais relevantes');
  const defaultText = 'Ordenar por:';

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative inline-block w-[295px] md:w-[310px]">
      <select
        className="absolute top-0 left-0 w-full h-full opacity-0 z-10 cursor-pointer"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="mais relevantes">mais relevantes</option>
        <option value="menor preço">menor preço</option>
        <option value="maior preço">maior preço</option>
      </select>
      <div className="flex justify-normal items-center py-3 px-3 border border-dark-gray-2 rounded-sm pointer-events-none">
        <span className="pr-1 font-bold text-base text-dark-gray-2">{defaultText}</span>
        <span className="text-base text-dark-gray-2 pr-10">{selectedOption}</span>
        <FaChevronDown className="ml-auto text-dark-gray2" />
      </div>
    </div>
  );
};

export default FilterProduct;

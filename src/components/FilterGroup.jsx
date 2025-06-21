// src/components/FilterPanel/FilterPanel.jsx
import React from 'react';
import '../styles/FilterGroup.css';

const FilterGroup = ({ onFilterChange, currentFilters }) => {
  const filterOptions = {
    brand: [
      { value: 'Nike', label: 'Nike' },
      { value: 'Adidas', label: 'Adidas' },
      { value: 'Puma', label: 'Puma' },
      { value: 'Balenciaga', label: 'Balenciaga' }
    ],
    category: [
      { value: 'corrida', label: 'Corrida' },
      { value: 'casual', label: 'Casual' },
      { value: 'utilitario', label: 'Utilitário' },
      { value: 'esporte', label: 'Esporte' }
    ],
    gender: [
      { value: 'masculino', label: 'Masculino' },
      { value: 'feminino', label: 'Feminino' },
      { value: 'unissex', label: 'Unissex' }
    ],
    condition: [
      { value: 'novo', label: 'Novo' },
      { value: 'usado', label: 'Usado' }
    ]
  };

  const handleCheckboxChange = (filterName, value, isChecked) => {
    onFilterChange(filterName, value, isChecked, 'checkbox');
  };

  const handleRadioChange = (filterName, value) => {
    onFilterChange(filterName, value, true, 'radio');
  };

  const renderCheckboxGroup = (filterName, title, options) => (
    <div className="filter-group">
      <h3 className="filter-title">{title}</h3>
      <div className="filter-options">
        {options.map(option => (
          <label key={option.value} className="filter-option">
            <input
              type="checkbox"
              className="filter-checkbox"
              checked={currentFilters[filterName].includes(option.value)}
              onChange={(e) => handleCheckboxChange(filterName, option.value, e.target.checked)}
            />
            <span className="filter-label">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const renderRadioGroup = (filterName, title, options) => (
    <div className="filter-group">
      <h3 className="filter-title">{title}</h3>
      <div className="filter-options">
        {options.map(option => (
          <label key={option.value} className="filter-option">
            <input
              type="radio"
              name={filterName}
              className="filter-radio"
              checked={currentFilters[filterName] === option.value}
              onChange={() => handleRadioChange(filterName, option.value)}
            />
            <span className="filter-label">{option.label}</span>
          </label>
        ))}
        <label className="filter-option">
          <input
            type="radio"
            name={filterName}
            className="filter-radio bg-primary"
            checked={currentFilters[filterName] === ''}
            onChange={() => handleRadioChange(filterName, '')}
          />
          <span className="filter-label">Todas</span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="filter-panel">
      <span>Filtra por</span>
     <div className="w-full h-[2px] bg-gray-200 rounded my-4"></div>
      {renderCheckboxGroup('brand', 'Marca', filterOptions.brand)}
      {renderCheckboxGroup('category', 'Categoria', filterOptions.category)}
      {renderCheckboxGroup('gender', 'Gênero', filterOptions.gender)}
      {renderRadioGroup('condition', 'Condição', filterOptions.condition)}
    </div>
  );
};
export default FilterGroup; 

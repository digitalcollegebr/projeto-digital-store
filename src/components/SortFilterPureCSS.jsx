import React from "react";

const SortFilterPureCSS = ({ label, options, defaultValue, onSelect }) => (
  <div className="flex items-center gap-2">
    <label className="text-sm font-medium text-gray-700">{label}:</label>
    <select
      value={defaultValue}
      onChange={(e) => onSelect(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </div>
);

export default SortFilterPureCSS;
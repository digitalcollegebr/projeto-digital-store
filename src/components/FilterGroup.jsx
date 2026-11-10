export default function FilterGroup({title, inputType = 'radio', options, value, onChange}) {
  const isCheckbox = inputType === 'checkbox';
  const selectedValues = isCheckbox ? (Array.isArray(value) ? value : value ? [value] : []) : [];

  function handleChange(optionValue) {
    if (!onChange) return;
    if (!isCheckbox) {
      onChange(optionValue);
      return;
    }
    onChange(selectedValues.includes(optionValue)
      ? selectedValues.filter(item => item !== optionValue)
      : [...selectedValues, optionValue]);
  }

  return <fieldset className="filter-group"><legend>{title}</legend>
    {options.map(option => {
      const optionValue = option.value ?? option.text;
      const checked = isCheckbox ? selectedValues.includes(optionValue) : value === optionValue;
      return <label key={optionValue} className="filter-option">
        <input type={inputType} name={title} value={optionValue} checked={checked} onChange={() => handleChange(optionValue)} />
        <span>{option.text}</span>
      </label>;
    })}
  </fieldset>;
}

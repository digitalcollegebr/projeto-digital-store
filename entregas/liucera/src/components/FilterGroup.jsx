export default function FilterGroup({
  title,
  inputType = 'checkbox',
  options = [],
  name,
  selectedValues = [],
  onChange,
}) {
  const selected = Array.isArray(selectedValues)
    ? selectedValues
    : [selectedValues].filter(Boolean);

  return (
    <fieldset className="filter-group">
      <legend>{title}</legend>
      <div className="filter-group__options">
        {options.map((option) => {
          const value = option.value ?? option.text;
          const checked = selected.includes(value);
          const inputId = (name || title) + '-' + value;

          return (
            <label className="filter-option" htmlFor={inputId} key={value}>
              <input
                id={inputId}
                type={inputType}
                name={name || title}
                value={value}
                checked={checked}
                onChange={(event) => onChange?.(value, event.target.checked)}
              />
              <span>{option.text}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

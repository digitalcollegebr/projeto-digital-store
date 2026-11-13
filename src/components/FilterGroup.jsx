// Grupo de filtros (checkbox ou rádio) da página de listagem
function FilterGroup({
  title,
  inputType,
  options,
  selected = [],
  onChange,
  name,
}) {
  const groupName = name || title.toLowerCase().replace(/\s+/g, '-');

  return (
    <fieldset className="mb-5">
      <legend className="mb-3 text-sm font-bold text-dark-gray-2">
        {title}
      </legend>

      <div className="flex flex-col gap-2.5">
        {options.map((option) => {
          const value = option.value ?? option.text;
          const inputId = `${groupName}-${value}`;
          const isChecked = selected.includes(value);

          return (
            <label
              key={inputId}
              htmlFor={inputId}
              className="flex cursor-pointer items-center gap-3 text-sm text-dark-gray-2"
            >
              <input
                id={inputId}
                type={inputType}
                name={groupName}
                value={value}
                checked={isChecked}
                onChange={(event) => onChange?.(value, event.target.checked)}
                className="filter-input"
              />
              {option.text}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default FilterGroup;

import './FilterGroup.css';

/**
 * Grupo de filtros (checkbox ou radio).
 * @param {string} title
 * @param {'checkbox'|'radio'} [inputType='checkbox']
 * @param {{text: string, value?: string}[]} options - value é opcional (usa text como fallback)
 * @param {string[]} [selected]  valores marcados (controlado)
 * @param {(value: string, checked: boolean) => void} [onChange]
 */
export default function FilterGroup({ title, inputType = 'checkbox', options = [], selected = [], onChange }) {
  const groupName = `filter-${title}`;

  return (
    <fieldset className="filter-group">
      <legend className="filter-group__title">{title}</legend>
      {options.map((option) => {
        const value = option.value ?? option.text;
        const id = `${groupName}-${value}`;
        return (
          <label key={id} htmlFor={id} className="filter-group__option">
            <input
              id={id}
              type={inputType}
              name={groupName}
              value={value}
              checked={selected.includes(value)}
              onChange={(e) => onChange?.(value, e.target.checked)}
            />
            {option.text}
          </label>
        );
      })}
    </fieldset>
  );
}

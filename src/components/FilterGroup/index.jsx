import './FilterGroup.css';

/**
 * Grupo de filtros (checkbox ou radio).
 * @param {string} title - Título do grupo (14px, dark-gray-2)
 * @param {'checkbox'|'radio'} inputType - Tipo do input
 * @param {{text: string, value?: string}[]} options - Opções; "value" é opcional (usa "text")
 * @param {string[]} selected - Valores marcados (opcional, componente controlado)
 * @param {(value: string, checked: boolean) => void} onChange - Chamado ao marcar/desmarcar
 */
export default function FilterGroup({
  title, inputType = 'checkbox', options = [], selected, onChange,
}) {
  const name = `filter-${title}`.toLowerCase().replace(/\s+/g, '-');

  return (
    <fieldset className="filter-group">
      <legend className="filter-group__title">{title}</legend>
      {options.map((option) => {
        const value = option.value ?? option.text;
        const id = `${name}-${value}`.replace(/\s+/g, '-');
        const controlled = Array.isArray(selected);
        return (
          <label className="filter-group__option" htmlFor={id} key={id}>
            <input
              id={id}
              type={inputType}
              name={name}
              value={value}
              {...(controlled ? { checked: selected.includes(value) } : {})}
              onChange={(e) => onChange?.(value, e.target.checked)}
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}

export default function FilterGroup({ title, inputType = 'checkbox', options, values = [], onChange }) {
  return <fieldset className="filter-group">
    <legend>{title}</legend>
    {options.map(option => {
      const value = option.value ?? option.text
      const checked = inputType === 'radio' ? values === value : values.includes(value)
      return <label key={value} className="filter-option">
        <input type={inputType} name={title} value={value} checked={checked} onChange={() => onChange(value)} />
        <span>{option.text}</span>
      </label>
    })}
  </fieldset>
}

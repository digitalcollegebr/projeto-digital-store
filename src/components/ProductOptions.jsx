import { useState } from 'react'

export default function ProductOptions({ title, options = [], shape = 'square', radius = '4px', type = 'text' }) {
  const [selected, setSelected] = useState(0)
  return <fieldset className="product-options">
    <legend>{title}</legend>
    <div className="product-options__list">
      {options.map((option, i) => <button type="button" key={option} className={`product-option product-option--${shape}${i===selected ? ' product-option--selected' : ''}`} aria-label={type === 'color' ? `Cor ${i + 1}` : String(option)} aria-pressed={i === selected} title={type === 'color' ? String(option) : undefined} style={{borderRadius:shape === 'circle' ? '50%' : radius, backgroundColor: type === 'color' ? option : '#fff'}} onClick={() => setSelected(i)}>{type === 'text' ? option : <span className="sr-only">Cor {i+1}</span>}</button>)}
    </div>
  </fieldset>
}

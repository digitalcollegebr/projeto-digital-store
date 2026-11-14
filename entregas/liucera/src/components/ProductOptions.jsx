import { useState } from 'react';

export default function ProductOptions({
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
  label = 'Opções',
  selectedValue,
}) {
  const [selected, setSelected] = useState(selectedValue ?? options[0]);

  return (
    <fieldset className="product-options">
      <legend>{label}</legend>
      <div className={'product-options__list product-options__list--' + shape}>
        {options.map((option) => {
          const colorValue = type === 'color' ? option : undefined;
          const isSelected = selected === option;
          return (
            <button
              key={option}
              className={
                'product-options__choice' + (isSelected ? ' is-selected' : '')
              }
              type="button"
              aria-label={type === 'color' ? 'Cor ' + option : 'Tamanho ' + option}
              aria-pressed={isSelected}
              onClick={() => setSelected(option)}
              style={{
                borderRadius: shape === 'circle' ? '50%' : radius,
                ...(colorValue ? { '--option-color': colorValue } : {}),
              }}
            >
              {type === 'text' ? option : <span aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

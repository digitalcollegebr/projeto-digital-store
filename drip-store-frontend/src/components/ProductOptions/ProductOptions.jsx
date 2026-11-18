import { useState } from 'react';
import './ProductOptions.css';

/**
 * Lista de variações do produto (tamanhos, cores...).
 * @param {string[]} options  ex.: ["39","40"] ou ["#000","#333"]
 * @param {'square'|'circle'} [shape='square']
 * @param {string} [radius]   border-radius quando shape="square"
 * @param {'text'|'color'} [type='text']
 * @param {string} [title]
 */
export default function ProductOptions({ options = [], shape = 'square', radius = '0px', type = 'text', title, onChange }) {
  const [selected, setSelected] = useState(null);

  const select = (option) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <fieldset className="product-options">
      {title && <legend className="product-options__title">{title}</legend>}
      <div className="product-options__list">
        {options.map((option) => {
          const style = {
            borderRadius: shape === 'square' ? radius : '50%',
            background: type === 'color' ? option : undefined,
          };
          return (
            <button
              key={option}
              type="button"
              className={`product-options__item product-options__item--${shape} ${
                selected === option ? 'is-selected' : ''
              }`}
              style={style}
              onClick={() => select(option)}
              aria-pressed={selected === option}
              aria-label={type === 'color' ? `Cor ${option}` : option}
            >
              {type === 'text' && option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

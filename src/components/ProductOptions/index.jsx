import { useState } from 'react';
import './ProductOptions.css';

/**
 * Opções do produto (tamanhos, cores...).
 * @param {string[]} options - Valores, ex.: ["39", "40"] ou ["#000", "#fff"]
 * @param {string|number} radius - border-radius quando shape="square" (ignorado em "circle")
 * @param {'square'|'circle'} shape - Formato
 * @param {'text'|'color'} type - "text" exibe o valor; "color" usa o valor como cor de fundo
 * @param {string} title - Título opcional exibido acima das opções
 */
export default function ProductOptions({
  options = [], radius = 0, shape = 'square', type = 'text', title,
}) {
  const [selected, setSelected] = useState(null);
  const borderRadius = shape === 'circle' ? '50%' : (typeof radius === 'number' ? `${radius}px` : radius);

  return (
    <div className="product-options">
      {title && <p className="product-options__title">{title}</p>}
      <div className="product-options__list" role="radiogroup" aria-label={title}>
        {options.map((option) => (
          <button
            type="button"
            role="radio"
            aria-checked={selected === option}
            aria-label={option}
            key={option}
            title={option}
            className={[
              'product-options__item',
              `product-options__item--${shape}`,
              `product-options__item--${type}`,
              selected === option ? 'product-options__item--selected' : '',
            ].join(' ')}
            style={{ borderRadius, ...(type === 'color' ? { background: option } : {}) }}
            onClick={() => setSelected(option)}
          >
            {type === 'text' ? option : null}
          </button>
        ))}
      </div>
    </div>
  );
}

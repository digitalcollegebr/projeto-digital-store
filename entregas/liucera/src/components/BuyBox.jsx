import { useState } from 'react';
import { assets } from '../data/assets.js';
import { formatPrice } from '../data/products.js';

export default function BuyBox({
  name,
  brand,
  productType,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  const [added, setAdded] = useState(false);

  return (
    <section className="buy-box" aria-label="Informações do produto">
      <h1>{name}</h1>
      <p className="buy-box__reference">
        {productType || 'Casual'} | {brand} | REF:{reference}
      </p>
      <div className="buy-box__rating">
        <span className="buy-box__rating-stars" aria-label={`${stars} de 5 estrelas`}>
          {Array.from({ length: 5 }, (_, index) => (
            <span key={index}>{index < Math.floor(stars) ? '★' : '☆'}</span>
          ))}
        </span>
        <span className="buy-box__stars">
          {stars}
          <img src={assets.star} alt="" />
        </span>
        <span>({rating} avaliações)</span>
      </div>
      <div className="buy-box__prices">
        {priceDiscount ? (
          <>
            <span className="buy-box__old-price">{formatPrice(price)}</span>
            <strong>{formatPrice(priceDiscount)}</strong>
          </>
        ) : (
          <strong>{formatPrice(price)}</strong>
        )}
      </div>
      <p className="buy-box__installments">ou em até 10x sem juros</p>
      <div className="buy-box__description">
        <h2>Descrição do produto</h2>
        <p>{description}</p>
      </div>
      <div className="buy-box__options">{children}</div>
      <button
        className={'button button--buy' + (added ? ' is-added' : '')}
        type="button"
        onClick={() => setAdded(true)}
      >
        {added ? 'PRODUTO SELECIONADO' : 'COMPRAR'}
      </button>
      {added && (
        <p className="buy-box__feedback" role="status">
          Produto selecionado. Esta loja é uma demonstração e não realiza vendas.
        </p>
      )}
    </section>
  );
}

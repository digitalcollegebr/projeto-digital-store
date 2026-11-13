import { formatPrice } from '../../utils/format';
import './BuyBox.css';

/** Estrela com preenchimento branco (baseada em src/assets/star-icon.svg). */
function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z"
        fill="#fff"
      />
    </svg>
  );
}

/**
 * Buy box: nome, referência, avaliação, preços, descrição, opções (children) e botão COMPRAR.
 */
export default function BuyBox({
  name, reference, stars, rating, price, priceDiscount, description, children, onBuy,
}) {
  return (
    <div className="buy-box">
      <h1 className="buy-box__name">{name}</h1>
      {reference && <p className="buy-box__reference">{reference}</p>}

      {(stars !== undefined || rating !== undefined) && (
        <div className="buy-box__rating">
          {stars !== undefined && (
            <span className="buy-box__stars">
              {stars} <StarIcon />
            </span>
          )}
          {rating !== undefined && <span className="buy-box__reviews">({rating} avaliações)</span>}
        </div>
      )}

      <div className="buy-box__prices">
        {priceDiscount ? (
          <>
            <span className="buy-box__price-discount">{formatPrice(priceDiscount)}</span>
            <span className="buy-box__price buy-box__price--old">{formatPrice(price)}</span>
          </>
        ) : (
          <span className="buy-box__price">{formatPrice(price)}</span>
        )}
      </div>

      {description && (
        <div className="buy-box__description">
          <h2>Descrição do produto</h2>
          <p>{description}</p>
        </div>
      )}

      {children}

      <button type="button" className="buy-box__buy" onClick={onBuy}>COMPRAR</button>
    </div>
  );
}

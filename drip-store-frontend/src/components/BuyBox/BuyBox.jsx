import starIcon from '../../assets/star-icon.svg';
import { formatPrice } from '../../utils/format';
import './BuyBox.css';

/**
 * Bloco de compra do produto: nome, referência, avaliação, preços, descrição,
 * opções (children) e o botão COMPRAR.
 */
export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children, onBuy }) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;

  return (
    <div className="buybox">
      <h1 className="buybox__name">{name}</h1>
      {reference && <p className="buybox__reference">REF: {reference}</p>}

      <div className="buybox__rating">
        <span className="buybox__stars">
          {stars}
          <img src={starIcon} alt="" width={12} height={12} />
        </span>
        <span className="buybox__reviews">({rating} avaliações)</span>
      </div>

      <div className="buybox__prices">
        {hasDiscount ? (
          <>
            <span className="buybox__price">{formatPrice(priceDiscount)}</span>
            <span className="buybox__price buybox__price--old">{formatPrice(price)}</span>
          </>
        ) : (
          <span className="buybox__price">{formatPrice(price)}</span>
        )}
      </div>

      {description && (
        <div className="buybox__description">
          <h2>Descrição do produto</h2>
          <p>{description}</p>
        </div>
      )}

      {children}

      <button type="button" className="buybox__buy" onClick={onBuy}>
        COMPRAR
      </button>
    </div>
  );
}

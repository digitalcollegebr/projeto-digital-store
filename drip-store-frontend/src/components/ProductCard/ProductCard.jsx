import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/format';
import './ProductCard.css';

/**
 * Cartão de produto: imagem (292x321), nome, preço e preço com desconto.
 * Com priceDiscount, o price aparece riscado em light-gray.
 */
export default function ProductCard({ id, image, name, price, priceDiscount, category }) {
  const hasDiscount = priceDiscount !== undefined && priceDiscount !== null;
  const discountPercent = hasDiscount ? Math.round((1 - priceDiscount / price) * 100) : 0;

  const content = (
    <>
      <div className="product-card__image">
        {hasDiscount && discountPercent > 0 && <span className="product-card__badge">{discountPercent}% OFF</span>}
        <img src={image} alt={name} width={292} height={321} loading="lazy" />
      </div>
      {category && <span className="product-card__category">{category}</span>}
      <h3 className="product-card__name">{name}</h3>
      <div className="product-card__prices">
        <span className={hasDiscount ? 'product-card__price product-card__price--old' : 'product-card__price'}>
          {formatPrice(price)}
        </span>
        {hasDiscount && <span className="product-card__price">{formatPrice(priceDiscount)}</span>}
      </div>
    </>
  );

  return (
    <article className="product-card">
      {id ? (
        <Link to={`/product/${id}`} className="product-card__link">
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}

import { Link } from 'react-router-dom';
import { formatPrice, discountPercent } from '../../utils/format';
import './ProductCard.css';

/**
 * Cartão de produto com imagem (292x321), nome, preço e preço com desconto.
 * Quando "priceDiscount" é informado, "price" aparece riscado em light-gray.
 */
export default function ProductCard({
  id, image, name, price, priceDiscount, category,
}) {
  const discount = discountPercent(price, priceDiscount);
  const content = (
    <>
      <div className="product-card__image">
        {discount > 0 && <span className="product-card__badge">{discount}% OFF</span>}
        <img src={image} alt={name} width={292} height={321} loading="lazy" />
      </div>
      {category && <span className="product-card__category">{category}</span>}
      <h3 className="product-card__name">{name}</h3>
      <div className="product-card__prices">
        <span className={priceDiscount ? 'product-card__price product-card__price--old' : 'product-card__price'}>
          {formatPrice(price)}
        </span>
        {priceDiscount && <span className="product-card__price">{formatPrice(priceDiscount)}</span>}
      </div>
    </>
  );

  return (
    <article className="product-card">
      {id ? <Link to={`/product/${id}`}>{content}</Link> : content}
    </article>
  );
}

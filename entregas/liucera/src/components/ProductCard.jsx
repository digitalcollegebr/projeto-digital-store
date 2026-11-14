import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products.js';

export default function ProductCard({
  product,
  imagem,
  image,
  name,
  price,
  priceDiscount,
}) {
  const details = product || { imagem, image, name, price, priceDiscount, id: 1 };
  const photo = imagem || image || details.image;
  const productName = name || details.name;
  const regularPrice = price ?? details.price;
  const discountedPrice = priceDiscount ?? details.priceDiscount;
  const destination = details.id ? '/products/' + details.id : '/products/1';

  return (
    <article className="product-card">
      <Link className="product-card__image-link" to={destination}>
        {discountedPrice && (
          <span className="product-card__badge">
            -{Math.round((1 - discountedPrice / regularPrice) * 100)}%
          </span>
        )}
        <img
          className="product-card__image"
          src={photo}
          alt={productName}
          loading="lazy"
        />
        <span className="visually-hidden">Ver {productName}</span>
      </Link>
      <div className="product-card__details">
        <p className="product-card__category">{details.category || 'Destaque'}</p>
        <Link className="product-card__name" to={destination}>
          {productName}
        </Link>
        <div className="product-card__prices">
          {discountedPrice ? (
            <>
              <span className="product-card__old-price">{formatPrice(regularPrice)}</span>
              <strong>{formatPrice(discountedPrice)}</strong>
            </>
          ) : (
            <strong>{formatPrice(regularPrice)}</strong>
          )}
        </div>
      </div>
    </article>
  );
}

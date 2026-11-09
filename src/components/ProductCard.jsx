import { Link } from 'react-router-dom'
import { discountPercentage, formatPrice, hasDiscount } from '../utils/prices.js'
import './ProductCard.css'

export default function ProductCard({ id, image, name, price, priceDiscount, brand = 'Tênis' }) {
  const discounted = hasDiscount(price, priceDiscount)
  const percentage = discountPercentage({ price, priceDiscount })
  return (
    <article className="product-card">
      <Link to={`/product/${id}`} className="product-card__link" aria-label={`Ver produto ${name}`}>
        <div className="product-card__image-box">
          {discounted && <span className="discount-pill">{percentage}% OFF</span>}
          <img className="product-card__image" src={image} alt={name} loading="lazy" onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = '/product-thumb-1.jpeg' }} />
        </div>
        <div className="product-card__info">
          <span className="product-card__category">{brand}</span>
          <h3 className="product-card__name">{name}</h3>
          <div className="product-card__prices">
            {discounted ? <><s className="old-price">{formatPrice(price)}</s><strong className="current-price">{formatPrice(priceDiscount)}</strong></> : <strong className="current-price">{formatPrice(price)}</strong>}
          </div>
        </div>
      </Link>
    </article>
  )
}

import { Link } from 'react-router-dom';
import { money } from '../lib/money';
export default function ProductCard({ product, imagem, image, name, price, priceDiscount }) {
  product = product ?? { imagem, image: imagem ?? image, name, price, priceDiscount };
  const discount = product.priceDiscount && product.priceDiscount < product.price;
  const percent = discount ? Math.round((1 - product.priceDiscount / product.price) * 100) : 0;
  const cardContent = <>
    <div className="product-image">
      {discount && <span className="discount-tag">{percent}% OFF</span>}
      {(product.imagem ?? product.image)
        ? <img src={product.imagem ?? product.image} alt={product.name} loading="lazy" />
        : <span className="image-unavailable">Imagem indisponível</span>}
    </div>
    <div className="product-meta"><span>{product.category}{product.brand && ` · ${product.brand}`}</span><h3>{product.name}</h3>
      <div className="product-price">{discount ? <><del>{money(product.price)}</del><strong>{money(product.priceDiscount)}</strong></> : <strong>{money(product.price)}</strong>}</div>
    </div>
  </>;
  return product.id ? <Link to={`/product/${product.id}`} className="product-card">{cardContent}</Link> : <article className="product-card">{cardContent}</article>;
}

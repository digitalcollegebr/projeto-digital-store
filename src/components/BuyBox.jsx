import { ShoppingBag } from 'lucide-react';
import { money } from '../lib/money';
export default function BuyBox({product: productProp, name, reference, stars, rating, price, priceDiscount, description, children, onBuy}) {
  const product = productProp ?? {name, reference, stars, rating, price, priceDiscount, description, category: ''};
  return <div className="buy-box">

    <h1>{product.name}</h1>
    <p className="reference">Ref.: {product.reference}{product.brand && ` | ${product.brand}`}</p>
    <div className="reviews"><span className="stars">{product.stars} <img src="/store/star-icon.svg" alt="" width="14" height="14" /></span><span>({product.rating} avaliações)</span></div>
    <div className="buy-price">{product.priceDiscount ? <><strong>{money(product.priceDiscount)}</strong><del>{money(product.price)}</del></> : <strong>{money(product.price)}</strong>}</div>
    <h2>Descrição do produto</h2><p className="buy-description">{product.description}</p>
    {children}
    <button className="buy-button" onClick={onBuy}><ShoppingBag size={19} /> COMPRAR</button>
    <p className="demo-note">Compra demonstrativa, sem cobrança real.</p>
  </div>;
}

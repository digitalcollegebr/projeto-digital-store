import { useState } from 'react'
import { formatPrice, hasDiscount } from '../utils/prices.js'

export default function BuyBox({ name, reference, stars = 4.7, rating = 0, price, priceDiscount, description, children }) {
  const [notice, setNotice] = useState(false)
  const discounted = hasDiscount(price, priceDiscount)
  return <aside className="buy-box">
    <h1>{name}</h1>
    <p className="buy-box__reference">Ref.: {reference}</p>
    <div className="buy-box__ratings"><span className="star-badge">{stars} ★</span><span>({rating} avaliações)</span></div>
    <div className="buy-box__prices">{discounted && <s>{formatPrice(price)}</s>}<strong>{formatPrice(discounted ? priceDiscount : price)}</strong></div>
    <h2>Descrição do produto</h2>
    <p className="buy-box__description">{description}</p>
    {children}
    <button type="button" className="button button-buy" onClick={() => setNotice(true)}>COMPRAR</button>
    {notice && <p role="status" className="demo-notice">Demonstração: pedido não realizado. Este projeto não possui checkout real.</p>}
  </aside>
}

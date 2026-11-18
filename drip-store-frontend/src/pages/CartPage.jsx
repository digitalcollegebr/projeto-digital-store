import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { useCart, FREE_SHIPPING_FROM } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatPrice } from '../utils/format';
import './cart.css';

export default function CartPage() {
  const { items, summary, updateQuantity, removeItem, checkout } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [placing, setPlacing] = useState(false);

  const handleCheckout = () => {
    // pedido exige login: volta para o carrinho depois de entrar
    if (!user) {
      navigate('/login', { state: { from: location.pathname } });
      return;
    }
    setPlacing(true);
    const order = checkout(user);
    navigate('/meus-pedidos', { state: { newOrder: order.id } });
  };

  if (!items.length) {
    return (
      <Layout>
        <div className="container page page__status">
          <h1>Seu carrinho está vazio</h1>
          <p>Que tal dar uma olhada nos produtos em alta?</p>
          <Link to="/products" className="cart__primary cart__primary--inline">
            Ver produtos
          </Link>
        </div>
      </Layout>
    );
  }

  const missingForFreeShipping = FREE_SHIPPING_FROM - (summary.total - summary.shipping);

  return (
    <Layout>
      <div className="container page cart">
        <section className="cart__items" aria-labelledby="cart-title">
          <h1 id="cart-title" className="cart__title">
            Meu Carrinho <span>({summary.count} {summary.count === 1 ? 'item' : 'itens'})</span>
          </h1>

          <div className="cart__head" aria-hidden="true">
            <span>Produto</span>
            <span>Quantidade</span>
            <span>Unitário</span>
            <span>Total</span>
          </div>

          <ul className="cart__list">
            {items.map((item) => {
              const unit = item.priceDiscount ?? item.price;
              return (
                <li key={item.key} className="cart__item">
                  <div className="cart__product">
                    <Link to={`/product/${item.productId}`}>
                      <img src={item.image} alt="" />
                    </Link>
                    <div>
                      <Link to={`/product/${item.productId}`} className="cart__name">
                        {item.name}
                      </Link>
                      <p className="cart__variant">
                        {item.size && <>Tamanho: {item.size}</>}
                        {item.color && (
                          <>
                            {' '}
                            · Cor: <span className="cart__swatch" style={{ background: item.color }} />
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="cart__qty">
                    <button type="button" onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label="Diminuir">
                      −
                    </button>
                    <span aria-live="polite">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label="Aumentar">
                      +
                    </button>
                    <button type="button" className="cart__remove" onClick={() => removeItem(item.key)}>
                      Remover
                    </button>
                  </div>

                  <div className="cart__price">
                    {item.priceDiscount !== undefined && <s>{formatPrice(item.price)}</s>}
                    <strong>{formatPrice(unit)}</strong>
                  </div>

                  <div className="cart__price">
                    <strong>{formatPrice(unit * item.quantity)}</strong>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <aside className="cart__summary" aria-label="Resumo do pedido">
          <h2>Resumo</h2>
          <dl>
            <div>
              <dt>Subtotal</dt>
              <dd>{formatPrice(summary.subtotal)}</dd>
            </div>
            <div>
              <dt>Frete</dt>
              <dd>{summary.shipping ? formatPrice(summary.shipping) : 'Grátis'}</dd>
            </div>
            <div>
              <dt>Desconto</dt>
              <dd>{summary.discount ? `- ${formatPrice(summary.discount)}` : formatPrice(0)}</dd>
            </div>
            <div className="cart__total">
              <dt>Total</dt>
              <dd>
                {formatPrice(summary.total)}
                <small>ou 10x de {formatPrice(summary.total / 10)} sem juros</small>
              </dd>
            </div>
          </dl>

          {missingForFreeShipping > 0 && (
            <p className="cart__shipping-tip">
              Faltam <strong>{formatPrice(missingForFreeShipping)}</strong> para o frete grátis.
            </p>
          )}

          <button type="button" className="cart__primary" onClick={handleCheckout} disabled={placing}>
            {user ? 'Finalizar compra' : 'Entrar para finalizar'}
          </button>
          <Link to="/products" className="cart__continue">
            Continuar comprando
          </Link>
        </aside>
      </div>
    </Layout>
  );
}

import { Link, Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { formatPrice } from '../utils/format';
import './cart.css';

const dateFormat = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

export default function OrdersPage() {
  const { user } = useAuth();
  const { orders } = useCart();
  const location = useLocation();
  const newOrder = location.state?.newOrder;

  if (!user) return <Navigate to="/login" state={{ from: '/meus-pedidos' }} replace />;

  const mine = orders.filter((o) => o.userEmail === user.email);

  return (
    <Layout>
      <div className="container page orders">
        <h1 className="cart__title">Meus Pedidos</h1>

        {newOrder && (
          <p className="orders__success" role="status">
            Pedido <strong>#{newOrder}</strong> realizado com sucesso! 🎉
          </p>
        )}

        {!mine.length ? (
          <div className="page__status">
            <p>Você ainda não fez nenhum pedido.</p>
            <Link to="/products">Ver produtos</Link>
          </div>
        ) : (
          <ul className="orders__list">
            {mine.map((order) => (
              <li key={order.id} className={`orders__card ${order.id === newOrder ? 'is-new' : ''}`}>
                <div className="orders__header">
                  <div>
                    <span className="orders__label">Pedido</span>
                    <strong>#{order.id}</strong>
                  </div>
                  <div>
                    <span className="orders__label">Data</span>
                    {dateFormat.format(new Date(order.date))}
                  </div>
                  <div>
                    <span className="orders__label">Total</span>
                    <strong>{formatPrice(order.total)}</strong>
                  </div>
                  <span className="orders__status">Pagamento aprovado</span>
                </div>
                <ul className="orders__items">
                  {order.items.map((item) => (
                    <li key={item.key}>
                      <img src={item.image} alt="" />
                      <span>
                        {item.quantity}x {item.name}
                        {item.size && ` · Tam. ${item.size}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import { money } from '../lib/money';

function readOrders() {
  try {
    const value = JSON.parse(localStorage.getItem('drip-orders') || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export default function OrdersPage() {
  const orders = readOrders();
  return <div className="container orders-page">
    <div className="page-heading"><p>Home / Pedidos</p><h1>Meus pedidos</h1><span>Os pedidos de teste ficam salvos neste navegador.</span></div>
    {orders.length ? orders.map((order) => <article className="order-card" key={order.id}>
      <div><strong>Pedido {order.id}</strong><p>{new Date(order.createdAt).toLocaleDateString('pt-BR')} · {order.status}</p></div>
      <ul>{order.items.map((item, index) => <li key={index}>{item.quantity}× {item.name} · Tam. {item.size}</li>)}</ul>
      <strong>{money(order.total)}</strong>
    </article>) : <div className="empty-state"><Package size={42}/><h2>Nenhum pedido ainda</h2>
      <p>Quando você finalizar um pedido de teste, ele vai aparecer aqui. Não há cobrança de verdade.</p><Link className="primary-button" to="/products">Ver produtos</Link></div>}
  </div>;
}

import { Link, useLocation } from 'react-router-dom';

export default function InfoPage({ title }) {
  const location = useLocation();
  const description =
    location.pathname === '/orders'
      ? 'Esta demonstração não registra pedidos. Você pode explorar os produtos disponíveis no catálogo.'
      : 'O acesso à conta não está disponível nesta demonstração. Você pode continuar explorando o catálogo.';

  return (
    <section className="message-page">
      <span className="eyebrow">Digital Store</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link className="button button--primary" to="/products">
        Explorar produtos
      </Link>
    </section>
  );
}

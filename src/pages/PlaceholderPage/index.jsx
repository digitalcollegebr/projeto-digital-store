import { Link } from 'react-router-dom';
import Layout from '../Layout';

/** Página simples para rotas que ainda não fazem parte do escopo (Categorias, Meus Pedidos, 404). */
export default function PlaceholderPage({ title, notFound = false }) {
  return (
    <Layout>
      <div className="container status-message">
        <h1 style={{ color: 'var(--dark-gray-2)' }}>{title}</h1>
        <p>{notFound ? 'A página que você procura não existe.' : 'Esta página estará disponível em breve.'}</p>
        <Link to="/products" className="btn-primary">Ver produtos</Link>
      </div>
    </Layout>
  );
}

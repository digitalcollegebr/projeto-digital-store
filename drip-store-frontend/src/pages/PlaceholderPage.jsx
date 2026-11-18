import { Link } from 'react-router-dom';
import Layout from './Layout';
import './pages.css';

/** Página simples para rotas fora do escopo mínimo (categorias, pedidos, login...). */
export default function PlaceholderPage({ title, text = 'Esta página está em construção.' }) {
  return (
    <Layout>
      <div className="container page page__status">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to="/products" className="page__cta">
          Ver produtos
        </Link>
      </div>
    </Layout>
  );
}

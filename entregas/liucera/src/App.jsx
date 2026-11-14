import { Link, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductListingPage from './pages/ProductListingPage.jsx';
import ProductViewPage from './pages/ProductViewPage.jsx';
import InfoPage from './pages/InfoPage.jsx';

function NotFoundPage() {
  return (
    <section className="message-page">
      <span className="eyebrow">Página não encontrada</span>
      <h1>Não encontramos esse endereço.</h1>
      <p>Confira o link ou volte para a página inicial.</p>
      <Link className="button button--primary" to="/">Ir para a página inicial</Link>
    </section>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductViewPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/orders" element={<InfoPage title="Meus pedidos" />} />
        <Route path="/login" element={<InfoPage title="Entrar" />} />
        <Route path="/register" element={<InfoPage title="Cadastre-se" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

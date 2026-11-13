import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import PlaceholderPage from './pages/PlaceholderPage';
import ScrollToTop from './components/ScrollToTop';

/** Rotas da aplicação. */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/produtos" element={<Navigate to="/products" replace />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
        <Route path="/categories" element={<PlaceholderPage title="Categorias" />} />
        <Route path="/orders" element={<PlaceholderPage title="Meus Pedidos" />} />
        <Route path="/login" element={<PlaceholderPage title="Entrar" />} />
        <Route path="/signup" element={<PlaceholderPage title="Cadastre-se" />} />
        <Route path="*" element={<PlaceholderPage title="Página não encontrada" notFound />} />
      </Routes>
    </>
  );
}

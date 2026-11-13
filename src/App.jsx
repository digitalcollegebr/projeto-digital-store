import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useSearchParams } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import ComingSoonPage from './pages/ComingSoonPage';
import NotFoundPage from './pages/NotFoundPage';

// Sobe a página para o topo ao trocar de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// /produtos leva para /products, mantendo a busca da URL
function RedirectToProducts() {
  const [params] = useSearchParams();
  const search = params.toString();
  return <Navigate to={search ? `/products?${search}` : '/products'} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/produtos" element={<RedirectToProducts />} />
        <Route path="/product/:id" element={<ProductViewPage />} />

        {/* Rotas extras sem back-end: só um aviso de página em construção */}
        <Route path="/categorias" element={<ComingSoonPage />} />
        <Route path="/meus-pedidos" element={<ComingSoonPage />} />
        <Route path="/cadastro" element={<ComingSoonPage />} />
        <Route path="/login" element={<ComingSoonPage />} />
        <Route path="/entrar" element={<Navigate to="/login" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

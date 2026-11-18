import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/produtos" element={<Navigate to="/products" replace />} />
      <Route path="/product/:id" element={<ProductViewPage />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/cadastro" element={<AuthPage mode="signup" />} />
      <Route path="/carrinho" element={<CartPage />} />
      <Route path="/meus-pedidos" element={<OrdersPage />} />
      <Route path="/categorias" element={<Navigate to="/products" replace />} />
      <Route
        path="*"
        element={<PlaceholderPage title="Página não encontrada" text="O endereço acessado não existe." />}
      />
    </Routes>
  );
}

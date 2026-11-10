import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import OrdersPage from './pages/OrdersPage';
import AccountPage from './pages/AccountPage';
export default function App() {
  return <BrowserRouter><CartProvider><Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductListingPage />} />
      <Route path="produtos" element={<ProductListingPage />} />
      <Route path="product/:id" element={<ProductViewPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="account" element={<AccountPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes></CartProvider></BrowserRouter>;
}

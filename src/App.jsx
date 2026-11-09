import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductListingPage from './pages/ProductListingPage.jsx'
import ProductViewPage from './pages/ProductViewPage.jsx'
import { CategoriesPage, OrdersPage, AuthPage } from './pages/ExtraPage.jsx'

export default function App() {
  return <Layout>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products" element={<ProductListingPage/>} />
      <Route path="/produtos" element={<ProductListingPage/>} />
      <Route path="/product/:id" element={<ProductViewPage/>} />
      <Route path="/categorias" element={<CategoriesPage/>} />
      <Route path="/meus-pedidos" element={<OrdersPage/>} />
      <Route path="/entrar" element={<AuthPage mode="login"/>} />
      <Route path="/cadastro" element={<AuthPage mode="register"/>} />
      <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
  </Layout>
}

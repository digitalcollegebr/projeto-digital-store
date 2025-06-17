import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import RegisterForm from "./pages/RegisterForm";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";
import ProductViewPage from "./pages/ProductViewPage";
import CartPage from "./pages/CartPage";
import PageInConstruction from "./pages/PageConstruction";
import PurchasePage from "./pages/PurchasePage";
import PurchaseDonePage from "./pages/PurchaseDonePage";

export default function App() {
  return (
    <BrowserRouter basename="/drip-store-front">
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/purchasepage" element={<PurchasePage />} />
    <Route path="/purchasedone" element={<PurchaseDonePage />} />
    <Route path="/home" element={<Navigate to="/" />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="/construction" element={<PageInConstruction />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/myproducts" element={<OrderPage />} />
    <Route path="/product/:id" element={<ProductViewPage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/register/registerform" element={<RegisterForm />} />
  </Routes>
</BrowserRouter>

  );
}

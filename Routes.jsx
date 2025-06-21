import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Layout from "./src/components/Layout.jsx";
import HomePage from "./src/pages/HomePage.jsx";
import ProductListingPage from "./src/pages/ProductListingPage.jsx";
import ProductViewPage from "./src/pages/ProductViewPage.jsx";
import NotFound from "./src/pages/NotFound.jsx";
import LoginPage from "./src/pages/LoginPage.jsx";
import SignupPage from "./src/pages/SignupPage.jsx";

const Rotas = () => (
  console.log("Foi renderizado o App"),
  <Routes>
      <Route path="/Entrar" element={<LoginPage />} />
      <Route path="/Cadastro" element={<SignupPage />} />
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="produtos" element={<ProductListingPage/>} />
      <Route path="/produtos/:id" element={<ProductViewPage />} />
      <Route path="*" element={<NotFound />} />

    </Route>
  </Routes>
);

export default Rotas;

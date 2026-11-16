import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import cartIcon from "../../assets/mini-cart.svg";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active-nav-link" : "nav-link";

  return (
    <header className="header-container">
      <div className="top-row">
        <div className="logo-wrapper">
          <Logo />
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
          <span
            onClick={handleSearch}
            className="search-icon"
            title="Buscar"
          >
            🔍
          </span>
        </div>

        <div className="actions-container">
          <a href="/register" className="register-link">
            Cadastre-se
          </a>

          <a href="/login" className="login-button">
            Entrar
          </a>

          <div className="cart-wrapper">
            <img
              src={cartIcon}
              alt="Carrinho de compras"
              className="cart-icon"
            />
          </div>
        </div>
      </div>

      <nav className="nav-row">
        <ul className="nav-list">
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={getNavLinkClass}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className={getNavLinkClass}>
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={getNavLinkClass}>
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

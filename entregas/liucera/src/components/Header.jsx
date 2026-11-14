import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../data/assets.js';
import Logo from './Logo.jsx';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Produtos', to: '/products' },
  { label: 'Categorias', to: '/products?category=' },
  { label: 'Meus pedidos', to: '/orders' },
];

export default function Header() {
  const [search, setSearch] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  function submitSearch(event) {
    event.preventDefault();
    navigate('/products?filter=' + encodeURIComponent(search.trim()));
  }

  return (
    <header className="site-header">
      <div className="site-header__top">
        <Link className="site-header__brand" to="/" aria-label="Digital Store, página inicial">
          <Logo />
        </Link>
        <form className="search" role="search" onSubmit={submitSearch}>
          <label className="visually-hidden" htmlFor="site-search">
            Buscar produtos
          </label>
          <input
            id="site-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar produto..."
          />
          <button type="submit" aria-label="Buscar">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.7" />
              <path d="m16 16 4.5 4.5" />
            </svg>
          </button>
        </form>
        <div className="site-header__account">
          <Link className="site-header__register" to="/register">
            Cadastre-se
          </Link>
          <Link className="button button--primary site-header__login" to="/login">
            Entrar
          </Link>
        </div>
        <img className="site-header__cart" src={assets.cart} alt="Sacola de compras" />
      </div>
      <nav className="main-nav" aria-label="Navegação principal">
        {navigation.map((item) => {
          const hasCategory = new URLSearchParams(location.search).has('category');
          const isProductPage = /^\/(products|produtos|product)(\/|$)/.test(location.pathname);
          const active = item.label === 'Categorias'
            ? isProductPage && hasCategory
            : item.label === 'Produtos'
              ? isProductPage && !hasCategory
              : location.pathname === item.to;

          return (
            <Link
              key={item.label}
              to={item.to}
              className={'main-nav__link' + (active ? ' is-active' : '')}
              aria-current={active ? 'page' : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

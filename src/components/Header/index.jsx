import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import Logo from '../Logo';
import miniCart from '../../assets/mini-cart.svg';
import './Header.css';

const NAV_LINKS = [
  { text: 'Home', to: '/' },
  { text: 'Produtos', to: '/products' },
  { text: 'Categorias', to: '/categories' },
  { text: 'Meus Pedidos', to: '/orders' },
];

/** Cabeçalho: logo, busca, cadastro/login, carrinho e navegação principal. */
export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [term, setTerm] = useState(searchParams.get('filter') || '');

  // Mantém o campo sincronizado quando a URL muda
  useEffect(() => {
    setTerm(searchParams.get('filter') || '');
  }, [searchParams]);

  function handleSearch(event) {
    event.preventDefault();
    const value = term.trim();
    navigate(value ? `/products?filter=${encodeURIComponent(value)}` : '/products');
  }

  return (
    <header className="header">
      <div className="container header__top">
        <Logo />

        <form className="header__search" role="search" onSubmit={handleSearch}>
          <label htmlFor="search" className="visually-hidden">Pesquisar produto</label>
          <input
            id="search"
            type="search"
            placeholder="Pesquisar produto..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </form>

        <div className="header__actions">
          <Link to="/signup" className="header__signup">Cadastre-se</Link>
          <Link to="/login" className="header__login">Entrar</Link>
          <span className="header__cart" aria-label="Carrinho com 2 itens">
            <img src={miniCart} alt="" width={24} height={24} />
            <span className="header__cart-badge">2</span>
          </span>
        </div>
      </div>

      <nav className="container header__nav" aria-label="Navegação principal">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';

export default function Header() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const location = useLocation();
  const [term, setTerm] = useState(params.get('filter') || '');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  useEffect(() => {
    if (!mobileMenu) return;
    const media = matchMedia('(max-width: 760px)');
    const close = () => setMobileMenu(false);
    const onKey = (event) => { if (event.key === 'Escape') close(); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    media.addEventListener('change', close);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      media.removeEventListener('change', close);
    };
  }, [mobileMenu]);
  const { count, setOpen } = useCart();
  useEffect(() => setTerm(params.get('filter') || ''), [location.search, params]);
  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/products', label: 'Produtos' },
    { to: '/products?category=Calçados', label: 'Categorias' },
    { to: '/orders', label: 'Meus Pedidos' }
  ];
  function submit(event) {
    event.preventDefault();
    navigate(`/products${term.trim() ? `?filter=${encodeURIComponent(term.trim())}` : ''}`);
    setMobileMenu(false);
    setMobileSearch(false);
  }
  return <header className="site-header">
    <div className="header-top container">
      <button type="button" className="menu-button" aria-label="Abrir menu" aria-controls="main-navigation" aria-expanded={mobileMenu} onClick={() => setMobileMenu(true)}><Menu /></button>
      <Logo />
      <form id="header-search" className={`search-form ${mobileSearch ? "is-expanded" : ""}`} onSubmit={submit} role="search">
        <input aria-label="Buscar produtos" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Pesquisar produto..." />
        <button type="submit" aria-label="Pesquisar"><Search size={20} /></button>
      </form>
      <div className="header-actions">
        <button type="button" className="mobile-search-toggle" aria-controls="header-search" aria-expanded={mobileSearch} aria-label="Alternar busca" onClick={() => setMobileSearch(!mobileSearch)}><Search size={20} /></button>
        <Link className="register-link" to="/account?mode=register">Cadastre-se</Link>
        <Link className="login-link" to="/account?mode=login">Entrar</Link>
        <button className="cart-trigger" onClick={() => setOpen(true)} aria-label={`Abrir carrinho com ${count} itens`}>
          <img src="/store/mini-cart.svg" alt="" width="25" height="25" />{count > 0 && <span className="cart-count">{count}</span>}
        </button>
      </div>
    </div>
    {mobileMenu && <button type="button" className="menu-backdrop" aria-label="Fechar menu pelo fundo" onClick={() => setMobileMenu(false)} />}
    <nav id="main-navigation" className={`main-nav container ${mobileMenu ? 'is-open' : ''}`} aria-label="Navegação principal">
      <button type="button" className="menu-close" aria-label="Fechar menu" onClick={() => setMobileMenu(false)}><X /></button>
      <strong className="mobile-menu-title">Páginas</strong>
      {links.map(({to,label,end}) => <NavLink key={label} to={to} end={end} onClick={() => setMobileMenu(false)} className={({isActive}) => {
        const active = label === 'Categorias'
          ? isActive && location.search.includes('category=')
          : label === 'Produtos'
            ? location.pathname.startsWith('/product/') || (isActive && !params.has('category'))
            : isActive;
        return active ? 'active' : undefined;
      }}>{label}</NavLink>)}
      <div className="mobile-account">
        <Link className="login-link" to="/account?mode=login" onClick={() => setMobileMenu(false)}>Entrar</Link>
        <Link className="register-link" to="/account?mode=register" onClick={() => setMobileMenu(false)}>Cadastre-se</Link>
      </div>
    </nav>
  </header>;
}

import { useState } from 'react'
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import Logo from './Logo.jsx'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Produtos' },
  { to: '/categorias', label: 'Categorias' },
  { to: '/meus-pedidos', label: 'Meus Pedidos' },
]

function SearchIcon() {
  return <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>
}

export default function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('filter') || '')

  function handleSearch(event) {
    event.preventDefault()
    const term = search.trim()
    navigate(term ? `/products?filter=${encodeURIComponent(term)}` : '/products')
  }

  return (
    <header className="site-header">
      <div className="container header-main">
        <Logo />
        <form role="search" className="header-search" onSubmit={handleSearch}>
          <label className="sr-only" htmlFor="global-search">Pesquisar produtos</label>
          <input id="global-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar produto..." />
          <button type="submit" aria-label="Buscar produtos"><SearchIcon /></button>
        </form>
        <div className="header-actions">
          <Link to="/cadastro" className="register-link">Cadastre-se</Link>
          <Link to="/entrar" className="button button-primary button-signin">Entrar</Link>
          <span className="cart-icon" role="img" aria-label="Carrinho de compras ilustrativo">
            <svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 3h2l2.7 12.5h12.6L22 7H5.2"/><circle cx="9" cy="20" r="1.2"/><circle cx="19" cy="20" r="1.2"/></svg>
          </span>
        </div>
      </div>
      <nav className="container main-navigation" aria-label="Navegação principal">
        {navItems.map(item => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`}>{item.label}</NavLink>)}
      </nav>
    </header>
  )
}

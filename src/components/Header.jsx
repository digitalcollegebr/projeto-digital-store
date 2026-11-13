import { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import Logo from './Logo'
import miniCart from '../assets/mini-cart.svg'

const links = [
  { text: 'Home', to: '/' },
  { text: 'Produtos', to: '/products' },
  { text: 'Categorias', to: '/categorias' },
  { text: 'Meus Pedidos', to: '/meus-pedidos' },
]

function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [busca, setBusca] = useState(searchParams.get('filter') ?? '')
  const [menuAberto, setMenuAberto] = useState(false)

  // Atualiza o campo quando a busca vem pela URL
  useEffect(() => {
    setBusca(searchParams.get('filter') ?? '')
  }, [searchParams])

  function realizarBusca(e) {
    e.preventDefault()
    const termo = busca.trim()
    navigate(termo ? `/products?filter=${encodeURIComponent(termo)}` : '/products')
    setMenuAberto(false)
  }

  function estiloLink({ isActive }) {
    return `pb-1 text-base transition-colors ${
      isActive
        ? 'border-b-2 border-primary font-bold text-primary'
        : 'border-b-2 border-transparent text-dark-gray-2 hover:text-primary'
    }`
  }

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-6 gap-y-4 px-4 pt-6 pb-4 md:px-10 md:pt-10 md:pb-8 xl:gap-x-10 xl:px-[100px]">

        {/* Botão do menu no celular */}
        <button
          type="button"
          className="text-dark-gray-2 md:hidden"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" aria-label="Página inicial" className="shrink-0">
          <Logo className="max-lg:h-[34px] max-lg:w-auto max-md:h-[30px]" />
        </Link>

        {/* Campo de busca */}
        <form
          role="search"
          onSubmit={realizarBusca}
          className="order-last flex h-[60px] w-full items-center rounded-lg bg-light-gray-3 px-5 lg:order-none lg:w-auto lg:min-w-0 lg:flex-1 lg:basis-0"
        >
          <label htmlFor="search" className="sr-only">
            Pesquisar produto
          </label>
          <input
            id="search"
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar produto..."
            className="h-full flex-1 bg-transparent text-base text-dark-gray-2 outline-none placeholder:text-light-gray"
          />
          <button type="submit" aria-label="Buscar" className="text-light-gray hover:text-primary">
            <Search size={22} />
          </button>
        </form>

        {/* Cadastro, login e carrinho */}
        <div className="ml-auto flex shrink-0 items-center gap-6 lg:ml-0 lg:gap-8">
          <Link
            to="/cadastro"
            className="hidden text-base text-dark-gray-2 underline decoration-dark-gray-2 md:inline"
          >
            Cadastre-se
          </Link>
          <Link
            to="/login"
            className="hidden h-10 w-[114px] items-center justify-center rounded bg-primary text-sm font-bold text-white transition-colors hover:bg-tertiary md:flex"
          >
            Entrar
          </Link>
          <img src={miniCart} alt="Carrinho de compras" className="size-6" />
        </div>

        {/* Navegação no desktop */}
        <nav aria-label="Navegação principal" className="hidden w-full md:block">
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={estiloLink}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menu no celular */}
      {menuAberto && (
        <nav aria-label="Navegação mobile" className="border-t border-light-gray-2 px-4 py-6 md:hidden">
          <p className="mb-4 text-base font-bold text-dark-gray-2">Páginas</p>
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={estiloLink}
                  onClick={() => setMenuAberto(false)}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <hr className="my-6 border-light-gray-2" />
          <Link
            to="/login"
            onClick={() => setMenuAberto(false)}
            className="flex h-10 items-center justify-center rounded bg-primary text-sm font-bold text-white"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            onClick={() => setMenuAberto(false)}
            className="mt-4 block text-center text-base text-dark-gray-2 underline"
          >
            Cadastre-se
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';


// Componente de menuHamburger para smartphones e telas menores
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Produtos', href: '/produtos' },
    { label: 'Categorias', href: '/categorias' },
    { label: 'Meus Pedidos', href: '/meus-pedidos' },
  ];
 
  return (
    <div className="relative lg:hidden">
      {/* Botão Hamburgermenu */}
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span
            className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>
     
      {/* Menu cascata*/}
      <nav
        className={`fixed top-0 left-0 h-full w-80 bg-white border border-gray-200 shadow-xl z-50 p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ willChange: 'transform' }}
      >
        <span className='block text-lg font-bold text-dark-gray-2 mb-5'>
          Páginas
        </span>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.href}
            className={({ isActive }) =>
              'block mb-5' + (isActive
                ? ' text-primary underline decoration-2 underline-offset-5 font-bold'
                : ' text-dark-gray-2 font-bold')
            }
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <div className='flex flex-col items-center mt-70'>
          <Button
            label="Entrar"
            className="w-full h-10 bg-primary text-white rounded-md"
          />
          <a href="" className="text-dark-gray-2 hover:text-primary hover:underline text-[14px] font-bold block mt-5">
            Cadastre-se
          </a>
        </div>
      </nav>
     
      {/* Fundo da pagina ficar cinza */}
      <div
        className={`fixed inset-0 bg-gray-600 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}
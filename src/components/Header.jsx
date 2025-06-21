import React from "react";
import Logo from "./Logo";
import { NavLink, Link } from "react-router-dom";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Badge } from 'primereact/badge';
import MenuHamburger from "./MenuHamburger";

// Cabeçalho da página
const Header = () => {
  return (
    <header className="lg:w-full">
      {/* Cabeçalho para desktop e mobile, menuhamburger só aparece no mobile */}
      <div className="lg:flex lg:flex-row lg:items-center lg:mt-6 lg:mb-6 lg:mr-10 lg:ml-10 lg:justify-between flex justify-between p-5">
        <MenuHamburger />
        
        {/* Logo */}
        <Logo variant="header"/>
        
        {/* Campo de pesquisa - não funciona :( */}
        <IconField iconPosition="right" className="hidden lg:block w-150">
          <InputText
            className="w-full h-[30px] border-none rounded-[14px]"
            placeholder="Pesquisar produto..."
            type="text"
          />
          <InputIcon className="cursor-pointer pi pi-search" />
        </IconField>
        
        {/* Link para cadastro, ira para a página de cadastro */}
        <Link to="/Cadastro" className="text-dark-gray-2 hover:text-primary hover:underline text-[14px] font-bold hidden lg:block">
          Cadastre-se
        </Link>
        
        {/* Botão Entrar, agora ele vai para um login */}
        <Link
        to="/Entrar"
        >
        <Button
          label="Entrar"
          className="bg-primary text-white w-30 h-10 rounded-md hidden lg:block"
        />
        </Link>

        {/* Ícone do carrinho - não funciona :( */}
        <Badge value="2" className="bg-primary hidden lg:block"></Badge>
        <img className="cursor-pointer" src={`/assets/mini-cart.svg`} alt="Carrinho" />
        

      </div>
      
      {/* Navegação para desktop, não aparece no mobile e no tablet, vai para as outras páginas e erro 404 */}
      <div className="hidden lg:flex lg:flex-row lg:gap-10 lg:items-center lg:mt-5 lg:mb-6 lg:mr-10 lg:ml-10 justify-between p-5">
        <nav>
          <ul className="flex gap-[40px] list-none ">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? " text-primary underline decoration-2 underline-offset-5 font-bold"
              : "text-dark-gray-2 font-bold")}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/produtos" className={({ isActive }) => (isActive ? " text-primary underline decoration-2 underline-offset-5 font-bold"
              : "text-dark-gray-2 font-bold")}>Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/categorias" className={({ isActive }) => (isActive ? " text-primary underline decoration-3 underline-offset-5 font-bold"
              : "text-dark-gray-2 font-bold")}>Categorias</NavLink>
            </li>
            <li>
              <NavLink to="/meus-pedidos" className={({ isActive }) => (isActive ? " text-primary underline decoration-2 underline-offset-5 font-bold"
              : "text-dark-gray-2 font-bold")}>Meu Pedidos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
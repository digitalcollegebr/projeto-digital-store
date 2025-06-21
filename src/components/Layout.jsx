import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


//Pagina layout onde se encontra a estrutura principal
//como o Header e Footer que ficaram sempre avista na pagina
const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Header />

   <main className='flex-1'>
      <Outlet />      
    </main>

    <Footer />
  </div>
);

export default Layout;
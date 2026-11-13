import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Layout básico que envolve todas as páginas com header e footer, como pede a doc
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

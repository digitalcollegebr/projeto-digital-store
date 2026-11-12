import Header from '../../components/Header';
import Footer from '../../components/Footer';

/**
 * Layout padrão: Header + conteúdo da página (children) + Footer.
 */
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

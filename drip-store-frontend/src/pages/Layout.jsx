import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

/** Layout comum: Header + conteúdo da página (children) + Footer. */
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

import { Link } from 'react-router-dom';
import Layout from './Layout';
import Gallery from '../components/Gallery/Gallery';
import Section from '../components/Section/Section';
import ProductListing from '../components/ProductListing/ProductListing';
import CategoryIcons from '../components/CategoryIcons/CategoryIcons';
import SpecialOffer from '../components/SpecialOffer/SpecialOffer';
import useProducts from '../hooks/useProducts';
import { homeSlides, collections, featuredCategories } from '../data/products';
import './pages.css';

export default function HomePage() {
  const { products } = useProducts();

  return (
    <Layout>
      <Gallery images={homeSlides} width="1440" height="681" className="home__gallery" />

      <div className="container page">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="home__collections">
            {collections.map((item) => (
              <div key={item.src} className="home__collection">
                <img src={item.src} alt={item.alt} />
                <span className="home__collection-badge">{item.discount}% OFF</span>
                <Link to={`/products?filter=${item.filter}`} className="home__collection-cta">
                  Comprar
                </Link>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Coleções em destaque" titleAlign="center">
          <CategoryIcons categories={featuredCategories} />
        </Section>

        <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>

      <SpecialOffer
        image="/product-thumb-5.jpeg"
        eyebrow="Oferta especial"
        title="Air Jordan edição de colecionador"
        text="Utilizando materiais premium e acabamentos exclusivos, o Air Jordan edição de colecionador une conforto, estilo e história em cada detalhe. Uma peça para quem vive a cultura sneaker."
        cta={{ text: 'Ver Oferta', href: '/product/5' }}
      />
    </Layout>
  );
}

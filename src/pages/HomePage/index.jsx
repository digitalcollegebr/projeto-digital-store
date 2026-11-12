import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import useStoreData from '../../hooks/useStoreData';
import { toCardProps } from '../../services/api';
import './HomePage.css';

const HOME_SLIDES = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ src: `/home-slide-${n}.jpeg` }));

const COLLECTIONS = [
  { image: '/collection-1.png', alt: 'Novo drop Supreme', discount: '30% OFF', filter: 'Camiseta' },
  { image: '/collection-2.png', alt: 'Coleção Adidas', discount: '30% OFF', filter: 'Adidas' },
  { image: '/collection-3.png', alt: 'Novo Beats Bass', discount: '30% OFF', filter: 'Headphone' },
];

const CATEGORY_ICONS = [
  { name: 'Camisetas', icon: 'M8 4 4 7l2 3 2-1v11h8V9l2 1 2-3-4-3h-2a2 2 0 0 1-4 0z' },
  { name: 'Calças', icon: 'M7 3h10l1 18h-4l-2-11-2 11H6z' },
  { name: 'Bonés', icon: 'M4 15a8 8 0 0 1 16 0zm0 0h17v2H4z' },
  { name: 'Headphones', icon: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H4zm13 0h3v6h-3z' },
  { name: 'Tênis', icon: 'M3 15V9l4 1 3-3 3 4 8 2v2zm0 0h18v3H3z' },
];

/** Página inicial: slide, coleções em destaque e produtos em alta. */
export default function HomePage() {
  const { products, categories, loading } = useStoreData();
  const trending = products.slice(0, 8).map((p) => toCardProps(p, categories));

  return (
    <Layout>
      <Gallery images={HOME_SLIDES} width="1440" height="681" />

      <div className="container">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="home__collections">
            {COLLECTIONS.map((c) => (
              <div className="home__collection" key={c.image}>
                <img src={c.image} alt={c.alt} />
                <span className="home__collection-tag">{c.discount}</span>
                <Link to={`/products?filter=${encodeURIComponent(c.filter)}`} className="home__collection-buy">
                  Comprar
                </Link>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Coleções em destaque" titleAlign="center">
          <ul className="home__categories">
            {CATEGORY_ICONS.map((cat) => (
              <li key={cat.name}>
                <Link to={`/products?filter=${encodeURIComponent(cat.name.slice(0, -1))}`}>
                  <span className="home__category-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d={cat.icon} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          {loading ? <p className="status-message">Carregando produtos...</p> : <ProductListing products={trending} />}
        </Section>
      </div>
    </Layout>
  );
}

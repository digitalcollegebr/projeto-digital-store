import { Link } from 'react-router-dom';
import { Footprints, Headphones, Shirt } from 'lucide-react';
import { getCollections, getProducts } from '../lib/catalog';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

// Mantemos somente as artes que funcionam no layout com fundo transparente.
// O home-slide-2 foi retirado: seu recorte ficou incompleto no banner.
const slides = [
  { src: '/store/nike-air-force-white-red.png', id: 'classic' },
  { src: '/store/home-slide-4-cutout.png', id: 'jordan' }
];

const categories = [
  ['Camisetas', 'Roupas', Shirt],
  ['Calças', 'Roupas'],
  ['Bonés', 'Acessórios'],
  ['Headphones', 'Acessórios', Headphones],
  ['Tênis', 'Calçados', Footprints]
];

function CategoryIcon({ label, icon: Icon }) {
  if (Icon) return <Icon size={31} strokeWidth={1} aria-hidden="true" />;
  return <svg width="31" height="31" viewBox="0 0 32 32" fill="none" stroke="currentColor" aria-hidden="true">
    {label === 'Calças'
      ? <path d="M10 4h12l4 24h-7l-3-15-3 15H6l4-24Zm0 4h12M16 4v9" />
      : <path d="M6 21v-3a10 10 0 0 1 20 0v3H6Zm0 0-3 3h12l5-3m-4-13v13" />}
  </svg>;
}

export default function HomePage() {
  const products = getProducts({ featured: true });
  const collections = getCollections();
  return <>
    <div className="hero">
      <Gallery images={slides} width={1440} height={681} alt="Tênis Nike branco e vermelho" hero />
      <div className="container hero-copy">
        <div>
          <p className="hero-kicker">Melhores ofertas personalizadas</p>
          <h1>Queima de<br /> estoque Nike&nbsp;🔥</h1>
          <p className="hero-description">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
          <Link to="/products?brand=Nike" className="primary-button">Ver Ofertas</Link>
        </div>
      </div>
    </div>
    <div className="container home-content">
      <Section title="Coleções em destaque" className="collections-section">
        <div className="collections-grid">
          {collections.map(({ title, image, category, brand }) => {
            const filters = brand ? { category, brand } : { category };
            const available = getProducts(filters).length > 0;
            return (
              <Link key={title} to={`/products?${new URLSearchParams(filters)}`} className="collection-card">
                <img src={image} alt={title} />
                {available && <span className="discount-tag">30% OFF</span>}
                <span className="collection-buy">{available ? 'Comprar' : 'Ver coleção'}</span>
              </Link>
            );
          })}
        </div>
      </Section>
      <Section title="Coleções em destaque" titleAlign="center" className="category-section">
        <ul className="category-icons">
          {categories.map(([label, category, icon]) => (
            <li key={label}>
              <Link to={`/products?category=${encodeURIComponent(category)}`}>
                <span><CategoryIcon label={label} icon={icon} /></span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Produtos em alta" link={{ text: 'Ver todos', href: '/products' }}>
        <ProductListing products={products} />
      </Section>
    </div>
  </>;
}

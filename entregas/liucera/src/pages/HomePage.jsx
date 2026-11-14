import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import ProductListing from '../components/ProductListing.jsx';
import Section from '../components/Section.jsx';
import { assets } from '../data/assets.js';
import { products } from '../data/products.js';

const collections = [
  { image: assets.collections[0], title: 'Tênis', category: 'Tênis' },
  { image: assets.collections[1], title: 'Camisetas', category: 'Camisetas' },
  { image: assets.collections[2], title: 'Bonés', category: 'Bonés' },
];

export default function HomePage() {
  return (
    <>
      <div className="home-hero">
        <Gallery
          images={assets.homeSlides}
          width="100%"
          height={681}
          className="home-gallery"
          alt="Destaque da Digital Store"
        />
        <div className="home-hero__copy">
          <span>Novidades Digital Store</span>
          <h1>Estilo que acompanha seu ritmo.</h1>
          <Link className="button button--primary" to="/products">
            Explorar produtos
          </Link>
        </div>
      </div>
      <div className="page-container home-content">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="collection-grid">
            {collections.map((collection) => (
              <Link
                className="collection-card"
                to={'/products?category=' + encodeURIComponent(collection.category)}
                key={collection.title}
              >
                <img src={collection.image} alt="" loading="lazy" />
                <span>{collection.title}</span>
                <span className="collection-card__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </Section>
        <Section
          title="Produtos em alta"
          link={{ text: 'Ver todos', href: '/products' }}
          className="home-products"
        >
          <ProductListing products={products} />
        </Section>
      </div>
    </>
  );
}

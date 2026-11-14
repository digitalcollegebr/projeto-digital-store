import { Link, useParams } from 'react-router-dom';
import BuyBox from '../components/BuyBox.jsx';
import Gallery from '../components/Gallery.jsx';
import ProductListing from '../components/ProductListing.jsx';
import ProductOptions from '../components/ProductOptions.jsx';
import Section from '../components/Section.jsx';
import { products } from '../data/products.js';

export default function ProductViewPage() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <section className="message-page">
        <span className="eyebrow">Produto não encontrado</span>
        <h1>Esse produto não está no catálogo.</h1>
        <Link className="button button--primary" to="/products">
          Voltar aos produtos
        </Link>
      </section>
    );
  }

  const recommended = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <div className="page-container product-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Produtos</Link>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <span>{product.brand}</span>
        <span>/</span>
        <span>{product.name}</span>
      </div>
      <div className="product-detail">
        <Gallery
          images={[{ src: product.image, alt: product.name }]}
          width={700}
          height={570}
          radius="4px"
          showThumbs
          className="product-detail__gallery"
          alt={product.name}
        />
        <BuyBox
          key={product.id}
          name={product.name}
          brand={product.brand}
          productType={product.style || product.category}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
        >
          {product.sizes?.length > 0 && (
            <ProductOptions
              key={product.id + '-sizes'}
              label="Escolha o tamanho"
              options={product.sizes}
              shape="square"
              type="text"
              selectedValue={product.id === 1 ? '41' : undefined}
            />
          )}
        </BuyBox>
      </div>
      <Section
        title="Produtos recomendados"
        link={{ text: 'Ver todos', href: '/products' }}
        className="recommended-products"
      >
        <ProductListing products={recommended} />
      </Section>
    </div>
  );
}

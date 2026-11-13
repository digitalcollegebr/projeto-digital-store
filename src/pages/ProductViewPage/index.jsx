import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import BuyBox from '../../components/BuyBox';
import ProductOptions from '../../components/ProductOptions';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import useStoreData from '../../hooks/useStoreData';
import { getProduct, toCardProps } from '../../services/api';
import './ProductViewPage.css';

/** Página de visualização do produto: galeria, buy box e produtos recomendados. */
export default function ProductViewPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(undefined); // undefined = carregando, null = não encontrado
  const [message, setMessage] = useState('');
  const { products, categories } = useStoreData();

  useEffect(() => {
    let active = true;
    setProduct(undefined);
    setMessage('');
    getProduct(id).then((p) => active && setProduct(p));
    return () => {
      active = false;
    };
  }, [id]);

  const images = useMemo(() => (product?.images || []).map((img) => ({ src: img.content })), [product]);
  const related = products.filter((p) => String(p.id) !== String(id)).slice(0, 4).map((p) => toCardProps(p, categories));

  if (product === undefined) {
    return <Layout><p className="status-message">Carregando produto...</p></Layout>;
  }

  if (product === null) {
    return (
      <Layout>
        <div className="container status-message">
          <h1>Produto não encontrado</h1>
          <Link to="/products" className="btn-primary">Ver todos os produtos</Link>
        </div>
      </Layout>
    );
  }

  const card = toCardProps(product, categories);
  const brand = product.name.split(' - ')[0];

  return (
    <Layout>
      <div className="container">
        <nav className="product-view__breadcrumb" aria-label="Você está em">
          <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> / {card.category && <>{card.category} / </>}
          <span>{product.name}</span>
        </nav>

        <div className="product-view">
          <Gallery images={images} showThumbs width="700px" height="570px" radius="4px" className="product-view__gallery" />

          <BuyBox
            name={product.name}
            reference={`Casual | ${brand} | REF:${String(product.id).padStart(8, '0')}`}
            stars={4.7}
            rating={90}
            price={product.price}
            priceDiscount={card.priceDiscount}
            description={product.description}
            onBuy={() => setMessage('Produto adicionado ao carrinho!')}
          >
            {product.options?.map((option) => (
              <ProductOptions
                key={option.id}
                title={option.title}
                options={option.values}
                shape={option.shape}
                type={option.type}
                radius={option.radius}
              />
            ))}
          </BuyBox>
        </div>
        {message && <p className="product-view__message" role="status">{message}</p>}

        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={related} />
        </Section>
      </div>
    </Layout>
  );
}

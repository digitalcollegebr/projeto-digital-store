import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Layout from './Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';

import { getProducts } from '../services/api';
import { categoryLabels } from '../data/products';

function ProductViewPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [adicionado, setAdicionado] = useState(false);

  // Busca o produto e os recomendados quando o ID da URL muda
  useEffect(() => {
    setCarregando(true);
    setErro(null);
    setAdicionado(false);
    setProduct(null);

    getProducts()
      .then((lista) => {
        const encontrado = lista.find((item) => item.id === Number(id));
        setProduct(encontrado ?? null);
        setRecommendedProducts(
          lista.filter((item) => item.id !== Number(id)).slice(0, 4)
        );
      })
      .catch(() => setErro('Não foi possível carregar o produto. Tente novamente.'))
      .finally(() => setCarregando(false));
  }, [id]);

  if (carregando) {
    return (
      <Layout>
        <p className="py-24 text-center text-dark-gray-3">Carregando...</p>
      </Layout>
    );
  }

  if (erro) {
    return (
      <Layout>
        <p className="py-24 text-center text-error">{erro}</p>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="mx-auto max-w-[1440px] px-4 py-24 text-center md:px-10 xl:px-[100px]">
          <h1 className="text-2xl font-bold text-dark-gray">
            Produto não encontrado
          </h1>
          <Link to="/products" className="mt-6 inline-block text-lg text-primary hover:underline">
            Ver todos os produtos
          </Link>
        </div>
      </Layout>
    );
  }

  const categoria = categoryLabels[product.category] ?? product.category;

  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-10 md:py-10 xl:px-[100px]">

        {/* Breadcrumb */}
        <nav aria-label="Trilha de navegação" className="mb-6 text-sm text-dark-gray-2">
          <ol className="flex flex-wrap gap-1">
            <li>
              <Link to="/" className="font-bold hover:text-primary">Home</Link>
              {' /'}
            </li>
            <li>
              <Link to="/products" className="hover:text-primary">Produtos</Link>
              {' /'}
            </li>
            <li>{categoria} /</li>
            <li className="text-dark-gray-3">{product.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row xl:gap-10">
          <div className="w-full shrink-0 lg:w-[55%] lg:max-w-[700px]">
            {/* A key faz a galeria voltar para a primeira imagem ao trocar de produto */}
            <Gallery
              key={product.id}
              images={product.images}
              showThumbs
              width="700"
              height="570"
              radius="4px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
              onBuy={() => setAdicionado(true)}
            >
              <div>
                <h2 className="mb-2 text-sm font-bold text-light-gray">Tamanho</h2>
                <ProductOptions
                  options={product.sizes}
                  shape="square"
                  type="text"
                  radius="4px"
                  label="Tamanho"
                />
              </div>

              <div>
                <h2 className="mb-2 text-sm font-bold text-light-gray">Cor</h2>
                <ProductOptions
                  options={product.colors}
                  shape="circle"
                  type="color"
                  label="Cor"
                />
              </div>
            </BuyBox>

            {adicionado && (
              <p role="status" className="mt-4 text-sm font-bold text-success">
                Produto adicionado ao carrinho!
              </p>
            )}
          </div>
        </div>

        <Section
          title="Produtos recomendados"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
          className="mt-16 md:mt-20"
        >
          <ProductListing products={recommendedProducts} columns={4} />
        </Section>
      </div>
    </Layout>
  );
}

export default ProductViewPage;

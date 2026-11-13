import { useEffect, useState } from 'react';
import Layout from './Layout';
import Gallery from '../components/Gallery';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import { getProducts } from '../services/api';

// Página inicial da Digital Store
export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // Imagens do carrossel principal
  const homeSlides = [1, 2, 3, 4, 5, 6, 7, 8].map((numero) => ({
    src: `/home-slide-${numero}.jpeg`,
  }));

  const collections = [
    { src: '/collection-1.png', alt: 'Novo drop Supreme' },
    { src: '/collection-2.png', alt: 'Coleção Adidas' },
    { src: '/collection-3.png', alt: 'Novo Beats Bass' },
  ];

  // Busca os produtos na API quando a página abre
  useEffect(() => {
    getProducts()
      .then((lista) => setProducts(lista))
      .catch(() => setErro('Não foi possível carregar os produtos. Tente novamente.'))
      .finally(() => setCarregando(false));
  }, []);

  // Os 8 primeiros produtos aparecem em "Produtos em alta"
  const produtosEmAlta = products.slice(0, 8);

  return (
    <Layout>
      {/* Carrossel com setas e bolinhas, limitado à largura do conteúdo */}
      <Gallery
        images={homeSlides}
        width="1440"
        height="681"
        showDots
        className="mx-auto"
        slideClassName="max-sm:min-h-[260px] sm:max-md:min-h-[320px]"
      />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 px-4 py-14 md:gap-20 md:px-10 md:py-20 xl:px-[100px]">
        {/* Coleções: só as 3 imagens, sem selo e sem botão */}
        <Section title="Coleções em destaque" titleAlign="center">
          <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
            {collections.map((collection) => (
              <li key={collection.src}>
                <img
                  src={collection.src}
                  alt={collection.alt}
                  width={405}
                  height={251}
                  className="w-full rounded object-cover"
                />
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: 'Ver todos', href: '/products' }}
        >
          {carregando && (
            <p className="py-16 text-center text-dark-gray-3">Carregando...</p>
          )}
          {erro && (
            <p className="py-16 text-center text-error">{erro}</p>
          )}
          {!carregando && !erro && (
            <ProductListing products={produtosEmAlta} columns={4} />
          )}
        </Section>
      </div>
    </Layout>
  );
}

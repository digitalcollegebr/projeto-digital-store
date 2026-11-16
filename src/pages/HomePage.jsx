import Layout from "../components/Layout";
import { Gallery } from "../components/Gallery/Gallery";
import { Section } from "../components/Section/Section";
import { ProductListing } from "../components/ProductListing/ProductListing";
import './HomePage.css';

export const HomePage = () => {
  // 5.1 - Dados do Slide de Imagens (Removido "public/")
  const slideImages = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
    { src: "/home-slide-4.jpeg" },
    { src: "/home-slide-5.jpeg" },
  ];

  // 5.2 - Dados das Coleções em Destaque (Removido "public/")
  const collections = [
    { id: 1, image: "/collection-1.png", alt: "Coleção 1" },
    { id: 2, image: "/collection-2.png", alt: "Coleção 2" },
    { id: 3, image: "/collection-3.png", alt: "Coleção 3" },
  ];

  // 5.3 - Dados dos Produtos em Alta (Removido "public/")
  const trendingProducts = [
    {
      name: "K-Swiss V8 - Masculino",
      image: "/product-thumb-1.jpeg",
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Tênis K-Swiss V8 - Feminino",
      image: "/product-thumb-2.jpeg",
      price: 49.9,
    },
    {
      name: "Tênis Esportivo Casual Runner",
      image: "/product-thumb-3.jpeg",
      price: 250,
      priceDiscount: 199.9,
    },
    {
      name: "Sapato Social Elegance",
      image: "/product-thumb-4.jpeg",
      price: 180,
    },
    {
      name: "Tênis Urban Streetwear",
      image: "/product-thumb-5.jpeg",
      price: 220,
      priceDiscount: 179.9,
    },
    {
      name: "Sandália Conforto Dia a Dia",
      image: "/product-thumb-1.jpeg",
      price: 110,
    },
    {
      name: "Bota Adventure Couro",
      image: "/product-thumb-2.jpeg",
      price: 320,
      priceDiscount: 289.9,
    },
    {
      name: "Chinelo Anatômico Relax",
      image: "/product-thumb-3.jpeg",
      price: 79.9,
    },
  ];

  return (
    <Layout>
      <div className="home-container">
        <section className="home-gallery-section">
          <Gallery
            images={slideImages}
            height={681}
            radius="0px"
          />
        </section>

        <div className="home-content">
          <Section title="Coleções em destaque" titleAlign="center">
            <div className="collections-grid">
              {collections.map((collection) => (
                <div key={collection.id} className="collection-card">
                  <img
                    src={collection.image}
                    alt={collection.alt}
                    className="collection-image"
                  />
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Produtos em alta"
            titleAlign="left"
            link={{ text: "Ver todos", href: "/products" }}
          >
            <ProductListing products={trendingProducts} />
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
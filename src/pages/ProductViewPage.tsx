import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Layout from "./Layout";

import BuyBox from "../components/BuyBox";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import { Link, useNavigate } from "react-router-dom";

// Imagens de exemplo
import blue from "../assets/products/nike-blue.png";
import black from "../assets/products/nike-black.png";
import green from "../assets/products/nike-green.png";

// Simulação dos produtos cadastrados
const productList = [
  {
    id: "1",
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    category: "Tênis",
    brand: "Nike",
    reference: "Casual | Nike | REF: DD84769111",
    stars: 4,
    rating: 90,
    price: 249.99,
    priceDiscount: 219.0,
    images: [
      { src: blue, className: "bg-blue-100" },
      { src: black, className: "bg-amber-100" },
      { src: green, className: "bg-green-100" },
    ],
    description:
      "Tênis ideal para o dia a dia com conforto e estilo. Produzido com materiais sustentáveis, proporciona amortecimento leve e durabilidade.",
    sizes: ["39", "40", "41", "42"],
    colors: [
      { id: 1, color: "bg-blue-500" },
      { id: 2, color: "bg-red-500" },
      { id: 3, color: "bg-yellow-500" },
      { id: 4, color: "bg-purple-500" },
    ],
  },
];

export default function ProductViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    const found = productList.find((p) => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedImage(found.images[0].src);
      setSelectedClass(found.images[0].className);
    } else {
      navigate("/error"); // redireciona se não encontrar
    }
  }, [id, navigate]);

  const handleThumbnailClick = (image: string, className: string) => {
    setSelectedImage(image);
    setSelectedClass(className);
  };

  const handleClick = () => window.scrollTo(0, 0);

  if (!product) return null;

  return (
    <Layout>
      <div className="py-10 pt-20 md:pt-5 flex flex-col justify-center items-center gap-5 bg-light-gray-3 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div>
            <Link to="/products">
              <h3 className="py-3 pb-5 text-md font-medium text-dark-gray-2">
                Home / Produtos / {product.category} / {product.brand} /{" "}
                <br className="md:hidden" />
                <span>{product.name}</span>
              </h3>
            </Link>

            <div>
              <div className="mb-5">
                <Swiper
                  slidesPerView={1}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  pagination={{ clickable: true }}
                  navigation
                  className="h-[40vh] w-[90vw] md:h-[50vh] md:w-[50vw] transition-all duration-200"
                >
                  <SwiperSlide>
                    <img
                      src={selectedImage}
                      alt="Produto"
                      className={`${selectedClass} p-5 object-cover w-full m-auto rounded-md px-20 sm:px-48 md:px-20 lg:px-48`}
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="flex justify-center mb-5">
  {product.images.map((item: { src: string; className: string }, index: number) => (
    <img
      key={index}
      src={item.src}
      alt={`thumbnail-${index}`}
      className={`w-[110px] p-2 h-[95px] object-cover rounded-md mx-1 cursor-pointer ${item.className} ${
        selectedImage === item.src ? "border-4 border-primary" : ""
      }`}
      onClick={() => handleThumbnailClick(item.src, item.className)}
    />
  ))}
</div>

            </div>
          </div>

          <div className="px-5 md:px-0">
            <BuyBox
              name={product.name}
              reference={product.reference}
              stars={product.stars}
              rating={product.rating}
              price={product.priceDiscount}
              priceDiscount={product.price}
              description={product.description}
              sizes={product.sizes}
              colors={product.colors}
            />
          </div>
        </div>

        <div onClick={handleClick}>
          <Section
            className="w-full pt-10 pb-5 px-2 box-border"
            title="Produtos em alta"
            link={{ text: "Ver todos" }}
          >
            <div className="hidden md:flex">
              <ProductListing len={4} />
            </div>
            <div className="md:hidden">
              <ProductListing len={2} />
            </div>
          </Section>
        </div>
      </div>
    </Layout>
  );
}

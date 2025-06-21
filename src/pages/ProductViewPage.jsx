import React from "react";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import Gallery from "../components/Gallery";
import produtos from "../components/Produtos.json";
import BuyBox from "../components/BuyBox";
import { useParams } from "react-router-dom";

const cores = ["#5EE7FF", "#FF6B6B", "#555", "#6C63FF"];

const ProductViewPage = () => {
  const { id } = useParams();
  const produto = produtos.find((p) => String(p.id) === String(id));
  
  if (!produto) {
    return <div className="p-8 text-center text-red-500">Produto não encontrado.</div>;
  }
  return (
    <div className="flex flex-col px-4 py-4 bg-gray-100 md:pl-15">
      <div className="w-full mb-4">
        <h3 className="text-xs">
          <strong>Home</strong> / Produtos / {produto.Categoria} / {produto.Marca} / {produto.Nome}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 pt-3">
          <Gallery 
            produtoImagem={produto.imagem} 
            showIndicators={false}
            colors={cores} 
          />
        </div>
        {/* Passando o produto como prop para o BuyBox */}
        <BuyBox produto={produto} />
      </div>
      <div className="flex flex-col justify-between max-w-6xl mx-auto mt-9 px-2">
        <Section
          title="Produtos Relacionados"
          titleAlign="left"
          link={{ href: "/produtos", text: "Ver tudo →" }}
        />
        <div className="grid grid-cols-1 md:flex gap-3 mt-5 w-full">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;
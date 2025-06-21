import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Section from "../components/Section";
import produtosData from './Produtos.json';

// Contêiner principal: Ocupa no mínimo 100% da altura da tela com fundo cinza claro.
const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <main>{children}</main>
  </div>
);

// Componente para ordenação dos produtos
const SortFilterPureCSS = ({ label, options, defaultValue, onSelect }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm font-medium text-gray-700">{label}:</label>
      <select
        value={defaultValue}
        onChange={(e) => onSelect(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

// Componente para exibir informações dos resultados
const ResultadosInfo = ({ quantidade }) => {
  return (
    <div className="flex flex-col items-start min-w-[200px]">
      <div
        className="h-[28px] flex items-center justify-between px-4 mb-1"
        style={{
          color: "#474747",
          background: "#F5F5F5",
          borderRadius: "8px",
          fontSize: "15px",
          fontWeight: 500,
        }}
      >
        <span>
          Todos os produtos - {quantidade} produto{quantidade !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
};

const ProductListingPage = () => {
  // Estado para os produtos atualmente exibidos
  const [products, setProducts] = useState([]);
  // Estado para a ordem de classificação selecionada
  const [sortOrder, setSortOrder] = useState("relevance");
  // Estado para indicar se os dados estão sendo carregados
  const [isLoading, setIsLoading] = useState(false);

  // Array de todos os produtos disponíveis
  const allProducts = produtosData;

  // Define as opções disponíveis para ordenação dos produtos
  const sortOptions = [
    { text: "mais relevantes", value: "relevance" },
    { text: "menor preço", value: "price_asc" },
    { text: "maior preço", value: "price_desc" },
  ];

  // Função para aplicar ordenação aos produtos
  const applySorting = () => {
    setIsLoading(true);

    setTimeout(() => {
      let sortedProducts = [...allProducts];

      // Aplica a ordenação com base na opção selecionada
      sortedProducts.sort((a, b) => {
        switch (sortOrder) {
          case "price_asc":
            return (a.Preco || 0) - (b.Preco || 0);
          case "price_desc":
            return (b.Preco || 0) - (a.Preco || 0);
          case "rating_desc":
            return (b.rating || 0) - (a.rating || 0);
          case "newest":
            return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
          case "relevance":
          default:
            // Ordenação por relevância baseada no preço (produtos mais caros primeiro como exemplo)
            return (b.Preco || 0) - (a.Preco || 0);
        }
      });

      setProducts(sortedProducts);
      setIsLoading(false);
    }, 300);
  };

  // Hook de efeito para aplicar ordenação quando necessário
  useEffect(() => {
    applySorting();
  }, [sortOrder]);

  // Handler para mudança na ordenação
  const handleSortChange = (newValue) => {
    setSortOrder(newValue);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Layout principal sem painel de filtros */}
        <div className="w-full">
          {/* Header com informações e ordenação */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <ResultadosInfo quantidade={products.length} />
            <SortFilterPureCSS
              label="Ordenar por"
              options={sortOptions}
              defaultValue={sortOrder}
              onSelect={handleSortChange}
            />
          </div>

          {/* Loading state */}
          {isLoading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Grid de Produtos */}
          <div className="mt-10">
            <Section
                        
            >
              <div className="px-4">
                <div className="">
                  {products.slice(0, 2).map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.Nome}
                      category={product.Categoria}
                      imageUrl={product.imagem}
                      price={product.Preco}
                      discountPrice={product.PrecoDesconto}
                    />
                  ))}
                  {products.length === 0 && !isLoading && (
                    <div className="col-span-full text-center text-gray-500 py-12">
                      Nenhum produto encontrado.
                    </div>
                  )}
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
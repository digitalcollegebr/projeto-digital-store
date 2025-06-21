import React from "react";
import produtos from "./Produtos.json";
import { Link } from "react-router-dom";

const ProductCard = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
    {produtos.slice(0, 8).map((produto) => (
      <div key={produto.id} className="border-none rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 group">
        <Link to={`/produtos/${produto.id}`} className="block">
          <div className="overflow-hidden rounded-lg mb-3">
            <img
              src={produto.imagem.replace(/^public\//, "/")}
              alt={produto.Nome}
              className="w-full h-40 sm:h-32 md:h-40 lg:h-32 object-cover transition duration-300 group-hover:scale-110"
              onClick={() => window.scrollTo({ top: 200, behavior: "smooth" })}
              loading="lazy"
            />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-bold text-sm sm:text-base lg:text-sm xl:text-base group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {produto.Nome}
            </h3>
            
            <p className="text-xs sm:text-sm text-gray-500 capitalize">
              {produto.Categoria}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-center mt-2">
              <span className="line-through text-gray-400 text-xs sm:text-sm order-2 sm:order-1">
                R$ {produto.Preco.toFixed(2)}
              </span>
              <span className="text-black font-bold text-base sm:text-sm md:text-base transition lg:group-hover:rotate-12 lg:group-hover:scale-120 duration-300 group-hover:text-green-500 order-1 sm:order-2">
                R$ {produto.PrecoDesconto.toFixed(2)}
              </span>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

export default ProductCard;
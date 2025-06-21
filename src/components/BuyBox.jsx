import React from 'react';
import { Button } from 'primereact/button';
import ProductOptions from './ProductOptions';
import IconsStar from './IconsStar';

const BuyBox = ({ produto }) => { // Recebendo produto como prop
  // Verificação de segurança caso produto seja undefined
  if (!produto) {
    return <div className="w-full md:w-1/2 p-4">Carregando...</div>;
  }

  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-lg font-semibold mb-2">
        {produto.Nome}
      </h2>
      <h3 className="text-xs text-gray-600">
        Casual / {produto.Marca} / REF:38416711
      </h3>
      <div className="flex flex-wrap md:flex-nowrap justify-start items-center pt-2 pb-2 gap-1">
        <div className="flex">
          <IconsStar className="text-[#f6aa1c]" />
          <IconsStar className="text-[#f6aa1c]" />
          <IconsStar className="text-[#f6aa1c]" />
          <IconsStar className="text-[#f6aa1c]" />
        </div>
        <div className="bg-[#f6aa1c] w-[70px] h-[25px] rounded-sm flex items-center justify-center gap-1">
          <h3 className="text-white text-sm">4.7</h3>
          <IconsStar className="text-white size-4" />
        </div>
        <p className="text-xs text-gray-400">({produto.Visualizacaos} avaliações)</p>
      </div>
      <div className="flex items-baseline gap-2">
        <h2 className="text-xl font-bold">
          <span className="text-sm pr-1">R$</span>
          {produto.PrecoDesconto.toFixed(2)}
        </h2>
        <span className="text-gray-400 line-through text-sm">
          R$ {produto.Preco.toFixed(2)}
        </span>
      </div>
      <div>
        <h2 className="text-sm font-semibold text-gray-600 pt-3 pb-2">
          Descrição do produto
        </h2>
        <p className="text-xs text-gray-700 md:text-base w-full md:w-[80%]">
          {produto.Descricao}
        </p>
      </div>
      <ProductOptions />
      <div className="pt-4">
        <Button
          label="Comprar"
          className="bg-warning text-white mt-5 w-50 h-10 rounded-md hidden lg:block transition duration-500 hover:brightness-110 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default BuyBox;
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Gallery = ({ images, colors, produtoImagem }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ModoProduto = produtoImagem && colors?.length;
  const slides = ModoProduto
    ? colors.map((color) => ({ imagem: produtoImagem, color }))
    : images;

  useEffect(() => {
    setActiveIndex(0);
  }, [slides?.length]);

  const renderSlide = (item) => {
    if (item.color) {
      return (
        <div className="flex justify-center items-center h-[400px]">
          <div
            className="rounded-xl overflow-hidden flex items-center justify-center"
            style={{ width: 350, height: 350, background: item.color }}
          >
            <img
              src={item.imagem}
              alt="Produto"
              className="max-h-[250px] object-contain"
              style={{ width: "80%", height: "80%" }}
            />
          </div>
        </div>
      );
    }
    if (item.titulo || item.subtitulo || item.descricao) {
      return (
        <div className="relative flex items-center">
          <div className="max-w-[500px]">
            {item.subtitulo && (
              <p className="text-[16px] mb-[20px] text-warning">
                {item.subtitulo}
              </p>
            )}
            {item.titulo && (
              <p className="text-[64px] max-w-[500px] mb-[20px] font-bold">
                {item.titulo}
              </p>
            )}
            {item.descricao && (
              <p className="text-[18px] max-w-[450px] mb-[20px]">
                {item.descricao}
              </p>
            )}
            <Link to="/produtos">
              <Button
                label="Ver Ofertas"
                className="w-[220px] h-[48px] bg-primary text-white rounded-md"
              />
            </Link>
          </div>
          <div>
            <img
              src={item.imagem}
              alt="Banner"
              className="absolute left-[450px] top-[190px] -translate-y-1/2 w-[60%]"
            />
            {item.detalhe && (
              <img
                src={item.detalhe}
                alt="Ornamento"
                className="absolute left-[1000px] top-[60px] -translate-y-1/2 w-[10%]"
              />
            )}
          </div>
        </div>
      );
    }
    return (
      <div className="flex justify-center items-center h-[400px]">
        <img
          src={item.imagem}
          alt="Imagem"
          className="max-h-[350px] object-contain"
        />
      </div>
    );
  };

  const renderThumbnails = () => (
    <div className="flex justify-center gap-2 mt-4">
      {slides.map((slide, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIndex(idx)}
          className={`border-2 rounded p-0.5 ${
            activeIndex === idx ? "border-primary" : "border-gray-300"
          }`}
          style={{ background: slide.color || "#fff" }}
        >
          <img
            src={slide.imagem}
            alt={`Miniatura ${idx + 1}`}
            className="w-12 h-12 object-contain"
          />
        </button>
      ))}
    </div>
  );

  if (!slides?.length) return null;

  return (
    <div className="justify-center">
      {!ModoProduto ? (
        <Carousel
          key={slides.length + "-home"}
          value={slides}
          numVisible={1}
          numScroll={1}
          autoplayInterval={5000}
          circular
          showIndicators
          orientation="horizontal"
          showNavigators={true}
          itemTemplate={renderSlide}
        />
      ) : (
        <Carousel
          key={slides.length + "-produto"}
          value={slides}
          numVisible={1}
          numScroll={1}
          circular={false}
          showIndicators={false}
          showNavigators={false}
          itemTemplate={renderSlide}
          page={activeIndex}
          onPageChange={(e) => setActiveIndex(e.page)}
        />
      )}
      {ModoProduto && renderThumbnails()}
    </div>
  );
};

export default Gallery;

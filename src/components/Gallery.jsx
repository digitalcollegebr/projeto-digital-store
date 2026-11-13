import { useState } from 'react';

import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

// Converte o valor da prop para CSS (aceita número, "700" ou "700px")
function toCssSize(value) {
  if (typeof value === 'number') return `${value}px`;
  const texto = String(value);
  if (texto.endsWith('px') || texto.endsWith('%')) return texto;
  return `${texto}px`;
}

// Galeria / carrossel
// Props: images (string ou { src }), width, height, radius, showThumbs, showDots, showArrows
export default function Gallery({
  images = [],
  className = '',
  width = '100%',
  height = 681,
  radius = '0px',
  showThumbs = false,
  showArrows = true,
  showDots = false,
  slideClassName = '',
}) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return <div>Nenhuma imagem disponível</div>;
  }

  // Aceita tanto '/foto.jpg' quanto { src: '/foto.jpg' }
  const getSrc = (image) => (typeof image === 'string' ? image : image.src);

  const isFirst = current === 0;
  const isLast = current === images.length - 1;

  // Proporção do slide (na Home fica 1440 / 681)
  const widthNumber = parseFloat(String(width));
  const heightNumber = parseFloat(String(height));
  const aspectRatio =
    !Number.isNaN(widthNumber) && String(width) !== '100%'
      ? `${widthNumber} / ${heightNumber}`
      : `1440 / ${heightNumber}`;

  const arrowClass =
    'absolute top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full transition hover:bg-white/60 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent';

  return (
    <div
      className={className}
      style={{
        width: String(width) === '100%' ? '100%' : toCssSize(width),
        maxWidth: '100%',
      }}
    >
      {/* Slide principal */}
      <div
        className={`relative w-full overflow-hidden ${slideClassName}`}
        style={{ aspectRatio, borderRadius: radius }}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={getSrc(image)}
              src={getSrc(image)}
              alt={`Imagem ${index + 1} de ${images.length}`}
              aria-hidden={index !== current}
              className="h-full w-full shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Setas: param no primeiro e no último slide (não voltam ao início) */}
        {showArrows && (
          <>
            <button
              type="button"
              className={`${arrowClass} left-2 md:left-6`}
              onClick={() => setCurrent((prev) => prev - 1)}
              disabled={isFirst}
              aria-label="Imagem anterior"
            >
              <img src={arrowLeft} alt="" />
            </button>
            <button
              type="button"
              className={`${arrowClass} right-2 md:right-6`}
              onClick={() => setCurrent((prev) => prev + 1)}
              disabled={isLast}
              aria-label="Próxima imagem"
            >
              <img src={arrowRight} alt="" />
            </button>
          </>
        )}

        {/* Bolinhas na parte de baixo */}
        {showDots && images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-3">
            {images.map((image, index) => (
              <button
                type="button"
                key={getSrc(image)}
                aria-label={`Ir para imagem ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`size-3 rounded-full transition-colors ${
                  index === current ? 'bg-primary' : 'bg-light-gray-2'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Miniaturas (página do produto) */}
      {showThumbs && images.length > 1 && (
        <div className="mt-5 flex gap-3 overflow-x-auto pb-1 md:gap-5">
          {images.map((image, index) => (
            <button
              type="button"
              key={getSrc(image)}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}`}
              aria-current={index === current}
              className={`shrink-0 overflow-hidden border-2 ${
                index === current ? 'border-primary' : 'border-transparent'
              }`}
              style={{ borderRadius: radius }}
            >
              <img
                src={getSrc(image)}
                alt=""
                className="h-[60px] w-[74px] object-cover md:h-[95px] md:w-[117px]"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

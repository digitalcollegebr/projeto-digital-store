import { useEffect, useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import './Gallery.css';

/** Aceita "1440", 1440 ou "1440px" e devolve um valor CSS. */
function toCss(value) {
  if (value === undefined || value === null || value === '') return undefined;
  return /^\d+(\.\d+)?$/.test(String(value)) ? `${value}px` : String(value);
}

/**
 * Galeria (slide) de imagens com setas e miniaturas opcionais.
 * @param {{src: string}[]} images - Imagens do slide
 * @param {string|number} width - Largura máxima do slide (ex.: "1440")
 * @param {string|number} height - Altura do slide (ex.: "681")
 * @param {string} radius - Arredondamento das bordas (ex.: "4px")
 * @param {boolean} showThumbs - Exibe miniaturas (117x95) abaixo do slide
 * @param {string} className - Classe CSS extra para o elemento pai
 */
export default function Gallery({
  images = [], width, height, radius = '0', showThumbs = false, className = '',
}) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  // Volta para a primeira imagem quando a lista muda (ex.: outro produto)
  const imagesKey = images.map((image) => image.src).join('|');
  useEffect(() => setCurrent(0), [imagesKey]);

  if (!total) return null;

  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className={`gallery ${className}`} style={{ maxWidth: toCss(width) }}>
      <div className="gallery__viewport" style={{ height: toCss(height), borderRadius: radius }}>
        <div className="gallery__track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => (
            <div className="gallery__slide" key={`${image.src}-${index}`} aria-hidden={index !== current}>
              <img src={image.src} alt={`Imagem ${index + 1} de ${total}`} />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              className="gallery__arrow gallery__arrow--left"
              onClick={() => setCurrent((c) => c - 1)}
              disabled={isFirst}
              aria-label="Imagem anterior"
            >
              <img src={arrowLeft} alt="" />
            </button>
            <button
              type="button"
              className="gallery__arrow gallery__arrow--right"
              onClick={() => setCurrent((c) => c + 1)}
              disabled={isLast}
              aria-label="Próxima imagem"
            >
              <img src={arrowRight} alt="" />
            </button>
            {!showThumbs && (
              <div className="gallery__dots">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={`dot-${image.src}-${index}`}
                    className={index === current ? 'active' : undefined}
                    onClick={() => setCurrent(index)}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {showThumbs && total > 1 && (
        <div className="gallery__thumbs">
          {images.map((image, index) => (
            <button
              type="button"
              key={`thumb-${image.src}-${index}`}
              className={`gallery__thumb ${index === current ? 'gallery__thumb--active' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={image.src} alt="" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

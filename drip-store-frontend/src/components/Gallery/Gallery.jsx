import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import { toPx } from '../../utils/format';
import './Gallery.css';

/**
 * Galeria/slide de imagens com setas e miniaturas opcionais.
 * @param {{src: string}[]} images
 * @param {string|number} [width]  ex.: "1440" ou "700px"
 * @param {string|number} [height] ex.: "681" ou "570px"
 * @param {string} [radius]        ex.: "4px"
 * @param {boolean} [showThumbs]   exibe miniaturas 117x95 abaixo do slide
 * @param {string} [className]
 */
export default function Gallery({ images = [], width, height, radius = '0px', showThumbs = false, className = '' }) {
  const [current, setCurrent] = useState(0);
  const last = images.length - 1;

  // volta para a primeira imagem quando a lista muda (ex.: outro produto)
  useEffect(() => setCurrent(0), [images]);

  const go = (index) => setCurrent(Math.min(Math.max(index, 0), last));

  const frameStyle = {
    width: width ? toPx(width) : '100%',
    aspectRatio: width && height ? `${parseInt(width, 10)} / ${parseInt(height, 10)}` : undefined,
    height: width && height ? 'auto' : toPx(height),
    borderRadius: radius,
  };

  if (!images.length) return null;

  return (
    <div className={`gallery ${className}`} style={{ maxWidth: width ? toPx(width) : undefined }}>
      <div
        className="gallery__frame"
        style={frameStyle}
        aria-roledescription="carrossel"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') go(current - 1);
          if (e.key === 'ArrowRight') go(current + 1);
        }}
      >
        <div className="gallery__track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => (
            <div key={image.src + index} className="gallery__slide" aria-hidden={index !== current}>
              <img
                src={image.src}
                alt={image.title || `Imagem ${index + 1} de ${images.length}`}
                className="gallery__image"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* legenda opcional: { src, eyebrow, title, text, cta: { text, href } } */}
              {image.title && (
                <div className="gallery__caption">
                  {image.eyebrow && <span className="gallery__eyebrow">{image.eyebrow}</span>}
                  <h2 className="gallery__title">{image.title}</h2>
                  {image.text && <p className="gallery__text">{image.text}</p>}
                  {image.cta && (
                    <Link to={image.cta.href} className="gallery__cta" tabIndex={index === current ? 0 : -1}>
                      {image.cta.text}
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          onClick={() => go(current - 1)}
          disabled={current === 0}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>
        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          onClick={() => go(current + 1)}
          disabled={current === last}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>

        {!showThumbs && images.length > 1 && (
          <div className="gallery__dots">
            {images.map((image, index) => (
              <button
                key={image.src + index}
                type="button"
                className={`gallery__dot ${index === current ? 'is-active' : ''}`}
                onClick={() => go(index)}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((image, index) => (
            <button
              key={image.src + index}
              type="button"
              className={`gallery__thumb ${index === current ? 'is-selected' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => go(index)}
              aria-label={`Ver imagem ${index + 1}`}
              aria-current={index === current}
            >
              <img src={image.src} alt="" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

import { useEffect, useId, useState } from 'react';
import { assets } from '../data/assets.js';

function dimension(value, fallback) {
  if (value === undefined || value === null || value === '') return fallback;
  return /^\d+(\.\d+)?$/.test(String(value)) ? value + 'px' : value;
}

export default function Gallery({
  images = [],
  className = '',
  width,
  height,
  radius = '4px',
  showThumbs = false,
  alt = 'Imagem do produto',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackId = useId();
  const photos = images.map((image) => typeof image === 'string' ? { src: image } : image);
  const imageKey = photos.map((photo) => photo.src).join('|');
  const currentIndex = Math.min(activeIndex, Math.max(0, photos.length - 1));

  useEffect(() => {
    setActiveIndex(0);
  }, [imageKey]);

  if (photos.length === 0) return null;

  function selectImage(index) {
    setActiveIndex(Math.max(0, Math.min(index, photos.length - 1)));
  }

  function handleKeyDown(event) {
    if (photos.length < 2) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      selectImage(currentIndex + (event.key === 'ArrowRight' ? 1 : -1));
    }
  }

  const dimensions = {
    '--gallery-width': dimension(width, '100%'),
    '--gallery-height': dimension(height, '400px'),
    '--gallery-radius': radius,
  };

  return (
    <div
      className={'gallery ' + className}
      style={dimensions}
      role="region"
      aria-label={alt}
      aria-roledescription={photos.length > 1 ? 'carrossel' : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className="gallery__stage">
        <div
          id={trackId}
          className="gallery__track"
          style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
        >
          {photos.map((photo, index) => (
            <div
              key={photo.src + index}
              className="gallery__slide"
              aria-hidden={index !== currentIndex}
              style={{ backgroundColor: photo.backgroundColor }}
            >
              <img
                className="gallery__image"
                src={photo.src}
                alt={photo.alt || `${alt} ${index + 1}`}
                style={{
                  borderRadius: radius,
                  objectFit: photo.fit,
                  objectPosition: photo.position,
                  backgroundColor: photo.backgroundColor,
                  width: photo.frameWidth,
                  left: photo.frameWidth ? 'auto' : undefined,
                }}
              />
            </div>
          ))}
        </div>
        {photos.length > 1 && (
          <>
            <button
              className="gallery__arrow gallery__arrow--left"
              type="button"
              aria-label="Imagem anterior"
              aria-controls={trackId}
              disabled={currentIndex === 0}
              onClick={() => selectImage(currentIndex - 1)}
            >
              <img src={assets.arrowLeft} alt="" />
            </button>
            <button
              className="gallery__arrow gallery__arrow--right"
              type="button"
              aria-label="Próxima imagem"
              aria-controls={trackId}
              disabled={currentIndex === photos.length - 1}
              onClick={() => selectImage(currentIndex + 1)}
            >
              <img src={assets.arrowRight} alt="" />
            </button>
          </>
        )}
      </div>
      {showThumbs && (
        <div className="gallery__thumbs" aria-label="Miniaturas do produto">
          {photos.map((photo, index) => (
            <button
              className={'gallery__thumb' + (index === currentIndex ? ' is-active' : '')}
              key={photo.src + index}
              type="button"
              aria-label={'Mostrar imagem ' + (index + 1)}
              aria-controls={trackId}
              aria-pressed={index === currentIndex}
              onClick={() => selectImage(index)}
              style={{ borderRadius: radius }}
            >
              <img src={photo.src} alt="" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}
      {photos.length > 1 && !showThumbs && (
        <div className="gallery__dots" aria-label="Selecionar imagem">
          {photos.map((photo, index) => (
            <button
              className={'gallery__dot' + (index === currentIndex ? ' is-active' : '')}
              key={photo.src + index}
              type="button"
              aria-label={'Ir para imagem ' + (index + 1)}
              aria-controls={trackId}
              aria-pressed={index === currentIndex}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>
      )}
      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        Imagem {currentIndex + 1} de {photos.length}
      </p>
    </div>
  );
}

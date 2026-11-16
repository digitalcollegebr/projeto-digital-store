import { useState } from 'react';
import './Gallery.css';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

export const Gallery = ({
  className = '',
  width,
  height,
  radius = '0px',
  showThumbs = false,
  images = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={`gallery-container ${className}`}>
      <div
        className="gallery-main"
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : '400px',
          borderRadius: radius,
        }}
      >
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="gallery-image"
        />

        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`gallery-btn left ${currentIndex === 0 ? 'disabled' : ''}`}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="Anterior" className="gallery-arrow-icon" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          className={`gallery-btn right ${currentIndex === images.length - 1 ? 'disabled' : ''}`}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="Próxima" className="gallery-arrow-icon" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs-container">
          {images.map((img, index) => {
            const isSelected = index === currentIndex;
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`gallery-thumb-btn ${isSelected ? 'selected' : ''}`}
                style={{
                  width: '117px',
                  height: '95px',
                  borderRadius: radius,
                }}
              >
                <img
                  src={img.src}
                  alt={`Miniatura ${index + 1}`}
                  className="gallery-thumb-image"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
import { useState, useEffect } from 'react';
export default function Gallery({images, showThumbs = false, width, height, radius = '4px', alt = 'Produto', className = '', hero = false}) {
  const [requestedIndex, setSelected] = useState(0);
  useEffect(() => setSelected(0), [images?.[0]?.src]);
  if (!images?.length) return null;
  const selected = Math.min(requestedIndex, images.length - 1);
  const previous = () => setSelected((index) => Math.max(0, Math.min(index, images.length - 1) - 1));
  const next = () => setSelected((index) => Math.min(images.length-1,index+1));
  return <div className={`gallery ${showThumbs ? 'gallery-product' : 'gallery-banner'} ${hero ? 'gallery-hero' : ''} ${className}`} style={{'--gallery-width': width ? `${width}px` : '100%', '--gallery-height': height ? `${height}px` : 'auto', '--gallery-radius': radius}}>
    <div className="gallery-stage">
      <div className="gallery-track" style={{transform: `translateX(-${selected * 100}%)`}}>
        {images.map((image, index) => hero
          ? <div className={`hero-slide hero-slide-${image.id || index}`} key={`${image.src}-${index}`} aria-hidden={selected !== index}>
              <img src={image.src} alt={index === 0 ? alt : ''} loading={index === 0 ? 'eager' : 'lazy'} draggable="false" />
            </div>
          : <img key={`${image.src}-${index}`} src={image.src} alt={`${alt}, imagem ${index + 1} de ${images.length}`} aria-hidden={selected !== index} loading={index === 0 ? 'eager' : 'lazy'} />)}
      </div>
      <button type="button" className="gallery-prev" onClick={previous} disabled={selected === 0} aria-label="Imagem anterior"><img src="/store/arrow-left.svg" alt="" /></button>
      <button type="button" className="gallery-next" onClick={next} disabled={selected === images.length - 1} aria-label="Próxima imagem"><img src="/store/arrow-right.svg" alt="" /></button>
    </div>
    {showThumbs ? <div className="gallery-thumbs">{images.map((img,index) => <button type="button" key={`${img.src}-${index}`} className={selected === index ? 'selected' : ''} onClick={() => setSelected(index)} aria-pressed={selected === index} aria-label={`Mostrar imagem ${index+1}`}><img src={img.src} alt="" /></button>)}</div> : !showThumbs && <div className="gallery-dots">{images.map((_,index) => <button key={index} className={selected===index?'selected':''} onClick={()=>setSelected(index)} aria-label={`Ir para slide ${index + 1}`}/>)}</div>}
  </div>;
}

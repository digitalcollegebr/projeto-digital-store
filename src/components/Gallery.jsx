import { useState } from 'react'

const size = value => typeof value === 'number' ? `${value}px` : value

export default function Gallery({ images = [], showThumbs = false, width = '100%', height = '480px', radius = '4px', className = '' }) {
  const [selected, setSelected] = useState(0)
  if (!images.length) return null
  const current = Math.min(selected, images.length - 1)
  const image = images[current]
  return <div className={`gallery ${showThumbs ? 'gallery--product' : 'gallery--hero'} ${className}`} style={{'--gallery-width':size(width),'--gallery-height':size(height),'--gallery-radius':radius}}>
    <div className="gallery-stage">
      <img src={image.src} alt={image.alt || `Imagem ${current + 1} da galeria`} className="gallery-stage__image" onError={e => { if(image.fallback && !e.currentTarget.src.endsWith(image.fallback)){e.currentTarget.src=image.fallback} }} />
      <button type="button" disabled={current === 0} className="gallery-arrow gallery-arrow--prev" aria-label="Imagem anterior" onClick={() => setSelected(n => Math.max(0,n-1))}>‹</button>
      <button type="button" disabled={current === images.length - 1} className="gallery-arrow gallery-arrow--next" aria-label="Próxima imagem" onClick={() => setSelected(n => Math.min(images.length-1,n+1))}>›</button>
    </div>
    {showThumbs ? <div className="gallery-thumbs">{images.map((item,index)=><button type="button" key={`${item.src}-${index}`} aria-label={`Mostrar imagem ${index+1}`} aria-pressed={current===index} className={`gallery-thumb${current===index ? ' gallery-thumb--active' : ''}`} onClick={()=>setSelected(index)}><img src={item.src} alt="" onError={e=>{if(item.fallback && !e.currentTarget.src.endsWith(item.fallback)) e.currentTarget.src=item.fallback}} /></button>)}</div>
    : <div className="gallery-dots" aria-label="Selecionar slide">{images.map((item,index)=><button key={`${item.src}-${index}`} type="button" aria-label={`Slide ${index+1}`} aria-pressed={current===index} className={current===index?'is-active':''} onClick={()=>setSelected(index)}/>)}</div>}
  </div>
}

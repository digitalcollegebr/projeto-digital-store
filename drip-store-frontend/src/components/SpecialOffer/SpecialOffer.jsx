import { Link } from 'react-router-dom';
import './SpecialOffer.css';

/** Bloco "Oferta especial" da home (imagem à esquerda, chamada à direita). */
export default function SpecialOffer({ image, eyebrow, title, text, cta }) {
  return (
    <section className="special-offer">
      <div className="container special-offer__inner">
        <div className="special-offer__media">
          <span className="special-offer__glow" aria-hidden="true" />
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="special-offer__content">
          <span className="special-offer__eyebrow">{eyebrow}</span>
          <h2 className="special-offer__title">{title}</h2>
          <p className="special-offer__text">{text}</p>
          <Link to={cta.href} className="special-offer__cta">
            {cta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}

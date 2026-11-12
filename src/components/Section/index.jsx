import { Link } from 'react-router-dom';
import './Section.css';

/**
 * Seção padrão com título, link opcional e conteúdo.
 * @param {string} title - Título (dark-gray-2, 24px)
 * @param {'left'|'center'} titleAlign - Posição do título (padrão: left)
 * @param {{text: string, href: string}} link - Link opcional à direita (primary, 18px)
 * @param {React.ReactNode} children - Conteúdo da seção
 */
export default function Section({ title, titleAlign = 'left', link, children, className = '' }) {
  const isExternal = link?.href?.startsWith('http');

  return (
    <section className={`section ${className}`}>
      <div className={`section__header section__header--${titleAlign === 'center' ? 'center' : 'left'}`}>
        {title && <h2 className="section__title">{title}</h2>}
        {link && (isExternal ? (
          <a className="section__link" href={link.href}>{link.text} <span aria-hidden="true">→</span></a>
        ) : (
          <Link className="section__link" to={link.href}>{link.text} <span aria-hidden="true">→</span></Link>
        ))}
      </div>
      {children}
    </section>
  );
}

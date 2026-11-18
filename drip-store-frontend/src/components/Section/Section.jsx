import { Link } from 'react-router-dom';
import './Section.css';

/**
 * Seção padrão das páginas: título (left|center), link opcional à direita e conteúdo.
 * @param {string} title
 * @param {'left'|'center'} [titleAlign='left']
 * @param {{text: string, href: string}} [link]
 */
export default function Section({ title, titleAlign = 'left', link, children, className = '' }) {
  const isExternal = link && /^https?:\/\//.test(link.href);

  return (
    <section className={`section ${className}`}>
      <div className={`section__header section__header--${titleAlign}`}>
        <h2 className="section__title">{title}</h2>
        {link &&
          (isExternal ? (
            <a href={link.href} className="section__link">
              {link.text} →
            </a>
          ) : (
            <Link to={link.href} className="section__link">
              {link.text} →
            </Link>
          ))}
      </div>
      {children}
    </section>
  );
}

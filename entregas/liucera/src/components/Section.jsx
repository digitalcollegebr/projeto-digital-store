import { Link } from 'react-router-dom';

export default function Section({
  title,
  titleAlign = 'left',
  link,
  children,
  className = '',
}) {
  return (
    <section className={'section ' + className}>
      {(title || link) && (
        <div className={'section__heading section__heading--' + titleAlign}>
          {title && <h2>{title}</h2>}
          {link && (
            <Link className="section__link" to={link.href}>
              {link.text}
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

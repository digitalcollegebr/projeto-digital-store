import { Link } from 'react-router-dom';
export default function Section({ title, titleAlign = 'left', link, children, className = '' }) {
  return <section className={`shop-section ${className}`}>
    <div className={`section-heading align-${titleAlign}`}><h2>{title}</h2>{link && <Link to={link.href}>{link.text} <span aria-hidden="true">→</span></Link>}</div>
    {children}
  </section>;
}

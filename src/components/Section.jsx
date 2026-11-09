import { Link } from 'react-router-dom'
import './Section.css'

export default function Section({ title, titleAlign = 'left', link, children, className = '' }) {
  const isCenter = titleAlign === 'center'
  const titleClass = `section-title ${isCenter ? 'section-title--center' : 'section-title--left'}`
  const linkElement = link?.href?.startsWith('/')
    ? <Link to={link.href} className="section-link">{link.text} <span aria-hidden="true">→</span></Link>
    : link?.href ? <a href={link.href} className="section-link">{link.text} <span aria-hidden="true">→</span></a> : null
  return (
    <section className={`store-section ${className}`}>
      <div className="section-heading">
        <h2 className={titleClass}>{title}</h2>
        {linkElement}
      </div>
      {children}
    </section>
  )
}

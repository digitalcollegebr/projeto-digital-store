import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export function Information({ title, informations }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>
      {informations.map(item => <Link key={item.text} to={item.link}>{item.text}</Link>)}
    </div>
  )
}

const about = [
  { text: 'Sobre Drip Store', link: '/' },
  { text: 'Produtos', link: '/products' },
  { text: 'Categorias', link: '/categorias' },
  { text: 'Meus pedidos', link: '/meus-pedidos' },
]
const help = [
  { text: 'Como comprar', link: '/products' },
  { text: 'Trocas e devoluções', link: '/meus-pedidos' },
  { text: 'Dúvidas frequentes', link: '/meus-pedidos' },
  { text: 'Contato', link: '/meus-pedidos' },
]

function SocialIcons() {
  return <div className="social-links" aria-label="Redes sociais">
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.7" cy="6.5" r=".8" fill="currentColor"/></svg></a>
    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.5 21v-8h2.7l.5-3.5h-3.2V7.4c0-1 .3-1.7 1.8-1.7H18V2.6c-.4-.1-1.5-.2-2.8-.2-3 0-5 1.8-5 5.2v1.9H7.5V13h2.7v8z"/></svg></a>
    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 8c-.2-1.5-1.3-2.6-2.8-2.8C17 5 12 5 12 5s-5 0-7.2.2C3.3 5.4 2.2 6.5 2 8a38 38 0 0 0 0 8c.2 1.5 1.3 2.6 2.8 2.8C7 19 12 19 12 19s5 0 7.2-.2c1.5-.2 2.6-1.3 2.8-2.8a38 38 0 0 0 0-8ZM10 15.6V8.4l6.3 3.6z"/></svg></a>
  </div>
}

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand"><Logo light /><p>Moda, esporte e atitude em um só lugar. Encontre seu próximo favorito na Digital Store.</p><SocialIcons /></div>
      <Information title="Informação" informations={about}/>
      <Information title="Categorias" informations={[
        {text: 'Tênis casuais', link: '/products?category=Casual'},
        {text: 'Corrida', link: '/products?category=Corrida'},
        {text: 'Basquete', link: '/products?category=Basquete'},
      ]}/>
      <Information title="Suporte" informations={help}/>
    </div>
    <div className="container footer-bottom"><hr/><p>© {new Date().getFullYear()} Digital Store. Projeto acadêmico.</p></div>
  </footer>
}

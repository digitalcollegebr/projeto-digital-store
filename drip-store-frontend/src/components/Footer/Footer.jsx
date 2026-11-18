import Logo from '../Logo/Logo';
import Information from './Information';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import './Footer.css';

const SOCIALS = [
  { name: 'Facebook', icon: facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: twitter, href: 'https://twitter.com' },
];

const INFO_BLOCKS = [
  {
    title: 'Informação',
    informations: [
      { text: 'Sobre Drip Store', link: '/about' },
      { text: 'Segurança', link: '/seguranca' },
      { text: 'Wishlist', link: '/wishlist' },
      { text: 'Blog', link: '/blog' },
      { text: 'Trabalhe conosco', link: '/trabalhe-conosco' },
      { text: 'Meus Pedidos', link: '/meus-pedidos' },
    ],
  },
  {
    title: 'Categorias',
    informations: [
      { text: 'Camisetas', link: '/products?filter=camisetas' },
      { text: 'Calças', link: '/products?filter=calcas' },
      { text: 'Bonés', link: '/products?filter=bones' },
      { text: 'Headphones', link: '/products?filter=headphones' },
      { text: 'Tênis', link: '/products?filter=tenis' },
    ],
  },
  {
    title: 'Contato',
    informations: [
      { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: '/contato' },
      { text: '(85) 3051-3411', link: '/contato' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <Logo variant="footer" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={social.name}>
                <img src={social.icon} alt="" width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        {INFO_BLOCKS.map((block) => (
          <Information key={block.title} title={block.title} informations={block.informations} />
        ))}
      </div>

      <div className="container">
        <hr className="footer__divider" />
        <p className="footer__copy">© {new Date().getFullYear()} Digital College</p>
      </div>
    </footer>
  );
}

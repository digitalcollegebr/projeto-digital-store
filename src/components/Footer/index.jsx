import Logo from '../Logo';
import FooterInformations from '../FooterInformations';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import './Footer.css';

const INFORMATION = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/jobs' },
  { text: 'Meus Pedidos', link: '/orders' },
];

const CATEGORIES = [
  { text: 'Camisetas', link: '/products?filter=Camiseta' },
  { text: 'Calças', link: '/products?filter=Calça' },
  { text: 'Bonés', link: '/products?filter=Boné' },
  { text: 'Headphones', link: '/products?filter=Headphone' },
  { text: 'Tênis', link: '/products?filter=Tênis' },
];

const CONTACT = [
  { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161' },
  { text: '(85) 3051-3411' },
];

const SOCIAL = [
  { name: 'Facebook', icon: facebook, href: 'https://www.facebook.com' },
  { name: 'Instagram', icon: instagram, href: 'https://www.instagram.com' },
  { name: 'Twitter', icon: twitter, href: 'https://twitter.com' },
];

/** Rodapé com logo, descrição, redes sociais e blocos de informação. */
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
          <div className="footer__social">
            {SOCIAL.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                <img src={s.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <FooterInformations title="Informação" informations={INFORMATION} />
        <FooterInformations title="Categorias" informations={CATEGORIES} />
        <FooterInformations title="Contato" informations={CONTACT} />
      </div>

      <div className="container">
        <hr />
        <p className="footer__copy">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
}

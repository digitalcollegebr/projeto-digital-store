import { Link } from 'react-router-dom';
import { assets } from '../data/assets.js';
import Logo from './Logo.jsx';

const informationGroups = [
  {
    title: 'Informação',
    informations: [
      { text: 'Sobre nós', link: '/' },
      { text: 'Política de privacidade', link: '/' },
      { text: 'Termos de uso', link: '/' },
    ],
  },
  {
    title: 'Atendimento',
    informations: [
      { text: 'Central de ajuda', link: '/' },
      { text: 'Fale conosco', link: '/' },
      { text: 'Meus pedidos', link: '/orders' },
    ],
  },
];

function InformationList({ title, informations }) {
  return (
    <div className="footer-info">
      <h2>{title}</h2>
      <ul>
        {informations.map((information) => (
          <li key={information.text}>
            <Link to={information.link}>{information.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__about">
          <Link to="/" aria-label="Digital Store, página inicial">
            <Logo variant="footer" />
          </Link>
          <p>
            A Digital Store reúne estilo, conforto e praticidade para acompanhar
            você em todos os momentos.
          </p>
          <div className="social-links" aria-label="Redes sociais">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <img src={assets.facebook} alt="" />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <img src={assets.instagram} alt="" />
            </a>
            <a href="https://x.com/" aria-label="X">
              <img src={assets.twitter} alt="" />
            </a>
          </div>
        </div>
        {informationGroups.map((group) => (
          <InformationList
            key={group.title}
            title={group.title}
            informations={group.informations}
          />
        ))}
        <div className="footer-contact">
          <h2>Contato</h2>
          <p>Av. Santos Dumont, 1510<br />Aldeota, Fortaleza - CE</p>
          <a href="mailto:atendimento@digitalstore.com.br">
            atendimento@digitalstore.com.br
          </a>
        </div>
      </div>
      <div className="site-footer__copyright">
        <hr className="site-footer__rule" />
        <p>© {new Date().getFullYear()} Digital Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

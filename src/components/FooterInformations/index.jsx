import { Link } from 'react-router-dom';

/**
 * Bloco de informações do rodapé.
 * @param {string} title - Título do bloco
 * @param {{text: string, link?: string}[]} informations - Itens renderizados dinamicamente
 */
export default function FooterInformations({ title, informations = [] }) {
  return (
    <div className="footer__info">
      <h3>{title}</h3>
      <ul>
        {informations.map((info) => (
          <li key={info.text}>
            {info.link ? <Link to={info.link}>{info.text}</Link> : <span>{info.text}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

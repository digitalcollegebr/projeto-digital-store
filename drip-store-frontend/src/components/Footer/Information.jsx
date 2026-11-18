import { Link } from 'react-router-dom';

/**
 * Bloco de informações do rodapé.
 * @param {string} title - título do bloco
 * @param {{text: string, link: string}[]} informations - links renderizados dinamicamente
 */
export default function Information({ title, informations = [] }) {
  return (
    <div className="information">
      <h3 className="information__title">{title}</h3>
      <ul className="information__list">
        {informations.map((info) => (
          <li key={info.text}>
            <Link to={info.link}>{info.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

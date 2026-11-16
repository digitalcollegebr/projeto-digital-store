import "./Information.css";

export default function Information({ title, informations = [] }) {
  return (
    <div className="information">
      <h3 className="information__title">{title}</h3>
      <ul className="information__list">
        {informations.map((item) => (
          <li key={item.link}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
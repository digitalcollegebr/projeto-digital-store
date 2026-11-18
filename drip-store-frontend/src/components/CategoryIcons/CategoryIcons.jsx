import { Link } from 'react-router-dom';
import './CategoryIcons.css';

/* Ícones de linha desenhados em SVG (stroke = currentColor) */
const ICONS = {
  shirt: <path d="M9 4 4 7l2 4 2-1v10h8V10l2 1 2-4-5-3c0 1.7-1.3 3-3 3S9 5.7 9 4Z" />,
  pants: <path d="M7 3h10l1 18h-4l-2-11-2 11H6L7 3Zm0 4h10" />,
  cap: (
    <>
      <path d="M4 15a8 8 0 0 1 16 0v1H4v-1Z" />
      <path d="M12 7V5M20 16h1.5a.5.5 0 0 1 .5.5c0 1.4-1.1 2.5-2.5 2.5H12" />
    </>
  ),
  headphones: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
    </>
  ),
  sneaker: (
    <>
      <path d="M3 17V8l5 2 3-3 2 3c1 2 4 3 7 3.5 1 .2 1.5 1 1.5 2V17H3Z" />
      <path d="M3 17v2h18.5v-2M9 11l1.5 1.5M11 10l1.5 1.5" />
    </>
  ),
};

/** Lista de categorias em destaque com ícones circulares. */
export default function CategoryIcons({ categories = [] }) {
  return (
    <ul className="category-icons">
      {categories.map((category) => (
        <li key={category.name}>
          <Link to={`/products?filter=${category.filter}`} className="category-icons__item">
            <span className="category-icons__circle">
              <svg
                viewBox="0 0 24 24"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {ICONS[category.icon]}
              </svg>
            </span>
            <span className="category-icons__name">{category.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

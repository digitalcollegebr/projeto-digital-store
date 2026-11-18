import { Link } from 'react-router-dom';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

/**
 * Logomarca da Drip Store (253x44).
 * variant="footer" usa a versão branca para fundos escuros.
 */
export default function Logo({ variant = 'header' }) {
  return (
    <Link to="/" aria-label="Drip Store - página inicial">
      <img
        src={variant === 'footer' ? logoFooter : logoHeader}
        alt="Drip Store"
        width={253}
        height={44}
      />
    </Link>
  );
}

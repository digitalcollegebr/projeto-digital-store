import { Link } from 'react-router-dom';
import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

/**
 * Logomarca da Digital Store (253x44).
 * @param {'header'|'footer'} variant - "footer" usa a versão branca.
 */
export default function Logo({ variant = 'header' }) {
  return (
    <Link to="/" aria-label="Digital Store - página inicial" style={{ display: 'inline-flex' }}>
      <img
        src={variant === 'footer' ? logoFooter : logoHeader}
        alt="Digital Store"
        width={253}
        height={44}
      />
    </Link>
  );
}

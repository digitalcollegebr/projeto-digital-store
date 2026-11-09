import logo from '../assets/logo-digital-store.svg'
import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`brand-logo${light ? ' brand-logo--light' : ''}`} aria-label="Digital Store, voltar para início">
      <img src={logo} width="253" height="44" alt="Digital Store" />
    </Link>
  )
}

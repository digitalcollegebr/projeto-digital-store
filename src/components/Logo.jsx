// Importando as logos
import logoHeader from '../assets/logo-header.svg'
import logoFooter from '../assets/logo-footer.svg'

// Componente Logo
function Logo({ variant = 'header', className = '' }) {
  // Escolhe a logo de acordo com o variant
  const logo = variant === 'footer' ? logoFooter : logoHeader

  return (
    <img
      src={logo}
      width={253}
      height={44}
      alt="Digital Store"
      className={className}
    />
  )
}

export default Logo

import logoImage from '../assets/logo-header.svg';

const Logo = () => {
  return (
    <div>
      <img 
        src={logoImage} 
        alt="Logomarca da aplicação" 
        style={{ width: '253px', height: '44px' }} 
      />
    </div>
  );
};

export default Logo;
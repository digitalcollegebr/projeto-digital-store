import logoHeader from '../assets/logo-header.svg';
import logoFooter from '../assets/logo-footer.svg';
import { Link } from 'react-router-dom';

interface LogoProps {
    type: 'logoHeader' | 'logoFooter';
}

export default function Logo({ type }:LogoProps)  {

    const handleClick = () => window.scrollTo(0, 0);

    const logoSrc = type === 'logoHeader' ? logoHeader : logoFooter;

    return (

        <div>

            <Link to="/" onClick={handleClick}>
                <img src={logoSrc} alt="Logo" className='h-auto w-[40vw] md:w-[20vw]' />
            </Link>

        </div>
        
    );
};


import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

interface ISectionProps{
    className?: string;
    title?: string;
    titleAlign?: 'left' | 'center';
    link?: {
        text: string,
        href?: string
    };
    children: React.ReactNode;
}

const Section = ({className, title, titleAlign = 'left', link, children}: ISectionProps) => {

    const handleClick = () => window.scrollTo(0,0);
    
    return(
        <section className={className}>
             {(title || link) && (
                <div className={`flex md:px-16 ${titleAlign === 'center' ? 'justify-center' : 'justify-between'} pb-2`}>
                    {title && (
                        <h2 className='flex justify-end font-bold text-dark-gray-2 text-xl'>
                            {title}
                        </h2>
                    )}
                    {link && (

                        <Link to="/products/" onClick={handleClick} className='cursor-pointer text-md font-medium text-primary tracking-wider hover:text-pink-500 hover:scale-105 transition-colors flex items-center gap-2'>
                        
                            {link.text}
                                <MdArrowRightAlt size="20px" />
                        
                        </Link>
                    )}
                </div>
            )}
            <div>
                {children}
            </div>
        </section>
    );
};

export default Section;

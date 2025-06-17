import points from "../assets/icons/points.svg";

interface IContainerProps {
    img: string;
    title: string;
    titleText: string;
    subtitle: string;
    description: string;
    onClick: () => void;
}
export default function Container({title, subtitle, description, img, titleText, onClick}: IContainerProps) {

    return(

        <div className="bg-neutral-200 h-auto md:h-[70vh] flex flex-col-reverse pt-10 md:flex-row md:justify-center md:items-center">

            <div className="pb-10 md:w-[45vw] flex flex-col items-center md:items-start md:justify-center">

                <p className="font-bold text-md text-primary md:text-warning">{subtitle}</p>

                <h1 className="py-5 text-center text-5xl sm:text-6xl md:text-5xl font-bold md:text-left sm:font-extrabold">{title} <br />
                    <span>{titleText}</span>
                </h1>

                <p className="p-5 md:pb-5 md:p-0 sm:w-[60vw] md:w-[30vw] font-medium text-center text-dark-gray-2 md:text-left">{description}</p>

                <button onClick={onClick} className="p-3 
                 w-2/3 sm:w-56 md:w-44 rounded-md bg-primary text-white hover:scale-105 hover:cursor-pointer hover:bg-pink-500 transition-colors">Ver ofertas</button>

            </div>

            <div>
                <img src={img} alt="Nike shoes" className="h-auto w-4/6 m-auto -rotate-12 sm:w-[50vw] md:w-[40vw] lg:w-[30vw]"/>

                <img src={points} alt="Points" className="h-36 absolute z-40 top-24 left-[82%] sm:top-36 sm:rotate-12 md:hidden" />
            </div>
            

        </div>

    )

}
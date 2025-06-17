interface IPromoCardProps {
    img: string;
    text: string;
    promo: number;
    onClick: () => void
}

export default function PromoCard({img, text, promo, onClick}: IPromoCardProps){

    return(

        <div className="w-[80vw] md:w-[30vw] lg:w-[22vw] bg-light-blue flex rounded-md shadow-lg shadow-slate-300/50">

            <div className="py-5 px-5">

                <p className="text-center text-lg w-20 font-medium rounded-full bg-light-yellow">{`${promo}% OFF`}</p>
                
                <h2 className="py-2 text-2xl md:text-xl font-medium">{text}</h2>
                
                <button onClick={onClick} className="p-1 w-28 rounded-md font-medium text-primary bg-light-gray-3 hover:scale-105 duration-200">Comprar</button>

            </div>

            <div className="flex justify-end items-end">
                <img 
                    src={img} 
                    alt="Card" 
                    className="flex w-[55vw] justify-end items-end inset-0 object-container object-left"
                />
            </div>

        </div>

    )

}
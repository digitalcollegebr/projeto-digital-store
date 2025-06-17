import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface BuyBoxProps {
    name: string;
    reference: string;
    stars: number;
    rating: number;
    price: number;
    priceDiscount?: number;
    description: string;
    sizes: string[];
    colors: { id: number; color: string }[];
}

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, sizes, colors }: BuyBoxProps) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    return (
        <div className="pb-6">
            <h1 className="text-2xl font-bold mb-2 text-dark-gray">{name}</h1>
            <p className="text-gray-600 text-sm mb-4">Casual | Nike | REF: {reference}</p>

            <div className="flex items-center pb-3 gap-5">
                <p className="flex gap-2">
                    {[...Array(stars)].map((_, index) => (
                        <FaStar key={index} size="20px" color="#F6AA1C" className="hover:scale-110 hover:cursor-pointer transition-all" />
                    ))}
                </p>

                <div className="flex items-center gap-3">
                    <p className="flex gap-2 items-center text-lg bg-warning text-white font-medium p-1 justify-center rounded-md w-16">
                        {stars.toFixed(1)}
                        <FaStar size="15px" color="#fff" />
                    </p>
                    <p className="text-light-gray font-medium">({rating}) Avaliações</p>
                </div>
            </div>

            <div className="flex items-center mb-1">
                {priceDiscount ? (
                    <>
                        <span className="text-2xl font-bold mr-2 text-dark-gray">R$ {priceDiscount.toFixed(2)}</span>
                        <span className="text-gray-500 line-through text-lg">R$ {price.toFixed(2)}</span>
                    </>
                ) : (
                    <span className="text-2xl font-bold mr-2 text-dark-gray">R$ {price.toFixed(2)}</span>
                )}
            </div>

            <p className="text-gray-900 font-medium text-sm mb-2 md:w-[35vw]">
                <span className="text-lg md:text-md font-bold text-light-gray">Descrição do produto</span> <br />
                {description}
            </p>

            <div className="mb-2">
                <h2 className="text-lg md:text-md font-bold mb-2 text-light-gray">Tamanho</h2>
                <div className="flex gap-3">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            className={`w-10 h-10 md:w-8 md:h-8 border rounded-md ${
                                selectedSize === size ? 'border-primary bg-primary text-white font-bold border-2 shadow-lg transition-all duration-200 hover:scale-110' : ''
                            }`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h2 className="text-lg md:text-md font-bold mb-2 text-light-gray">Cores</h2>
                <div className="flex space-x-2">
                    {colors.map((color) => (
                        <button
                            key={color.id}
                            className={`w-10 h-10 md:w-8 md:h-8 rounded-full ${color.color} ${
                                selectedColor === color.color ? 'border-4 border-primary shadow-lg transition-all duration-200 scale-110' : ''
                            }`}
                            onClick={() => setSelectedColor(color.color)}
                        >
                        </button>
                    ))}
                </div>
            </div>

            <button className="w-full md:w-2/4 font-medium text-xl bg-warning hover:bg-amber-500 text-white p-2 rounded-md hover:scale-105 transition-all duration-200">
                Comprar
            </button>
        </div>
    );
};

export default BuyBox;

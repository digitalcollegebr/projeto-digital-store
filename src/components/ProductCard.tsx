import { Link } from "react-router-dom";

interface ProductCardProps {
  index: number;
  name: string;
  category: string;
  image: string;
  price: number;
  priceDiscount?: number;
}

export default function ProductCard({
  index,
  name,
  category,
  image,
  price,
  priceDiscount,
}: ProductCardProps) {
  const finalPrice = priceDiscount
    ? price - (price * priceDiscount) / 100
    : price;

  return (
    <Link to={`/product/${index}`}>
      <div className="w-full bg-white rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 p-3 relative h-full flex flex-col justify-between">
        {priceDiscount && (
          <div className="absolute top-2 left-2 bg-[#E5FF61] text-black font-bold text-sm px-3 py-1 rounded-full z-10">
            {priceDiscount}% OFF
          </div>
        )}
        <div className="w-full h-[180px] flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="max-h-full max-w-full object-contain transform -rotate-[20deg]"
          />
        </div>
        <div className="mt-4 text-left flex flex-col flex-grow justify-between min-h-[100px]">
          <div>
            <p className="text-xs text-dark-gray min-h-[16px]">{category}</p>
            <h3 className="text-sm font-bold text-dark-gray-2 min-h-[36px] leading-snug">
              {name}
            </h3>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <p className="text-primary font-semibold text-sm">
              R$ {finalPrice.toFixed(2)}
            </p>
            {priceDiscount && (
              <p className="text-sm text-gray-400 line-through">
                R$ {price.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

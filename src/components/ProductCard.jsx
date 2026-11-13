import { Link } from 'react-router-dom';
import { formatPrice } from '../data/products';

// Card de um produto (usado na Home, na listagem e nos recomendados)
export default function ProductCard({ product }) {
  if (!product) return null;

  const { id, name, image, price, priceDiscount } = product;

  // Só mostra o selo quando o preço com desconto é menor que o original
  const temDesconto = priceDiscount !== undefined && priceDiscount < price;
  const porcentagem = temDesconto
    ? Math.round((1 - priceDiscount / price) * 100)
    : 0;

  return (
    <Link to={`/product/${id}`} className="group block">
      {/* Área da imagem com fundo branco */}
      <div className="relative overflow-hidden rounded bg-white">
        {temDesconto && (
          <span className="absolute top-3 left-3 rounded-full bg-lime px-3 py-1 text-xs font-bold text-dark-gray-2">
            {porcentagem}% OFF
          </span>
        )}
        <img
          src={image}
          alt={name}
          width={292}
          height={321}
          className="aspect-[292/321] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Categoria fixa "Tênis", como no design */}
      <p className="mt-3 text-xs font-bold text-light-gray">
        Tênis
      </p>

      <h3 className="mt-1 line-clamp-2 text-base text-dark-gray-2 md:text-2xl md:leading-snug">
        {name}
      </h3>

      <p className="mt-1 flex flex-wrap items-baseline gap-x-3">
        {temDesconto ? (
          <>
            <del className="text-lg text-light-gray md:text-2xl">
              {formatPrice(price)}
            </del>
            <span className="text-lg font-bold text-dark-gray md:text-2xl">
              {formatPrice(priceDiscount)}
            </span>
          </>
        ) : (
          <span className="text-lg font-bold text-dark-gray md:text-2xl">
            {formatPrice(price)}
          </span>
        )}
      </p>
    </Link>
  );
}

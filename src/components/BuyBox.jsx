import starIcon from '../assets/star-icon.svg';
import { formatPrice } from '../data/products';

// Caixa com as informações de compra da página do produto
function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  onBuy,
}) {
  const temDesconto = priceDiscount !== undefined && priceDiscount < price;
  const nota = Number(stars).toFixed(1).replace('.', ',');

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl leading-tight font-bold text-dark-gray md:text-[32px]">
          {name}
        </h1>
        <p className="mt-2 text-xs text-dark-gray-3">
          {reference}
        </p>
      </div>

      {/* Nota e quantidade de avaliações */}
      <div className="flex items-center gap-3">
        <span className="flex h-7 items-center gap-1 rounded bg-warning px-2 text-sm font-bold text-white">
          {nota}
          <img
            src={starIcon}
            alt=""
            className="size-3.5 brightness-0 invert"
          />
        </span>
        <span className="text-sm text-light-gray">
          ({rating} avaliações)
        </span>
      </div>

      {/* Preço atual primeiro; o antigo fica riscado ao lado */}
      <p className="flex flex-wrap items-baseline gap-3">
        {temDesconto ? (
          <>
            <span className="text-[32px] font-bold text-dark-gray-2">
              {formatPrice(priceDiscount)}
            </span>
            <del className="text-base text-light-gray-2">
              {formatPrice(price)}
            </del>
          </>
        ) : (
          <span className="text-[32px] font-bold text-dark-gray-2">
            {formatPrice(price)}
          </span>
        )}
      </p>

      <div>
        <h2 className="mb-2 text-sm font-bold text-light-gray">
          Descrição do produto
        </h2>
        <p className="text-sm leading-6 text-dark-gray-2">
          {description}
        </p>
      </div>

      {children}

      <button
        type="button"
        onClick={onBuy}
        className="h-12 w-full rounded-lg bg-warning text-base font-bold tracking-wide text-white uppercase transition hover:brightness-95 md:w-[220px]"
      >
        Comprar
      </button>
    </div>
  );
}

export default BuyBox;

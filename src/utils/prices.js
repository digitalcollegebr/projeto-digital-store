const brlFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export const formatPrice = value => brlFormatter.format(value)

export const hasDiscount = (price, priceDiscount) =>
  typeof price === 'number' && Number.isFinite(price) && price >= 0 &&
  typeof priceDiscount === 'number' && Number.isFinite(priceDiscount) &&
  priceDiscount >= 0 && priceDiscount < price

export const currentPrice = product =>
  hasDiscount(product.price, product.priceDiscount) ? product.priceDiscount : product.price

export const discountPercentage = product =>
  hasDiscount(product.price, product.priceDiscount)
    ? Math.round((1 - product.priceDiscount / product.price) * 100)
    : 0

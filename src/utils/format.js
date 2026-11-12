/** Formata um número como moeda brasileira: 200 -> "R$ 200,00" */
export function formatPrice(value) {
  return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/** Calcula o percentual de desconto: (200, 150) -> 25 */
export function discountPercent(price, priceDiscount) {
  if (!priceDiscount || priceDiscount >= price) return 0;
  return Math.round((1 - priceDiscount / price) * 100);
}

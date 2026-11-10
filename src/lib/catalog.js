import { collections, products } from '../data/products.js';

// Os dados ficam neste projeto até o módulo de back-end começar.
export function getCollections() {
  return collections;
}

export function getProduct(id) {
  return products.find((item) => item.id === Number(id)) ?? null;
}

export function getProducts(filters = {}) {
  const search = String(filters.filter || '').trim().toLocaleLowerCase('pt-BR');
  const matches = products.filter((item) => {
    const description = `${item.name} ${item.brand} ${item.category}`.toLocaleLowerCase('pt-BR');
    return (!search || description.includes(search)) &&
      (!filters.category || item.category === filters.category) &&
      (!filters.brand || item.brand === filters.brand) &&
      (!filters.gender || item.gender === filters.gender) &&
      (!filters.featured || item.featured);
  });

  if (filters.sort === 'price-asc' || filters.sort === 'price-desc') {
    const direction = filters.sort === 'price-asc' ? 1 : -1;
    matches.sort((a, b) => direction * ((a.priceDiscount ?? a.price) - (b.priceDiscount ?? b.price)));
  }

  return matches;
}

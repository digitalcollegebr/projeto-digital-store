/**
 * Camada de acesso à API do back-end (Digital Store API).
 * Se a API estiver fora do ar, usa os dados locais de exemplo,
 * garantindo que o front funcione sozinho (ex.: deploy na Vercel).
 */
import { products as localProducts, categories as localCategories } from '../data/products';

// Em desenvolvimento usa a API local por padrão; em produção só usa API se VITE_API_URL for definida
const API_URL = (import.meta.env.VITE_API_URL ?? (import.meta.env.DEV ? 'http://localhost:3000' : '')).replace(/\/$/, '');
const TIMEOUT_MS = 3000;

async function request(path) {
  if (!API_URL) throw new Error('API não configurada');
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${API_URL}${path}`, { signal: controller.signal });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Erro ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

/** Busca todos os produtos habilitados. */
export async function getProducts() {
  try {
    const result = await request('/v1/product/search?limit=-1');
    return result.data.filter((p) => p.enabled);
  } catch (err) {
    if (API_URL) console.info('API indisponível, usando dados locais de produtos.');
    return localProducts;
  }
}

/** Busca um produto pelo ID (null quando não existe). */
export async function getProduct(id) {
  try {
    return await request(`/v1/product/${id}`);
  } catch (err) {
    if (API_URL) console.info('API indisponível, usando dados locais do produto.');
    return localProducts.find((p) => String(p.id) === String(id)) || null;
  }
}

/** Busca todas as categorias. */
export async function getCategories() {
  try {
    const result = await request('/v1/category/search?limit=-1');
    return result.data;
  } catch (err) {
    return localCategories;
  }
}

/**
 * Converte um produto da API para as props do <ProductCard />.
 * Só envia priceDiscount quando realmente existe desconto.
 */
export function toCardProps(product, categories = []) {
  const category = categories.find((c) => product.category_ids?.includes(c.id) && c.slug !== 'ofertas');
  const hasDiscount = product.price_with_discount > 0 && product.price_with_discount < product.price;
  return {
    id: product.id,
    name: product.name,
    image: product.images?.[0]?.content,
    price: product.price,
    priceDiscount: hasDiscount ? product.price_with_discount : undefined,
    category: category?.name,
  };
}

/** Preço final (com desconto, se houver). Usado para ordenar. */
export function finalPrice(product) {
  const hasDiscount = product.price_with_discount > 0 && product.price_with_discount < product.price;
  return hasDiscount ? product.price_with_discount : product.price;
}

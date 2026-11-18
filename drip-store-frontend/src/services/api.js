/**
 * Camada de acesso à API do projeto back-end.
 *
 * Produtos: se VITE_API_URL estiver definida, consome /v1/product/...;
 * caso contrário (ou se a API falhar) usa os dados locais de src/data/products.js.
 *
 * Autenticação: login (POST /v1/user/token), cadastro (POST /v1/user)
 * e dados do usuário (GET /v1/user/:id) sempre usam a API.
 */
import { products as localProducts } from '../data/products';

export const API_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

/** Erro com a mensagem amigável devolvida pela API. */
export class ApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

async function request(path, { method = 'GET', body, token } = {}) {
  if (!API_URL) {
    throw new ApiError('A API não está configurada (defina VITE_API_URL).', 0);
  }

  let res;
  try {
    res = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError('Não foi possível conectar ao servidor. Tente novamente em instantes.', 0);
  }

  if (res.status === 204) return null;
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(data.message || `Erro ${res.status}`, res.status, data.details);
  return data;
}

/* ------------------------------ Produtos ------------------------------ */

/** Converte um produto da API no formato usado pelos componentes. */
function fromApi(p) {
  const local = localProducts[(p.id - 1) % localProducts.length];
  const sizes = p.options?.find((o) => o.type === 'text')?.values;
  const colors = p.options?.find((o) => o.type === 'color')?.values;
  const hasDiscount = p.price_with_discount > 0 && p.price_with_discount < p.price;

  return {
    ...local,
    id: p.id,
    name: p.name,
    description: p.description || local.description,
    price: p.price,
    priceDiscount: hasDiscount ? p.price_with_discount : undefined,
    image: p.images?.[0]?.content || local.image,
    images: p.images?.length > 1 ? p.images.slice(1).map((img) => ({ src: img.content })) : local.images,
    options: { sizes: sizes || local.options.sizes, colors: colors || local.options.colors },
  };
}

export async function getProducts() {
  if (!API_URL) return localProducts;
  try {
    const { data } = await request('/v1/product/search?limit=-1');
    return data.length ? data.map(fromApi) : localProducts;
  } catch (error) {
    console.warn('API indisponível, usando dados locais.', error);
    return localProducts;
  }
}

export async function getProduct(id) {
  const local = () => localProducts.find((p) => p.id === Number(id)) || null;
  if (!API_URL) return local();
  try {
    return fromApi(await request(`/v1/product/${id}`));
  } catch (error) {
    if (error.status === 404) return null;
    console.warn('API indisponível, usando dados locais.', error);
    return local();
  }
}

/* ---------------------------- Autenticação ---------------------------- */

/** Lê o payload de um JWT (sem validar — a validação é feita no servidor). */
export function decodeToken(token) {
  try {
    const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(decodeURIComponent(escape(atob(payload))));
  } catch {
    return null;
  }
}

export async function login(email, password) {
  const { token } = await request('/v1/user/token', { method: 'POST', body: { email, password } });
  const payload = decodeToken(token);
  const user = await request(`/v1/user/${payload.id}`);
  return { token, user };
}

export function register(data) {
  return request('/v1/user', { method: 'POST', body: data });
}

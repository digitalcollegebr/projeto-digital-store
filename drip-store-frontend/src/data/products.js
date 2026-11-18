/**
 * Dados locais de produtos (usados quando a API não está configurada).
 * Formato compatível com os componentes <ProductCard /> e <ProductListing />.
 */
const BRANDS = ['Nike', 'Adidas', 'Puma', 'K-Swiss'];
const CATEGORIES = ['Esporte e lazer', 'Casual', 'Corrida', 'Utilitário'];
const GENDERS = ['Masculino', 'Feminino', 'Unissex'];
const MODELS = ['Revolution 6', 'Ultraboost', 'Suede Classic', 'Court Pro', 'Air Max', 'Runner'];

const description =
  'Tênis confortável e versátil, com cabedal respirável, entressola macia e solado de borracha com ótima aderência. Ideal para o dia a dia e para treinos leves.';

export const products = Array.from({ length: 15 }, (_, i) => {
  const brand = BRANDS[i % BRANDS.length];
  const price = 200 + (i % 5) * 40;
  const hasDiscount = i % 3 !== 1;

  return {
    id: i + 1,
    name: `${brand} ${MODELS[i % MODELS.length]} Next Nature`,
    image: `/product-thumb-${(i % 5) + 1}.jpeg`,
    price,
    priceDiscount: hasDiscount ? Math.round(price * 0.7 * 100) / 100 : undefined,
    brand,
    type: 'Tênis',
    category: CATEGORIES[i % CATEGORIES.length],
    gender: GENDERS[i % GENDERS.length],
    condition: i % 4 === 0 ? 'Usado' : 'Novo',
    reference: String(38416711 + i * 97),
    stars: (4 + (i % 10) / 10).toFixed(1),
    rating: 40 + i * 7,
    description,
    images: [1, 2, 3, 4, 5].map((n) => ({ src: `/produc-image-${n}.jpeg` })),
    options: {
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'],
    },
  };
});

export const filterGroups = [
  { title: 'Marca', key: 'brand', inputType: 'checkbox', options: BRANDS.map((b) => ({ text: b, value: b })) },
  { title: 'Categoria', key: 'category', inputType: 'checkbox', options: CATEGORIES.map((c) => ({ text: c, value: c })) },
  { title: 'Gênero', key: 'gender', inputType: 'checkbox', options: GENDERS.map((g) => ({ text: g, value: g })) },
  {
    title: 'Estado',
    key: 'condition',
    inputType: 'radio',
    options: [{ text: 'Novo', value: 'Novo' }, { text: 'Usado', value: 'Usado' }],
  },
];

const SLIDE_TEXTS = [
  { eyebrow: 'Melhores ofertas personalizadas', title: 'Queima de estoque Nike 🔥' },
  { eyebrow: 'Coleção nova', title: 'Estilo para todos os passos' },
  { eyebrow: 'Só esta semana', title: 'Até 30% OFF em tênis' },
  { eyebrow: 'Frete grátis', title: 'Nas compras acima de R$ 300' },
];

// Slides da home: imagens da pasta public + texto do banner (legenda opcional da <Gallery />)
export const homeSlides = [1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => ({
  src: `/home-slide-${n}.jpeg`,
  ...SLIDE_TEXTS[i % SLIDE_TEXTS.length],
  text: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
  cta: { text: 'Ver Ofertas', href: '/products' },
}));

export const collections = [
  { src: '/collection-1.png', alt: 'Novo drop Supreme', discount: 30, filter: 'camisetas' },
  { src: '/collection-2.png', alt: 'Coleção Adidas', discount: 30, filter: 'adidas' },
  { src: '/collection-3.png', alt: 'Novo Beats Bass', discount: 30, filter: 'headphones' },
];

export const featuredCategories = [
  { name: 'Camisetas', icon: 'shirt', filter: 'camisetas' },
  { name: 'Calças', icon: 'pants', filter: 'calcas' },
  { name: 'Bonés', icon: 'cap', filter: 'bones' },
  { name: 'Headphones', icon: 'headphones', filter: 'headphones' },
  { name: 'Tênis', icon: 'sneaker', filter: 'tenis' },
];

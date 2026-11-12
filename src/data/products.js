/**
 * Dados locais de exemplo. São usados quando a API do back-end não está
 * disponível, e seguem exatamente o mesmo formato retornado pela API
 * (GET /v1/product/search e GET /v1/category/search).
 */

export const categories = [
  { id: 1, name: 'Tênis', slug: 'tenis', use_in_menu: true },
  { id: 2, name: 'Camisetas', slug: 'camisetas', use_in_menu: true },
  { id: 3, name: 'Calças', slug: 'calcas', use_in_menu: true },
  { id: 4, name: 'Bonés', slug: 'bones', use_in_menu: true },
  { id: 5, name: 'Headphones', slug: 'headphones', use_in_menu: false },
  { id: 6, name: 'Ofertas', slug: 'ofertas', use_in_menu: false },
];

export const brands = ['K-Swiss V8', 'Nike Revolution 6', 'Adidas Ultraboost', 'Puma RS-X', 'Asics Gel'];
export const genders = ['Masculino', 'Feminino', 'Unissex'];

export const products = Array.from({ length: 16 }, (_, i) => {
  const id = i + 1;
  const brand = brands[i % brands.length];
  const gender = genders[i % genders.length];
  const price = [200, 219.9, 349.9, 129.9, 499.9][i % 5];
  const hasDiscount = i % 2 === 0;
  const priceWithDiscount = hasDiscount ? Number((price * 0.75).toFixed(2)) : price;

  return {
    id,
    enabled: true,
    name: `${brand} - Tênis ${gender}`,
    slug: `${brand.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${gender.toLowerCase()}-${id}`,
    stock: 10 + i,
    description:
      'Tênis confortável e resistente, ideal para o dia a dia e para a prática de esportes. '
      + 'Cabedal em material respirável e solado com amortecimento.',
    price,
    price_with_discount: priceWithDiscount,
    category_ids: hasDiscount ? [1, 6] : [1],
    images: [
      { id: id * 10, content: `/product-thumb-${(i % 5) + 1}.jpeg` },
      ...[1, 2, 3, 4].map((n) => ({ id: id * 10 + n, content: `/produc-image-${((i + n) % 5) + 1}.jpeg` })),
    ],
    options: [
      {
        id: id * 10 + 1, title: 'Tamanho', shape: 'square', radius: 4, type: 'text', values: ['39', '40', '41', '42', '43'],
      },
      {
        id: id * 10 + 2, title: 'Cor', shape: 'circle', radius: 0, type: 'color', values: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'],
      },
    ],
  };
});

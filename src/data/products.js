const cdn = '/store/';

export const collections = [
  { title: 'Novo drop Supreme', tag: 'Camisetas', image: `${cdn}collection-1.png`, category: 'Roupas' },
  { title: 'Coleção Adidas', brand: 'Adidas', tag: 'Calçados', image: `${cdn}collection-2.png`, category: 'Calçados' },
  { title: 'Novo Beats Bass', tag: 'Acessórios', image: `${cdn}collection-3.png`, category: 'Acessórios' }
];

const data = [
  ["Tênis Street Move","Calçados","Nike","Unissex",299.9,219.9,"product-thumb-1.jpeg"],
  ["Tênis de cano alto vermelho","Calçados","Nike","Unissex",349.9,289.9,"product-thumb-2.jpeg"],
  ["Tênis casual marrom","Calçados","","Unissex",399.9,319.9,"product-thumb-3.jpeg"],
  ["Tênis Casual Canvas","Calçados","Converse","Unissex",259.9,null,"produc-image-4.jpeg"],
  ["Tênis esportivo verde-limão","Calçados","Nike","Unissex",329.9,269.9,"product-thumb-5.jpeg"],
  ["Tênis de cano alto verde","Calçados","Nike","Unissex",319.9,249.9,"produc-image-1.jpeg"],
  ["Tênis casual bege e branco","Calçados","","Unissex",239.9,null,"produc-image-2.jpeg"],
  ["Tênis de cano alto salmão","Calçados","Nike","Unissex",289.9,229.9,"produc-image-3.jpeg"],
  ["Tênis esportivo azul-petróleo","Calçados","","Unissex",189.9,149.9,"product-thumb-4.jpeg"],
  ["Tênis esportivo branco e laranja","Calçados","Nike","Unissex",299.9,249.9,"produc-image-5.jpeg"]
];

const descriptions = [
  "Tênis de cano alto branco, preto e vermelho.",
  "Tênis vermelho e branco com detalhe lateral preto.",
  "Tênis marrom de cadarço com solado branco.",
  "Tênis bege de lona com cano alto.",
  "Tênis esportivo verde-limão com detalhe lateral preto.",
  "Tênis de cano alto verde e branco.",
  "Tênis de cano baixo com cabedal bege e branco.",
  "Tênis de cano alto com painéis salmão, bege e branco.",
  "Tênis azul-petróleo com painéis bege e branco.",
  "Tênis esportivo branco com detalhes laranja."
];

export const products = data.map(([name, category, brand, gender, price, priceDiscount, image], index) => ({
  id: index + 1,
  name,
  category,
  brand,
  gender,
  price,
  priceDiscount,
  image: `${cdn}${image}`,
  images: [`${cdn}${image}`],
  reference: `DS-${String(index + 1).padStart(4, '0')}`,
  stars: Number((4.2 + (index % 6) * .1).toFixed(1)),
  rating: 42 + index * 11,
  description: descriptions[index],
  sizes: category === 'Calçados' ? ['37', '38', '39', '40', '41', '42'] : category === 'Roupas' ? ['P', 'M', 'G', 'GG'] : ['Único'],
  colors: ['#262626', '#dad2c8', '#9e6489'],
  featured: index < 8
}));

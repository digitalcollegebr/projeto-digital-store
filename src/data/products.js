// Funções e opções usadas nas páginas (os produtos vêm da API)

// Preço final (usa o desconto quando existir)
export function getFinalPrice(produto) {
  return produto.priceDiscount ?? produto.price
}

// Formata o preço no padrão brasileiro (R$ 1.234,56)
export function formatPrice(valor) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)
}

// Textos amigáveis das categorias (usados no breadcrumb e nos filtros)
export const categoryLabels = {
  'esporte-lazer': 'Esporte e lazer',
  casual: 'Casual',
  utilitario: 'Utilitário',
  corrida: 'Corrida',
}

// Opções da barra de filtros da listagem
export const filterOptions = {
  brand: {
    title: 'Marca',
    options: [
      { text: 'Adidas', value: 'adidas' },
      { text: 'Balenciaga', value: 'balenciaga' },
      { text: 'K-Swiss', value: 'k-swiss' },
      { text: 'Nike', value: 'nike' },
      { text: 'Puma', value: 'puma' },
    ],
  },
  category: {
    title: 'Categoria',
    options: [
      { text: 'Esporte e lazer', value: 'esporte-lazer' },
      { text: 'Casual', value: 'casual' },
      { text: 'Utilitário', value: 'utilitario' },
      { text: 'Corrida', value: 'corrida' },
    ],
  },
  gender: {
    title: 'Gênero',
    options: [
      { text: 'Masculino', value: 'masculino' },
      { text: 'Feminino', value: 'feminino' },
      { text: 'Unissex', value: 'unissex' },
    ],
  },
  condition: {
    title: 'Estado',
    options: [
      { text: 'Novo', value: 'novo' },
      { text: 'Usado', value: 'usado' },
    ],
  },
}

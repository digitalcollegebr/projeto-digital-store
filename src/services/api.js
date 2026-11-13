// Serviço que busca os produtos no arquivo estático da própria aplicação
// (não tem back-end nem banco de dados)

const API_URL = '/api/products.json'

// Guarda a lista depois da primeira busca para não repetir o pedido
let cacheProdutos = null

// Retorna todos os produtos
export async function getProducts() {
  if (cacheProdutos) {
    return cacheProdutos
  }

  const resposta = await fetch(API_URL)

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os produtos.')
  }

  const produtos = await resposta.json()
  cacheProdutos = produtos
  return produtos
}

// Busca um produto pelo ID da URL
export async function getProductById(id) {
  const produtos = await getProducts()
  return produtos.find((produto) => produto.id === Number(id))
}

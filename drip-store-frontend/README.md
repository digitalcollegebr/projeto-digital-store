# Drip Store — Projeto Front-end

Loja virtual **Drip Store** feita em React para o projeto final de Front-end da Digital College,
seguindo a documentação de [digitalcollegebr/projeto-digital-store](https://github.com/digitalcollegebr/projeto-digital-store)
e o design do Figma.

**Desenvolvido por:** ALEF MATHEUS TEIXEIRA DE SOUSA

**Site publicado:** https://drip-store-frontend-xi.vercel.app

**API usada pelo site:** https://drip-store-backend-mu.vercel.app ([documentação Swagger](https://drip-store-backend-mu.vercel.app/docs))

## Tecnologias

- React 18 + Vite
- React Router DOM 6
- CSS puro com variáveis (paleta oficial do projeto)

## Como rodar

Pré-requisito: **Node.js 18+**

```bash
npm install
npm run dev        # http://localhost:5173
```

Build de produção:

```bash
npm run build
npm run preview
```

### Integração com a API (opcional)

Por padrão o site usa dados locais (`src/data/products.js`). Para consumir a API do
[projeto back-end](../drip-store-backend), crie um arquivo `.env`:

```
VITE_API_URL=http://localhost:3000
```

Se a API estiver fora do ar, o site volta automaticamente para os dados locais.

## Páginas e rotas

| Rota | Página |
| --- | --- |
| `/` | Página inicial: galeria, coleções em destaque e produtos em alta |
| `/products` (`/produtos`) | Listagem com ordenação, filtros e busca (`?filter=termo`) |
| `/product/:id` | Visualização do produto: galeria com miniaturas, buy box e recomendados |
| `/login` e `/cadastro` | Entrar e criar conta (API do back-end) |
| `/carrinho` | Carrinho com resumo do pedido |
| `/meus-pedidos` | Histórico de pedidos do usuário logado |

## Componentes

```
src/
├── components/
│   ├── Header          # logo, busca, Cadastre-se/Entrar, carrinho e navegação (NavLink)
│   ├── Footer          # logo branca, redes sociais e blocos <Information />
│   ├── Logo
│   ├── Section         # title, titleAlign (left|center), link e children
│   ├── ProductCard     # image, name, price, priceDiscount
│   ├── ProductListing  # products -> lista de ProductCard
│   ├── Gallery         # images, width, height, radius, showThumbs, className
│   ├── FilterGroup     # title, inputType (checkbox|radio), options
│   ├── ProductOptions  # options, shape (square|circle), radius, type (text|color)
│   └── BuyBox          # name, reference, stars, rating, price, priceDiscount, description, children
└── pages/
    ├── Layout          # Header + children + Footer
    ├── HomePage
    ├── ProductListingPage
    └── ProductViewPage
```

## Funcionalidades

- Busca no cabeçalho (clique na lupa ou Enter) redireciona para `/products?filter=termo`
- Link ativo da navegação destacado com cor e sublinhado
- Galeria com setas (desabilitadas no início/fim), animação de deslize e miniaturas
- Ordenação por menor/maior preço e filtros por marca, categoria, gênero e estado — funcionando de verdade
- Seleção de tamanho e cor com borda `primary`
- **Carrinho de compras**: COMPRAR exige tamanho, contador no ícone, quantidades, frete grátis acima de R$ 300, total parcelado
- **Login e cadastro reais** consumindo a API do back-end (JWT), com mensagens de erro da API
- **Meus Pedidos**: finalizar a compra (exige login) gera o pedido no histórico do usuário
- Home no estilo do Figma: banner com chamada, coleções com selo de desconto, categorias com ícones e bloco "Oferta especial"
- Layout responsivo (desktop, tablet e celular, com menu hambúrguer)

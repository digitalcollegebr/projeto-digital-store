# Digital Store – Front-end

Loja virtual **Digital Store (Drip Store)** feita em **React**, como projeto final de Front-end do curso **Geração Tech – Digital College**, seguindo a documentação do repositório [digitalcollegebr/projeto-digital-store](https://github.com/digitalcollegebr/projeto-digital-store) e o design do Figma.

**Integrante:** Webster Bezerra

🔗 **Projeto rodando (Vercel):** https://digital-store-opal-pi.vercel.app
🔗 **API (back-end):** https://github.com/websterbarroso/digital-store-api

## Tecnologias

- React 18 + Vite
- React Router DOM 6 (rotas e `NavLink`)
- CSS puro com variáveis (paleta oficial do projeto) e layout responsivo
- Consumo da API REST do projeto de Back-end (opcional, com fallback para dados locais)

## Páginas

| Rota | Página |
| --- | --- |
| `/` | **Home**: slide de imagens, coleções em destaque e produtos em alta |
| `/products` | **Listagem de produtos**: ordenação, filtros e resultados da busca (`/products?filter=termo`) |
| `/product/:id` | **Visualização do produto**: galeria com miniaturas, buy box, opções e produtos recomendados |
| `/categories`, `/orders`, `/login`, `/signup` | Páginas simples de "em breve" |

## Componentes

```
src/
├── components/
│   ├── Header/             # logo, busca, Cadastre-se/Entrar, carrinho e navegação
│   ├── Footer/             # logo branca, descrição, redes sociais e informações
│   ├── FooterInformations/ # bloco de links do rodapé (props title e informations)
│   ├── Logo/
│   ├── Section/            # props title, titleAlign, link e children
│   ├── ProductCard/        # props image, name, price e priceDiscount
│   ├── ProductListing/     # prop products
│   ├── Gallery/            # props images, width, height, radius, showThumbs e className
│   ├── FilterGroup/        # props title, inputType e options
│   ├── ProductOptions/     # props options, radius, shape e type
│   ├── BuyBox/             # props name, reference, stars, rating, price, priceDiscount, description e children
│   └── ScrollToTop/
├── pages/
│   ├── Layout/             # Header + children + Footer
│   ├── HomePage/
│   ├── ProductListingPage/
│   ├── ProductViewPage/
│   └── PlaceholderPage/
├── services/api.js         # chamadas à API (com fallback para dados locais)
├── data/products.js        # dados de exemplo no mesmo formato da API
├── hooks/useStoreData.js
├── assets/                 # logos e ícones SVG
└── styles/global.css       # cores e estilos globais
```

## Funcionalidades

- Busca no cabeçalho (clique na lupa ou `Enter`) redirecionando para `/products?filter=...`
- Link ativo do menu destacado com cor e linha abaixo
- Galeria com setas desabilitadas na primeira/última imagem, slide animado e miniaturas com borda na selecionada
- Ordenação por menor/maior preço e filtros por marca, categoria e gênero funcionando de verdade
- Título da listagem mostra o total de produtos encontrados
- Opções de produto (tamanho e cor) selecionáveis com borda `primary`
- Layout responsivo (desktop, tablet e celular)

## Como rodar

Pré-requisito: **Node.js 18+**.

```bash
npm install
npm run dev
```

Acesse **http://localhost:5173**.

### Integração com o Back-end (opcional)

Por padrão o front busca os dados em `http://localhost:3000` (projeto **digital-store-api**). Para mudar a URL, crie um `.env`:

```bash
cp .env.example .env
```

Se a API não estiver rodando, o front usa automaticamente os dados de `src/data/products.js`, então ele funciona sozinho (inclusive em deploy estático).

### Build de produção

```bash
npm run build
npm run preview
```

O arquivo `vercel.json` já está configurado para deploy na Vercel (redireciona todas as rotas para o `index.html`).

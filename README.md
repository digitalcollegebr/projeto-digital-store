# Digital Store - Projeto Front-end

Projeto final do curso de Front-end (Geração Tech / Digital College).

## Autor

- [João Victor Rocha Costa](https://github.com/joota2500)

## Links

- Site publicado (Vercel): https://projeto-digital-store-shopee.vercel.app/
- Repositório: https://github.com/joota2500/projeto-digital-store

## Tecnologias

- React 19 + Vite
- React Router
- Tailwind CSS v4
- Lucide React (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Páginas

- `/` - Home
- `/products` ou `/produtos` - Listagem de produtos (aceita `?filter=`)
- `/product/:id` - Visualização do produto
- `/login`, `/cadastro`, `/categorias` e `/meus-pedidos` - Página em construção (sem back-end neste projeto)

## API

Os produtos ficam em um arquivo JSON estático servido pela própria aplicação, sem banco de dados e sem back-end:

- Endereço: `/api/products.json` (arquivo em `public/api/products.json`)

A aplicação consome essa API com `fetch` no serviço `src/services/api.js`, pelas funções `getProducts()` e `getProductById(id)`. As páginas Home, Listagem e Produto usam `useEffect` e `useState` para buscar os dados, mostrar "Carregando..." e exibir uma mensagem se a busca falhar.

As funções auxiliares (formatação de preço, opções dos filtros e nomes das categorias) continuam em `src/data/products.js`.

## Observações

- A busca, os filtros e a ordenação da listagem funcionam no front-end
- Imagens oficiais do projeto em `public/` e ícones em `src/assets/`

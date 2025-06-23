# 🛍️ Digital Store

**Digital Store** é uma aplicação de e-commerce desenvolvida com **ReactJS** como parte do curso de Desenvolvimento Web Fullstack. O projeto visa consolidar conhecimentos sobre React Hooks, componentes funcionais, roteamento e consumo de APIs REST com `json-server`.

🔗 **Veja o projeto online**: [projeto-digital-store-8dg6.onrender.com](https://projeto-digital-store-8dg6.onrender.com/)

<p align="center">
  <img src="/public/cover.png" alt="Capa do Projeto" width="100%" />
</p>

---

## 🧑‍💻 Autores

Desenvolvido por:
- [Ivanildo Borges](https://www.linkedin.com/in/IvanildoBorges/).
- Josué Andrade
- Ingride Gondim

---

## 🚀 Tecnologias e Bibliotecas

- **ReactJS**
- **React Router DOM**
- **Styled-components**
- **PrimeReact** e **PrimeIcons**
- **Boxicons**
- **json-server** (API fake para simulação de produtos)
- **Vite** (ambiente de desenvolvimento)

---

## ⚙️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/IvanildoBorges/projeto-digital-store.git
cd projeto-digital-store
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a API fake

O projeto usa o `json-server` para simular uma API com os dados de produtos.

```bash
npm run api
```

A API estará disponível em: [http://localhost:3000](http://localhost:3000)

> O arquivo de dados da API está localizado em: `src/utils/produtos.json`

### 4. Inicie a aplicação

Em outro terminal, rode:

```bash
npm run dev
```

A aplicação estará disponível em: [http://localhost:5173](http://localhost:5173)

---

## 📦 Dependências

```json
"boxicons": "^2.1.4",
"json-server": "^1.0.0-beta.3",
"primeicons": "^7.0.0",
"primereact": "^10.9.5",
"react-router-dom": "^7.6.0",
"styled-components": "^6.1.18"
```

### Dev Dependências

```json
"@types/styled-components": "^5.1.34"
```

---

## 📂 Estrutura de Pastas

```
public/
src/
├── api/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── HeaderUnAuthorized.jsx
│   │   ├── Footer.jsx
│   │   ├── Main.jsx
│   │   ├── Nav.jsx
│   │   ├── PageLayout.jsx
│   │   ├── PageLayoutUnAuthorized.jsx
│   │   └── Section.jsx
│   ├── Logo.jsx
│   ├── Banner.jsx
│   ├── BreadCrumb.jsx
│   ├── ButtonCTA.jsx
│   ├── BuyBox.jsx
│   ├── ProductCard.jsx
│   ├── FilterGroup.jsx
│   ├── Input.jsx
│   ├── ProductOptions.jsx
│   ├── Select.jsx
│   └── TitleSection.jsx
├── models/
├── context/
│   ├── auth/
│   │   ├── AuthContext.js
│   └── └── AuthProvider.jsx
├── pages/
│   ├── Home/
│   │   ├── index.jsx
│   │   └── style.jsx
│   ├── Product/
│   │   ├── ProductViewPage.jsx
│   │   └── style.jsx
│   ├── ProductListing/
│   │   ├── ProductListingPage.jsx
│   │   └── style.jsx
│   ├── Login/
│   │   ├── index.jsx
│   │   └── style.jsx
│   └── NotFound/
│       ├── index.jsx
│       └── style.jsx
├── routes/
├── styles/
├── utils/
├── App.jsx
└── index.jsx
```

---

## 🎨 Paleta de Cores

As cores usadas foram criadas no arquivo `cores.js` na pasta style, e categorizadas em dois tipos: `ActionColores` e `GreyScaleColors`

| Tipo       | Cor       |
|------------|-----------|
| Primary    | `#C92071` |
| Secondary  | `#B5B6F2` |
| Tertiary   | `#991956` |
| Error      | `#EE4266` |
| Success    | `#52CA76` |
| Warning    | `#F6AA1C` |

### Escala de Cinza

| Nome           | Cor       |
|----------------|-----------|
| Dark Gray      | `#1F1F1F` |
| Dark Gray 2    | `#474747` |
| Dark Gray 3    | `#666666` |
| Light Gray     | `#8F8F8F` |
| Light Gray 2   | `#CCCCCC` |
| Light Gray 3   | `#F5F5F5` |
| White          | `#FFFFFF` |

---

## 🧩 Layout

### Estrutura do Layout

O layout da aplicação é composto pelos componentes fixos:

- `<Header />`: Cabeçalho com logo, navegação e ações do usuário.
- `<Footer />`: Rodapé com informações institucionais  e copyright.

Esses componentes envolvem todas as páginas da aplicação.
Esses componentes são usados em todas as páginas, com o conteúdo sendo renderizado entre eles por meio da prop `children` passada por meio do componente do React Router DOM chamado `<Outlet />`.

---

## 📌 Componentes

### 🧭 Header

- Logo  
- Campo de busca  
- Redirecionamento para **Login** e **Cadastro**
- Carrinho de compras  
- Navegação principal
  - Links: Home, Produtos, Categorias, Meus Pedidos
  - Link ativo com destaque visual (ex: sublinhado e cor diferente)

### 🦶 Footer

#### Informações dinâmicas com `title` e `informations`

```jsx
<FooterInfo
  title="Institucional"
  informations={[
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Blog", link: "/blog" }
  ]}
/>
```

Rodapé com `<hr />` e:

```
© 2024 Digital Store
```

---

## 🧱 Componentes Compartilhados

- **Section**: Estrutura básica para agrupamento visual de conteúdo
- **ProductCard**: Cartão de produto com imagem, nome e preço
- **ProductListing**: Grid responsivo com vários cards de produtos
- **Gallery**: Galeria de imagens do produto
- **ProductOptions**: Tamanhos, cores, etc
- **BuyBox**: Informações detalhadas com preço, desconto, botão de compra

---


## 🔐 Login

Apresenta:

- Formulário com campos de entrada
- Metodos alternativos para login
- Link para cadastro de conta
- Imagem de fundo

---

## 🏠 Página Inicial

A Home apresenta:

- Galeria de imagens (Carrossel)
- Coleções em destaque
- Produtos em alta

---

## 📄 Página de Listagem de Produtos

- **Filtrar por** (categoria, marca, etc)
- **Ordenar por** (ex: mais vendidos)
- **Listagem de Produtos** com paginação e cards de produtos em grade 

---

## 🔍 Página de Visualização do Produto

Exibe:

- Galeria de imagens
- **Buy Box** (Nome, descrição, ProductOptions, preço, avaliações, botão de compra)
- Seção de **Produtos recomendados**

---

## 🔍 Página de Erro Not Found

Exibe:

- Animação 404
- **Botão** para voltar ao inicio

---

## 📬 Contribuição

Pull requests são bem-vindas! Para mudanças maiores, por favor abra uma issue para discutir o que você gostaria de alterar.

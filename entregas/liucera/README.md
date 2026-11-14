# Digital Store

Projeto acadêmico de Front-end da Geração Tech 4.0, desenvolvido com React, Vite e React Router. Inclui Home, catálogo e detalhes de produtos, com CSS próprio e recursos visuais locais.

[Site publicado](https://digital-store-liucera.vercel.app) · [Código-fonte](https://github.com/Liucera/digital-store) · [Pull request da entrega](https://github.com/digitalcollegebr/projeto-digital-store/pull/19)

## Executar no VS Code

Requisitos: Node.js 22.12 ou superior e npm. A versão 20 também é compatível a partir da 20.19.

Abra a pasta **Digital Store**, onde está o arquivo `package.json`.

No terminal **PowerShell** do VS Code:

```powershell
cd "E:\Geração Tech 4.0\Digital Store"
npm ci
npm run dev
```

Se estiver usando o **Prompt de Comando (CMD)**:

```bat
cd /d "E:\Geração Tech 4.0\Digital Store"
npm ci
npm run dev
```

A aplicação usa `http://127.0.0.1:3000/`. Caso a porta esteja ocupada, utilize o endereço exibido no terminal. Mantenha o terminal aberto enquanto navega.

Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

O comando `build` cria a pasta `dist`. O endereço da prévia aparece no terminal, normalmente na porta 4173.

## Tecnologias

- React e React DOM;
- React Router DOM para navegação;
- Vite e plugin React;
- CSS tradicional e fonte Inter local.

Não há biblioteca de estilos, API, backend ou banco de dados nesta atividade.

## Páginas e rotas

| Endereço | Conteúdo |
| --- | --- |
| `/` | Home com quatro slides, três coleções e oito produtos |
| `/products` ou `/produtos` | Catálogo, busca, filtros e ordenação |
| `/products/:id` ou `/product/:id` | Foto, miniatura, descrição, preço, avaliação, tamanhos e recomendados |
| `/products?filter=camiseta` | Exemplo de pesquisa por texto |
| `/products?category=Calças` | Exemplo de filtro por categoria |
| Demais endereços | Página de endereço não encontrado |

Os oito produtos incluem dois tênis, duas camisetas, duas calças e dois bonés. Produtos inexistentes exibem uma mensagem e um link de retorno ao catálogo.

## Estrutura

```text
public/
  fonts/                 Fonte Inter e sua licença
  images/products/       Fotografias dos produtos e do carrossel
src/
  assets/                Logos e ícones SVG
  components/            Componentes reutilizáveis
  data/                  Dados do catálogo e caminhos de imagens
  pages/                 Layout e páginas
  App.jsx                Rotas
  main.jsx               Inicialização do React
  styles.css             Estilos e responsividade
```

## Requisitos e critérios da atividade

A referência é o [repositório oficial da Digital College](https://github.com/digitalcollegebr/projeto-digital-store) e o [Figma do projeto](https://www.figma.com/design/nUk0ihM3x4u8JQtxUoAEJf/DRIP-STORE---DIGITAL-COLLEGE--Copy-?node-id=22-30&p=f).

| Critério | Implementação |
| --- | --- |
| Construção lógica | Catálogo por dados, pesquisa, combinação de filtros, ordenação e seleção de tamanho |
| Aplicação do React | Componentes funcionais, props, children, hooks, listas e roteamento |
| Páginas mínimas | Home, listagem e visualização do produto |
| Componentes compartilhados | Header, Footer, Logo, Section, Gallery, ProductCard, ProductListing, ProductOptions, BuyBox e FilterGroup |
| Estilo e design | Paleta do projeto, Inter, medidas de referência e layout adaptável |
| Documentação | Setup, rotas, escopo, fontes dos arquivos e registro de validação |
| Boas práticas | Separação de dados, componentes e páginas; recursos locais; navegação por teclado e estados vazios |

### Personalizações do conteúdo visual

O layout usa o Figma como referência. As fotografias, textos e categorias foram personalizados; portanto, não se trata de uma cópia literal de todas as imagens do Figma.

- Todas as fotos são reais, inspecionadas e armazenadas no projeto.
- O carrossel mostra Puma branco, camiseta preta, jeans e boné LA, com transição lateral.
- Cada produto tem **uma fotografia**, também usada em sua única miniatura. Não são exibidos outros modelos como se fossem fotos desse produto.
- A escolha de cores não aparece na página; o componente `ProductOptions` continua aceitando opções de texto ou cor conforme a especificação.
- As medidas de desktop seguem a documentação, com adaptações de tamanho para telas menores.

### Escopo demonstrativo

Nomes, preços e avaliações compõem um catálogo de exemplo. O botão Comprar apenas confirma uma seleção: não gera pedidos nem realiza pagamentos. Cadastro, login e pedidos são telas auxiliares demonstrativas. Autenticação real, carrinho persistente e backend não fazem parte desta entrega de Front-end.

API real, deploy e pull request são opcionais no enunciado. A entrega obrigatória é o link do repositório GitHub. O catálogo desta entrega usa dados locais, sem API externa.

## Publicação

O projeto está publicado na [Vercel](https://digital-store-liucera.vercel.app), em um endereço próprio do serviço, sem domínio personalizado. O build usa Node.js 22, `npm ci` e `npm run build`.

A publicação atual foi feita por envio direto dos arquivos do projeto. Novos commits no GitHub ainda não publicam o site automaticamente. O processo de atualização e a opção de conectar o repositório estão em [docs/DEPLOY.md](docs/DEPLOY.md).

As configurações de hospedagem estão em `vercel.json`. Também foi incluída a alternativa para Netlify em `netlify.toml`.

## Validação

As verificações realizadas estão registradas em [docs/VALIDACAO.md](docs/VALIDACAO.md). Incluem build de produção, navegação, busca, filtros, tamanhos, galeria, carregamento de arquivos e responsividade.

## Imagens, ícones e fonte

As fotografias têm fontes registradas abaixo. Os arquivos locais evitam que o site dependa da disponibilidade dos sites de origem para exibir o catálogo.

Créditos das fotos:

- [Hipkicks — tênis Puma](https://www.pexels.com/photo/shoes-on-a-white-background-6748330/)
- [The DK Photography — tênis Puma branco no banner e no catálogo](https://unsplash.com/photos/white-sneaker-on-dark-background-NUoPWImmjCU)
- [dayong tien — camiseta](https://www.pexels.com/photo/a-basic-white-t-shirt-18186106/)
- [H&M — Regular-Fit T-Shirt preta, foto frontal do produto](https://www2.hm.com/en_us/productpage.1262641003.html)
- [Levi’s — jeans 501 Original azul, foto frontal do produto](https://www.levi.com/IT/en/clothing/men/jeans/501-original-jeans/p/005013289)
- [H&M — Regular Fit Crease-leg trousers, foto frontal do produto](https://www2.hm.com/en_in/productpage.1211876001.html)
- [Mohamed Abdelghaffar — boné trucker](https://www.pexels.com/photo/mesh-baseball-cap-26956136/)
- [Jens Mahnke — boné LA](https://www.pexels.com/photo/gray-and-black-la-embroidered-fitted-cap-844867/)

Os ícones e logotipos vetoriais seguem o repositório base da Digital College. As fotos do Pexels seguem a [licença do Pexels](https://www.pexels.com/license/), e a foto do banner segue a [licença do Unsplash](https://unsplash.com/license). As fotos de catálogo das marcas são referências visuais para este projeto acadêmico.

A fonte Inter está em `public/fonts/InterVariable.woff2`, com a licença SIL OFL em `public/fonts/Inter-LICENSE.txt`. Origem: [The Inter Project](https://github.com/rsms/inter).

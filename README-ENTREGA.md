# Entrega — Digital Store de Liucera

Projeto acadêmico de Front-end da Geração Tech 4.0, desenvolvido com React, Vite, React Router e CSS tradicional.

## Links da entrega

- [Repositório principal da aplicação](https://github.com/Liucera/digital-store)
- [Código e instruções de execução neste fork](entregas/liucera/README.md)
- [Registro de validação](entregas/liucera/docs/VALIDACAO.md)
- [Instruções para atualizar a publicação](entregas/liucera/docs/DEPLOY.md)

Foram incluídas configurações para Vercel e Netlify. O endereço definitivo depende da conexão com a hospedagem e será acrescentado após a publicação e a validação das páginas.

## Implementação

A aplicação contém as três páginas principais: Home, listagem e visualização de produto. O catálogo tem oito produtos distintos: dois tênis, duas camisetas, duas calças e dois bonés.

- Home com quatro slides, três coleções e oito produtos em alta;
- Busca no cabeçalho, filtros por categoria, gênero e marca, além de ordenação por preço;
- Detalhes com fotografia, descrição, preço, avaliação, seleção de tamanho e produtos recomendados;
- Fotografias reais e arquivos visuais locais; cada produto possui uma foto e uma miniatura da mesma foto;
- Layout adaptável, navegação por teclado e tratamento de produtos e endereços inexistentes;
- README com setup e documentação de validação.

O layout usa o Figma como referência, com fotografias, categorias e textos personalizados. O seletor de cores foi retirado da interface para manter a demonstração simples.

Não há consumo de API, backend ou banco de dados. Preços e avaliações são dados demonstrativos. O botão Comprar confirma uma seleção; cadastro, login e pedidos são telas auxiliares demonstrativas.

## Validação realizada

- Instalação limpa com `npm ci` e build de produção aprovados;
- 87 verificações originais de comportamento e layout, incluindo as três páginas principais em cinco larguras de tela;

O registro detalhado está em [VALIDACAO.md](entregas/liucera/docs/VALIDACAO.md). O catálogo permanece com dados locais, sem integração de API externa.

## Executar a aplicação do fork

Abra a pasta `entregas/liucera` no VS Code. Com Node.js 22.12 ou superior e npm instalados, execute no terminal dessa pasta:

```bash
npm ci
npm run dev
```

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Organização desta contribuição

Os arquivos da aplicação estão em `entregas/liucera`, separados do material oficial. O README do enunciado e os recursos originais da base foram preservados. Esta contribuição apresenta uma entrega acadêmica e não altera o escopo da atividade.

# Validação da atividade 1

Conferência realizada em **13/11/2026**, com Node.js 22.15.0, npm e Chrome. A versão de produção foi servida pelo Vite Preview. Este registro descreve os cenários verificados; não representa uma garantia de ausência de qualquer defeito em todos os navegadores.

## Resultado

- Build de produção concluído sem erro.
- Instalação por `npm ci` e novo `npm run build` aprovados em uma cópia limpa, sem alterar as dependências da pasta de trabalho.
- 87 verificações de comportamento e layout aprovadas no navegador.
- Oito páginas de produto conferidas, com fotografias carregadas e nomes distintos.
- Nenhum erro de JavaScript, falha de carregamento ou solicitação de recursos externos nos cenários testados.
- Home, catálogo e detalhes conferidos em larguras de 320, 390, 768, 1440 e 1920 pixels, sem transbordamento horizontal do documento.
- Capturas das três páginas principais e dos quatro slides revisadas visualmente.

## Cenários conferidos

| Área | Verificação |
| --- | --- |
| Home | Quatro slides: Puma branco, camiseta preta, jeans e boné LA; três coleções; oito produtos em alta |
| Carrossel | Transição lateral, seleção pelos indicadores, navegação por teclado e setas desabilitadas nos limites |
| Banner | Centralização em desktop, largura máxima de 1440px e texto abaixo da imagem no celular |
| Catálogo | Oito produtos e contagem atualizada ao filtrar |
| Busca | Formulário do cabeçalho redireciona com `?filter=camiseta` e retorna as duas camisetas |
| Filtros | Categoria Calças retorna dois produtos; Limpar restaura a listagem |
| Ordenação | Menor e maior preço organizam os oito produtos pelo valor com desconto |
| Estados vazios | Busca sem resultado, produto inexistente e rota desconhecida exibem mensagens adequadas |
| Detalhes | Nome e foto corretos para cada um dos oito produtos, uma foto e uma miniatura, sem seletor de cores |
| Tamanhos | Seleção visual e `aria-pressed` atualizados em todos os produtos |
| Botão Comprar | Confirma seleção demonstrativa; confirmação reiniciada ao abrir outro produto |
| Navegação | `/`, `/products`, `/produtos`, `/products/:id` e `/product/:id`; menu ativo e retorno ao topo ao mudar de página |
| Layout comum | Header e Footer nas telas principais e auxiliares |
| Medidas de desktop | Ordenação 308×60px; galeria 700×570px; miniatura 117×95px; preços dos cards e tamanhos em 24px |
| Recursos | Fotografias, logos, ícones, favicon e Inter carregados localmente |
| Movimento reduzido | Transições desativadas quando solicitado nas preferências do navegador |

## Repetir uma conferência manual

1. Siga o setup do README e execute `npm run build` e `npm run preview`.
2. Na Home, percorra os quatro slides pelas setas e pelos indicadores. Confira as três coleções e os oito produtos.
3. Abra Produtos. Marque Calças, confira os dois resultados e clique em Limpar. Experimente as duas ordens de preço.
4. Pesquise `camiseta` no cabeçalho e confira a URL e os dois resultados. Pesquise um termo inexistente e confira a mensagem.
5. Abra cada produto pelos cards. Confira foto, nome, descrição, preço e tamanhos. Mude o tamanho e clique em Comprar para ver a confirmação demonstrativa.
6. Abra `/products/999` e uma rota inexistente. Confira as mensagens e os links de retorno.
7. Redimensione a janela ou use a visualização de dispositivos do navegador. Confira Home, catálogo e detalhes, inclusive o rodapé.
8. No console e na aba de rede do navegador, confira se há erros ou arquivos faltando.

## Personalizações e escopo

### Complemento: preparação do deploy

Foram aprovadas 36 verificações adicionais no build de publicação e repetidas as mesmas 36 no [endereço público da Vercel](https://digital-store-liucera.vercel.app), em navegador isolado e sem login. Foram conferidos busca com parâmetros, abertura direta e atualização dos detalhes, aliases das rotas, imagens, fonte e mensagens para endereços inválidos. Não houve erro de JavaScript nem arquivo faltando nesses cenários.

Uma conferência independente confirmou HTTP 200 para `/`, `/products` e `/products/1`, sem redirecionamento nem login, e comparou as oito fotografias e a fonte Inter com os arquivos locais: todos os conteúdos foram idênticos.

A Vercel confirmou o deploy de produção como `READY`, a partir do commit `3740f5e`. O build remoto usou Node.js 22, concluiu sem erros e gerou os mesmos arquivos JavaScript e CSS do build local validado.

O Figma orienta a identidade visual, os componentes e a distribuição do conteúdo. Fotos reais, categorias e textos foram personalizados conforme solicitado. A galeria de cada produto contém somente a foto correspondente e uma miniatura dessa foto. O componente de opções mantém suporte a cores, mas o seletor não é exibido nesta entrega.

Esta atividade é de Front-end. Login, cadastro e pedidos são telas demonstrativas; não há autenticação, pagamento nem carrinho persistente. O ícone de carrinho é visual, como previsto na documentação. Alguns links institucionais do rodapé retornam à Home como destinos demonstrativos.

API, deploy e pull request são opcionais no enunciado. O repositório GitHub contém o código-fonte e as instruções para execução local e publicação. O catálogo permanece sem API externa, conforme definido para esta entrega.

## Verificação básica de segurança

Na conferência da entrega, não foram encontrados arquivos `.env`, chaves privadas ou padrões conhecidos de tokens na fonte e no build. A aplicação não utiliza backend, banco de dados, pagamentos, requisições de API ou inserção direta de HTML. A consulta `npm audit --omit=dev` retornou zero vulnerabilidades conhecidas nas dependências de produção.

Essa conferência é limitada ao código e às dependências verificados. Não substitui uma auditoria completa da aplicação ou da infraestrutura de hospedagem.

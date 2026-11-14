# Publicação da Digital Store

O projeto está preparado para publicação na Vercel ou no Netlify. O código-fonte principal está em [Liucera/digital-store](https://github.com/Liucera/digital-store). A publicação deve usar o endereço padrão do provedor, sem domínio personalizado.

## Publicar na Vercel

1. Entre na Vercel e importe um projeto do GitHub.
2. Selecione `Liucera/digital-store` e a branch `main`.
3. Confira o framework Vite, o comando `npm run build` e a pasta `dist`. O arquivo `vercel.json` já define esses valores e as regras das rotas.
4. Inicie o deploy e aguarde a conclusão.
5. Use o endereço gerado pela Vercel, terminado em `.vercel.app`, sem configurar domínio personalizado.
6. Confira Home, catálogo e detalhes, inclusive ao atualizar uma página de produto diretamente.

Depois da importação, novos commits na branch `main` podem iniciar atualizações automáticas pela Vercel.

## Publicar no Netlify

1. Entre no Netlify e escolha criar um projeto a partir de um repositório existente.
2. Conecte o GitHub e selecione `Liucera/digital-store`.
3. Selecione a branch `main`.
4. Confira o comando de build `npm run build` e a pasta de publicação `dist`. O arquivo `netlify.toml` já define esses valores e o Node.js 22.
5. Inicie o deploy e aguarde a confirmação de conclusão.
6. Use o endereço gerado pelo Netlify, terminado em `.netlify.app`. Não é necessário adicionar domínio personalizado nem alterar DNS.
7. Confira Home, catálogo e detalhes, inclusive ao atualizar uma página de produto diretamente.

Após conectar o repositório, novos commits na branch `main` podem iniciar atualizações automáticas pelo Netlify.

## Conferir o build localmente

Na pasta que contém `package.json`, execute:

```bash
npm ci
npm run build
npm run preview
```

O comando `preview` permite conferir o build localmente. A publicação na internet é uma etapa separada.

## Publicação manual

Também é possível executar `npm run build` e enviar a pasta `dist` pela interface de publicação manual do Netlify. Nesse caso, o arquivo `_redirects` de `public` acompanha o build para permitir a abertura direta das rotas. Atualizações manuais exigem gerar e enviar um novo build.

## Rotas

O projeto usa React Router. O redirecionamento de `/*` para `/index.html`, com status 200, permite que `/products` e `/products/1` funcionem ao abrir ou atualizar a página. Os arquivos de imagem, fonte e scripts continuam sendo servidos normalmente.

Referências: [Vite na Vercel](https://vercel.com/docs/frameworks/frontend/vite), [publicação de projetos Vite](https://vite.dev/guide/static-deploy.html) e [rotas de aplicações no Netlify](https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/).

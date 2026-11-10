import { test, expect } from '@playwright/test';

const screenshotPath = (name) => `docs/screenshots/${name}.png`;

test('home mostra carrossel, três coleções e oito produtos', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Coleções em destaque' })).toHaveCount(2);
  await expect(page.getByRole('heading', { name: 'Produtos em alta' })).toBeVisible();
  await expect(page.locator('.collection-card')).toHaveCount(3);
  await expect(page.locator('.home-content .product-card')).toHaveCount(8);
  await page.locator('.main-nav').getByRole('link', { name: 'Produtos', exact: true }).click();
  await expect(page).toHaveURL(/\/products$/);
  await page.getByRole('link', { name: /Tênis Street Move/ }).click();
  await expect(page).toHaveURL(/\/product\/1$/);
  await expect(page.getByRole('heading', { name: 'Tênis Street Move' })).toBeVisible();
});

test('pesquisa pela query string e filtros preservam a navegação', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Buscar produtos').fill('street');
  await page.getByLabel('Buscar produtos').press('Enter');
  await expect(page).toHaveURL(/\/products\?filter=street/);
  await expect(page.getByText(/Busca: “street”/)).toBeVisible();
  await expect(page.locator('.catalog-results .product-card').first()).toBeVisible();
  await page.getByLabel('Calçados', { exact: true }).check();
  await expect(page).toHaveURL(/category=Cal%C3%A7ados/);
  await expect(page.getByRole('heading', { name: /produto encontrado/ })).toBeVisible();
  await expect(page.locator('.main-nav a.active')).toHaveText('Categorias');
});

test('galeria, seleção de opções e compra demonstrativa funcionam', async ({ page }) => {
  await page.goto('/product/1');
  const images = page.locator('.gallery-product .gallery-track img');
  await expect(images).toHaveCount(1);
  await expect(images.first()).toHaveAttribute('src', '/store/product-thumb-1.jpeg');
  await expect(page.getByRole('button', { name: 'Imagem anterior' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Próxima imagem' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Mostrar imagem 1' })).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'Selecionar tamanho 40' }).click();
  await page.getByRole('button', { name: 'Selecionar cor #dad2c8' }).click();
  await expect(page.getByRole('button', { name: 'Selecionar tamanho 40' })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByRole('button', { name: 'Selecionar cor #dad2c8' })).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'COMPRAR' }).click();
  await expect(page.getByRole('heading', { name: 'Meu carrinho' })).toBeVisible();
  await expect(page.getByRole('dialog').getByText('Tênis Street Move')).toBeVisible();
  await page.getByRole('button', { name: 'Fechar carrinho' }).click();
});

test('imagens carregam e não há erros de console nas três páginas', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  for (const route of ['/', '/products', '/product/1']) {
    await page.goto(route);
    await page.locator('img').first().waitFor();
    await page.waitForTimeout(500);
    const brokenImages = await page.locator('img').evaluateAll((images) => images.filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.src));
    expect(brokenImages, `Imagens quebradas em ${route}`).toEqual([]);
  }
  expect(errors).toEqual([]);
});

test('as três páginas não criam rolagem horizontal nos seis tamanhos solicitados', async ({ page }) => {
  for (const width of [1440, 1366, 1024, 768, 390, 375]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/products', '/product/1']) {
      await page.goto(route);
      await expect(page.locator('#conteudo')).toBeVisible();
      const dimensions = await page.evaluate(() => ({ viewport: window.innerWidth, document: document.documentElement.scrollWidth }));
      await page.evaluate(() => document.fonts.ready);
      const name = route === '/' ? 'home' : route === '/products' ? 'products' : 'product-view';
      await page.screenshot({ path: `test-results/visual/${width}/${name}.png`, fullPage: true });
      if (width === 1440) await page.screenshot({ path: screenshotPath(name), fullPage: true });
      expect(dimensions.document, `Rolagem horizontal em ${route}, viewport ${width}px`).toBeLessThanOrEqual(dimensions.viewport);
    }
  }
});

test('menu, busca e filtros mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await expect(page.locator('.main-nav .active')).toHaveText('Home');
  await page.screenshot({ path: 'test-results/visual/375/menu.png' });
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');
  await page.keyboard.press('Escape');
  await expect(page.locator('.main-nav')).toBeHidden();
  await page.getByRole('button', { name: 'Alternar busca' }).click();
  await page.screenshot({ path: 'test-results/visual/375/busca.png' });
  await page.getByLabel('Buscar produtos').fill('street');
  await page.getByRole('button', { name: 'Pesquisar', exact: true }).click();
  await expect(page).toHaveURL(/filter=street/);
  await page.getByRole('button', { name: 'Filtrar produtos' }).click();
  await expect(page.getByRole('heading', { name: 'Filtrar por' })).toBeVisible();
  await page.screenshot({ path: 'test-results/visual/375/filtros.png' });
  await page.getByRole('button', { name: 'Fechar filtros', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Filtrar por' })).toBeHidden();
});

test('o carrossel da Home navega e desabilita as setas nas extremidades', async ({ page }) => {
  await page.goto('/');
  const gallery = page.locator('.gallery-banner');
  const previous = gallery.getByRole('button', { name: 'Imagem anterior' });
  const next = gallery.getByRole('button', { name: 'Próxima imagem' });
  await expect(previous).toBeDisabled();
  await next.click();
  await expect(gallery.locator('.gallery-track')).toHaveAttribute('style', /translateX\(-100%\)/);
  await gallery.getByRole('button', { name: 'Ir para slide 2' }).click();
  await expect(next).toBeDisabled();
  await previous.click();
  await expect(next).toBeEnabled();
});

test('categorias e coleções da Home respeitam o estoque demonstrativo', async ({ page }) => {
  const destinations = [
    ['.category-icons', 'Camisetas', 'Roupas', '', 0],
    ['.category-icons', 'Calças', 'Roupas', '', 0],
    ['.category-icons', 'Bonés', 'Acessórios', '', 0],
    ['.category-icons', 'Headphones', 'Acessórios', '', 0],
    ['.category-icons', 'Tênis', 'Calçados', '', 10],
    ['.collections-grid', /Novo drop Supreme/, 'Roupas', '', 0],
    ['.collections-grid', /Coleção Adidas/, 'Calçados', 'Adidas', 0],
    ['.collections-grid', /Novo Beats Bass/, 'Acessórios', '', 0]
  ];

  for (const [section, name, category, brand, count] of destinations) {
    await page.goto('/');
    await page.locator(section).getByRole('link', { name }).click();
    await expect(page).toHaveURL(url =>
      url.pathname === '/products' &&
      url.searchParams.get('category') === category &&
      (url.searchParams.get('brand') || '') === brand
    );
    await expect(page.locator('.catalog-results .product-card')).toHaveCount(count);
    if (!count) {
      await expect(page.getByRole('heading', { name: /Sem produtos em/ })).toBeVisible();
      await page.getByRole('button', { name: 'Ver todos os produtos' }).click();
      await expect(page.locator('.catalog-results .product-card')).toHaveCount(10);
    }
  }
});

test('galeria de detalhes sincroniza setas e miniaturas com várias imagens', async ({ page }) => {
  // Vistas sintéticas isoladas para testar o componente sem alterar as fotos do catálogo.
  await page.route('**/src/data/products.js*', async route => {
    const response = await route.fetch();
    const images = ['red', 'blue', 'green'].map(color =>
      'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><circle cx="40" cy="40" r="35" fill="' + color + '"/></svg>')
    );
    await route.fulfill({ response, body: (await response.text()) + '\nproducts[0].images = ' + JSON.stringify(images) + ';' });
  });
  await page.goto('/product/1');
  const gallery = page.locator('.gallery-product');
  const previous = gallery.getByRole('button', { name: 'Imagem anterior' });
  const next = gallery.getByRole('button', { name: 'Próxima imagem' });
  await expect(previous).toBeDisabled();
  await next.click();
  await expect(gallery.getByRole('button', { name: 'Mostrar imagem 2' })).toHaveAttribute('aria-pressed', 'true');
  await gallery.getByRole('button', { name: 'Mostrar imagem 3' }).click();
  await expect(gallery.locator('.gallery-track')).toHaveAttribute('style', /translateX\(-200%\)/);
  await expect(next).toBeDisabled();
  await previous.click();
  await expect(gallery.locator('.gallery-track')).toHaveAttribute('style', /translateX\(-100%\)/);
  await expect(next).toBeEnabled();
});

test('banner inicial usa a arte recortada do Figma, sem foto retangular', async ({ page }) => {
  await page.goto('/');
  const hero = page.locator('.hero');
  const shoe = hero.locator('.hero-slide img').first();
  await expect(shoe).toHaveAttribute('src', '/store/nike-air-force-white-red.png');
  await expect(hero.getByRole('heading', { name: /Queima de.*estoque Nike/i })).toBeVisible();
  await expect(hero.getByRole('link', { name: 'Ver Ofertas' })).toBeVisible();
  await expect.poll(() => shoe.evaluate(image => image.complete && image.naturalWidth > 0)).toBe(true);
  await expect(hero.locator('.gallery-dots button')).toHaveCount(2);
  await expect(hero.locator('.hero-slide img')).toHaveCount(2);
  const sources = await hero.locator('.hero-slide img').evaluateAll(
    images => images.map(image => image.getAttribute('src'))
  );
  expect(sources).toEqual([
    '/store/nike-air-force-white-red.png',
    '/store/home-slide-4-cutout.png'
  ]);
  expect(new Set(sources).size).toBe(2);
  // Imagens fora do slide ativo podem carregar sob demanda.
  // Avançamos o carrossel antes de conferir cada arquivo.
  for (let index = 0; index < sources.length; index += 1) {
    await hero.getByRole('button', { name: `Ir para slide ${index + 1}` }).click();
    const image = hero.locator('.hero-slide img').nth(index);
    await expect.poll(() => image.evaluate(node => node.complete && node.naturalWidth > 0)).toBe(true);
  }
});

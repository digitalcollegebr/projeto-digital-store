import test from 'node:test';
import assert from 'node:assert/strict';
import { getProducts, getProduct, getCollections } from '../src/lib/catalog.js';

test('home contém 8 produtos em destaque', () => {
  assert.equal(getProducts({ featured: true }).length, 8);
});

test('busca filtra o catálogo sem diferenciar maiúsculas', () => {
  const result = getProducts({ filter: 'nike' });
  assert.ok(result.length > 0);
  assert.ok(result.every((item) => item.brand === 'Nike'));
});

test('filtros de categoria e marca combinam', () => {
  const items = getProducts({ category: 'Calçados', brand: 'Converse' });
  assert.ok(items.length > 0);
  assert.ok(items.every((p) => p.category === 'Calçados' && p.brand === 'Converse'));
});

test('ordenação considera preços com desconto', () => {
  const items = getProducts({ sort: 'price-asc' });
  const prices = items.map((p) => p.priceDiscount ?? p.price);
  assert.deepEqual(prices, [...prices].sort((a, b) => a - b));
});

test('consulta item por id e recusa id inexistente', () => {
  assert.equal(getProduct(1)?.id, 1);
  assert.equal(getProduct(999999), null);
});

test('a home possui 3 coleções', () => {
  assert.equal(getCollections().length, 3);
});

test('fotos do catálogo pertencem exclusivamente à galeria do item', () => {
  const assigned = new Set();
  for (const product of getProducts()) {
    assert.deepEqual(product.images, [product.image]);
    for (const image of product.images) {
      assert.ok(!assigned.has(image), image);
      assigned.add(image);
    }
  }
});

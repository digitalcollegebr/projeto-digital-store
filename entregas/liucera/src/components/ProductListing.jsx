import ProductCard from './ProductCard.jsx';

export default function ProductListing({ products = [] }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-state__icon" aria-hidden="true">⌕</span>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente mudar a busca ou remover alguns filtros.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id || product.name} product={product} />
      ))}
    </div>
  );
}

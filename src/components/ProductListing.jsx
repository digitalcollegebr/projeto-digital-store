import ProductCard from './ProductCard.jsx'

export default function ProductListing({ products, emptyMessage = 'Nenhum produto encontrado.' }) {
  if (!products.length) return <div className="empty-results" role="status">{emptyMessage}</div>
  return <div className="products-grid">
    {products.map(product => <ProductCard key={product.id} {...product} />)}
  </div>
}

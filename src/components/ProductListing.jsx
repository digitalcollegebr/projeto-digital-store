import ProductCard from './ProductCard';
export default function ProductListing({ products = [] }) {
  return <div className="product-grid">{products.map((product, index) => <ProductCard key={product.id ?? `${product.name}-${index}`} product={product} />)}</div>;
}

import ProductCard from '../ProductCard';
import './ProductListing.css';

/**
 * Lista de produtos: renderiza um <ProductCard /> para cada item de "products".
 * @param {{id?, name, image, price, priceDiscount?, category?}[]} products
 * @param {number} columns - Quantidade de colunas no desktop (padrão: 4)
 */
export default function ProductListing({ products = [], columns = 4 }) {
  if (!products.length) {
    return <p className="status-message">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="product-listing" style={{ '--columns': columns }}>
      {products.map((product, index) => (
        <ProductCard key={product.id ?? index} {...product} />
      ))}
    </div>
  );
}

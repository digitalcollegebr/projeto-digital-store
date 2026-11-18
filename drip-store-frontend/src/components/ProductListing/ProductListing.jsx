import ProductCard from '../ProductCard/ProductCard';
import './ProductListing.css';

/**
 * Encapsula uma lista de <ProductCard />.
 * @param {{name, image, price, priceDiscount}[]} products
 * @param {number} [columns=4]
 */
export default function ProductListing({ products = [], columns = 4 }) {
  if (!products.length) {
    return <p className="product-listing__empty">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="product-listing" style={{ '--columns': columns }}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id ?? index}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
          category={product.category}
        />
      ))}
    </div>
  );
}

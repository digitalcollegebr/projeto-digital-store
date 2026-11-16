import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductListing.css";

export const ProductListing = ({ products = [] }) => {
  return (
    <div className="product-listing-grid">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};
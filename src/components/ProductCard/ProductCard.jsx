import './ProductCard.css';

export const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>

      <h3 className="product-name">{name}</h3>

      <div className="product-prices">
        {priceDiscount ? (
          <>
            <span className="product-price-old">
              {price}
            </span>

            <span className="product-price-discount">
              {priceDiscount}
            </span>
          </>
        ) : (
          <span className="product-price-current">{price}</span>
        )}
      </div>
    </div>
  );
};
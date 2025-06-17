import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

import nikeBlue from "../assets/products/nike-blue.png";
import nikeG from "../assets/products/K-swiss V8 - Masculino.png";
import nikeB from "../assets/products/Tênis-puma.png";
import kswisV from "../assets/products/Tênis-kswis-speedster.png";
import nikeR from "../assets/products/Tênis-nike-feminino.png";
import originebr from "../assets/products/Tênis-origine.png";
import ownth from "../assets/products/Tênis-own-the-game.png";
import adidasA from "../assets/products/Tênis-adidas.png";
import nikeye from "../assets/products/nike-yellow.png";
import nikeBlack from "../assets/products/nike-black.png";
import nikegreee from "../assets/products/nike-green.png";

interface IProductListingProps {
  len: number;
  products?: Product[];
}

export interface Product {
  category: string;
  image: string;
  name: string;
  price: number;
  priceDiscount?: number;
}

const defaultProducts: Product[] = [
  { category: "Tênis", name: "Tênis K-swiss V8 - Masculino", image: nikeG, price: 49.9, priceDiscount: 20 },
  { category: "Tênis", name: "Tênis Nike - Feminino", image: nikeBlue, price: 50.9, priceDiscount: 20 },
  { category: "Tênis", name: "Tênis Puma - Masculino", image: nikeB, price: 50.9, priceDiscount: 20 },
  { category: "Tênis", name: "Tênis Adidas", image: adidasA, price: 49.9, priceDiscount: 20 },
  { category: "Tênis", name: "Tênis Own the Game", image: ownth, price: 50.9, priceDiscount: 20 },
  { category: "Tênis", name: "Tênis Origine", image: originebr, price: 50.9, priceDiscount: 20 },
  { category: "Tênis", name: "Tênis Nike Feminino", image: nikeR, price: 49.9, priceDiscount: 20 },
  { category: "Tênis", name: "Tênis K-Swiss Speedster", image: kswisV, price: 50.9, priceDiscount: 20 },
  { category: "Tênis", name: "Nike Yellow", image: nikeye, price: 49.9, priceDiscount: 20 },
  { category: "Tênis", name: "Nike Black", image: nikeBlack, price: 50.9, priceDiscount: 20 },
  { category: "Tênis", name: "Nike Green", image: nikegreee, price: 50.9, priceDiscount: 20 },
  { category: "Tênis", name: "Nike Branco/Verde", image: nikegreee, price: 160.0, priceDiscount: 20 }
];

export default function ProductListing({ len, products }: IProductListingProps) {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const query = searchParams.get("filter")?.toLowerCase() || "";

  useEffect(() => {
    const base = products ?? defaultProducts;

    if (query) {
      const result = base.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      setFilteredProducts(result);
    } else {
      setFilteredProducts(base);
    }
  }, [query, products]);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:w-[80vw] m-auto">
    {filteredProducts.length === 0 ? (
  <p className="text-center col-span-full mt-4 text-lg text-gray-500">
    Nenhum produto encontrado.
  </p>
) : (
  filteredProducts.slice(0, len).map((product, index) => (
    <ProductCard
      key={index}
      index={index}
      category={product.category}
      name={product.name}
      image={product.image}
      price={product.price}
      priceDiscount={product.priceDiscount}
    />
  ))
)}

    </div>
  );
}

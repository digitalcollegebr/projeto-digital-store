import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

/** Carrega a lista de produtos (API ou dados locais). */
export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getProducts().then((list) => {
      if (active) {
        setProducts(list);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return { products, loading };
}

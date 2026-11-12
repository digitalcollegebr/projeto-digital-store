import { useEffect, useState } from 'react';
import { getProducts, getCategories } from '../services/api';

/**
 * Carrega produtos e categorias (da API ou dos dados locais).
 * @returns {{ products: object[], categories: object[], loading: boolean }}
 */
export default function useStoreData() {
  const [state, setState] = useState({ products: [], categories: [], loading: true });

  useEffect(() => {
    let active = true;
    Promise.all([getProducts(), getCategories()]).then(([products, categories]) => {
      if (active) setState({ products, categories, loading: false });
    });
    return () => {
      active = false;
    };
  }, []);

  return state;
}

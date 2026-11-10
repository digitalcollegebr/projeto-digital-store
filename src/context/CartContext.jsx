import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

function readStorage(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStorage('drip-cart'));
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('drip-cart', JSON.stringify(items));
    } catch {
      // O carrinho continua disponível em memória.
    }
  }, [items]);

  function add(product, size, color) {
    setItems((current) => {
      const index = current.findIndex((item) => item.productId === product.id && item.size === size && item.color === color);
      if (index === -1) return [...current, {
        productId: product.id, name: product.name, image: product.image,
        price: product.priceDiscount ?? product.price, size, color, quantity: 1
      }];
      return current.map((item, position) => position === index ? {...item, quantity: Math.min(item.quantity + 1, 10)} : item);
    });
    setMessage('');
    setOpen(true);
  }

  function remove(productId, size, color) {
    setItems((current) => current.filter((item) => !(item.productId === productId && item.size === size && item.color === color)));
  }

  function checkout() {
    if (!items.length) return;
    const order = {
      id: `TESTE-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'Pedido de teste',
      items,
      total: Number(items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2))
    };
    try {
      const previous = readStorage('drip-orders');
      localStorage.setItem('drip-orders', JSON.stringify([order, ...previous].slice(0, 20)));
      setItems(() => []);
      setMessage('Pedido salvo neste navegador. É só um teste; nenhuma compra foi feita.');
    } catch {
      setMessage('Não foi possível salvar o pedido neste navegador.');
    }
  }

  const count = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((value, item) => value + item.price * item.quantity, 0);
  return <CartContext.Provider value={{ items, count, total, open, setOpen, add, remove, checkout, busy: false, message }}>
    {children}
  </CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}

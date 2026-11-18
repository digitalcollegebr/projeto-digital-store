import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { load, save } from '../utils/storage';

const CartContext = createContext(null);
const CART_KEY = 'drip-store:cart';
const ORDERS_KEY = 'drip-store:orders';

export const FREE_SHIPPING_FROM = 300;
export const SHIPPING_PRICE = 19.9;

const unitPrice = (item) => item.priceDiscount ?? item.price;
const itemKey = (productId, size, color) => `${productId}|${size || ''}|${color || ''}`;

/** Carrinho e pedidos, persistidos no navegador. */
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => load(CART_KEY, []));
  const [orders, setOrders] = useState(() => load(ORDERS_KEY, []));

  useEffect(() => save(CART_KEY, items), [items]);
  useEffect(() => save(ORDERS_KEY, orders), [orders]);

  const addItem = useCallback((product, { size, color, quantity = 1 } = {}) => {
    const key = itemKey(product.id, size, color);
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          priceDiscount: product.priceDiscount,
          size,
          color,
          quantity,
        },
      ];
    });
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    setItems((prev) =>
      quantity < 1 ? prev.filter((i) => i.key !== key) : prev.map((i) => (i.key === key ? { ...i, quantity } : i))
    );
  }, []);

  const removeItem = useCallback((key) => setItems((prev) => prev.filter((i) => i.key !== key)), []);

  const summary = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const total = items.reduce((sum, i) => sum + unitPrice(i) * i.quantity, 0);
    const discount = subtotal - total;
    const shipping = items.length === 0 || total >= FREE_SHIPPING_FROM ? 0 : SHIPPING_PRICE;
    return {
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal,
      discount,
      shipping,
      total: total + shipping,
    };
  }, [items]);

  /** Fecha o pedido (simulado): salva em "Meus Pedidos" e esvazia o carrinho. */
  const checkout = useCallback(
    (user) => {
      const order = {
        id: Date.now().toString(36).toUpperCase(),
        date: new Date().toISOString(),
        userEmail: user?.email,
        items,
        ...summary,
      };
      setOrders((prev) => [order, ...prev]);
      setItems([]);
      return order;
    },
    [items, summary]
  );

  const value = useMemo(
    () => ({ items, orders, summary, addItem, updateQuantity, removeItem, checkout }),
    [items, orders, summary, addItem, updateQuantity, removeItem, checkout]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);

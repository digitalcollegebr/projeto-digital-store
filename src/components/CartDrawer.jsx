import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { money } from '../lib/money';
export default function CartDrawer() {
  const {items, total, open, setOpen, remove, checkout, busy, message} = useCart();
  if (!open) return null;
  return <div className="drawer-backdrop" onMouseDown={(e) => { if(e.target === e.currentTarget) setOpen(false); }}>
    <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Meu carrinho">
      <div className="drawer-header"><h2>Meu carrinho</h2><button aria-label="Fechar carrinho" onClick={() => setOpen(false)}><X /></button></div>
      {items.length ? <div className="cart-items">{items.map(item=><div className="cart-item" key={`${item.productId}-${item.size}-${item.color}`}>
        {item.image && <img src={item.image} alt="" />}<div><strong>{item.name}</strong><small>Tam. {item.size} · Qtd. {item.quantity}</small><span>{money(item.price * item.quantity)}</span></div>
        <button aria-label={`Remover ${item.name}`} onClick={()=>remove(item.productId,item.size,item.color)}><Trash2 size={17}/></button>
      </div>)}</div> : <div className="empty-cart"><ShoppingBag size={44}/><p>Seu carrinho está vazio.</p><Link to="/products" onClick={()=>setOpen(false)}>Ver produtos</Link></div>}
      <div className="drawer-footer">{message && <p className="cart-message" role="status">{message}</p>}{items.length > 0 && <><div className="cart-total"><span>Total</span><strong>{money(total)}</strong></div><button className="buy-button" disabled={busy} onClick={checkout}>{busy?'Registrando...':'Salvar pedido de teste'}</button></>}</div>
    </aside>
  </div>;
}

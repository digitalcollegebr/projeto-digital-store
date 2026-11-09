import { useState } from 'react'
import { Link } from 'react-router-dom'

export function CategoriesPage() {
  const categories=[{name:'Casual',label:'Tênis casuais'},{name:'Corrida',label:'Tênis de corrida'},{name:'Basquete',label:'Tênis de basquete'}]
  return <div className="page-bg"><div className="container extra-page"><h1>Categorias</h1><p>Explore os produtos por estilo.</p><div className="categories-links">{categories.map(category=><Link key={category.name} to={`/products?category=${encodeURIComponent(category.name)}`}>{category.label}<span aria-hidden="true">→</span></Link>)}</div></div></div>
}

export function OrdersPage() {
  return <div className="page-bg"><div className="container extra-page"><h1>Meus pedidos</h1><p>Esta é uma interface demonstrativa. Não há autenticação ou compras reais neste projeto.</p><Link to="/products" className="button button-primary">Explorar produtos</Link></div></div>
}

export function AuthPage({ mode = 'login' }) {
  const [notice, setNotice] = useState(false)
  const register = mode === 'register'
  function handleSubmit(event) {
    event.preventDefault()
    setNotice(true)
  }
  return <div className="page-bg"><div className="container auth-page">
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>{register ? 'Criar conta' : 'Entrar'}</h1>
      <p>Interface demonstrativa da Digital Store</p>
      {register && <label>Nome completo<input type="text" required placeholder="Seu nome" /></label>}
      <label>E-mail<input type="email" required placeholder="seu@email.com" /></label>
      <label>Senha<input type="password" minLength={6} required placeholder="Sua senha" /></label>
      <button className="button button-primary" type="submit">{register ? 'Criar conta' : 'Entrar'}</button>
      {notice && <p role="status" className="demo-notice">Demonstração: nenhuma conta foi criada e nenhum dado foi enviado.</p>}
      <Link to={register ? '/entrar' : '/cadastro'}>{register ? 'Já possui conta? Entrar' : 'Não possui conta? Cadastre-se'}</Link>
    </form>
  </div></div>
}

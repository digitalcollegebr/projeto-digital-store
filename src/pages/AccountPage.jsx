import { Link, useSearchParams } from 'react-router-dom';
export default function AccountPage() {
 const [params]=useSearchParams(); const isRegister=params.get('mode')==='register';
 return <div className="container account-page"><div className="account-card"><p className="eyebrow">Drip Store</p><h1>{isRegister?'Cadastro':'Entrar'}</h1><p>O cadastro e o login ainda não estão disponíveis nesta versão. Você pode ver os produtos e testar o carrinho normalmente.</p><Link className="primary-button" to="/products">Ver produtos</Link></div></div>;
}

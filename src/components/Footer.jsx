import { Link } from 'react-router-dom';
import Logo from './Logo';
const socials = '/store/';
const groups = [
  { title: 'Informações', links: [{text:'Sobre a Drip Store',to:'/account'},{text:'Produtos',to:'/products'},{text:'Categorias',to:'/products?category=Calçados'}] },
  { title: 'Categorias', links: [{text:'Camisetas',to:'/products?category=Roupas'},{text:'Calças',to:'/products?category=Roupas'},{text:'Bonés',to:'/products?category=Acessórios'},{text:'Headphones',to:'/products?category=Acessórios'},{text:'Tênis',to:'/products?category=Calçados'}] }
];
function FooterInfo({title,informations}) { return <div className="footer-links"><h3>{title}</h3>{informations.map(info=><Link key={info.text} to={info.link}>{info.text}</Link>)}</div> }
export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-columns">
      <div className="footer-about"><Logo light /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><div className="social-links">
        {['facebook','instagram','twitter'].map((social) => <a key={social} href={`https://${social}.com`} aria-label={`Abrir ${social}`} target="_blank" rel="noreferrer"><img src={`${socials}${social}.svg`} alt="" width="20" height="20" /></a>)}
      </div></div>
      {groups.map((group) => <FooterInfo key={group.title} title={group.title} informations={group.links.map(({text,to})=>({text,link:to}))} />)}
      <div className="footer-links"><h3>Contato</h3><p>Fortaleza, CE</p><p>Projeto desenvolvido para a Digital College.</p></div>
    </div>
    <div className="container"><hr className="footer-divider" /><div className="footer-bottom">© 2024 Digital Store</div></div>
  </footer>;
}

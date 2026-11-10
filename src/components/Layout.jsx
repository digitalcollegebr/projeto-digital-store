import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
export default function Layout() { return <><Header /><main id="conteudo"><Outlet /></main><Footer /><CartDrawer /></> }

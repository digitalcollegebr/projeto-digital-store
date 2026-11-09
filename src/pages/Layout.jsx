import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function Layout({ children }) {
  return <><Header/><main className="site-main">{children}</main><Footer/></>
}

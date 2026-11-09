import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import { products } from '../data/products.js'

const homeSlides = Array.from({length: 8}, (_,i) => ({src: `/home-slide-${i+1}.jpeg`, alt: `Destaque de produtos ${i+1}`}))
const collections = [
  {src:'/collection-1.png',alt:'Coleção em destaque 1',href:'/products?category=Casual'},
  {src:'/collection-2.png',alt:'Coleção em destaque 2',href:'/products?category=Corrida'},
  {src:'/collection-3.png',alt:'Coleção em destaque 3',href:'/products?category=Basquete'},
]

export default function HomePage() {
  return <>
    <div className="home-hero"><Gallery images={homeSlides} width={1440} height={681} className="home-slider" /></div>
    <div className="container">
      <Section title="Coleções em destaque" titleAlign="center">
        <div className="collections-grid">{collections.map(item=><Link to={item.href} key={item.src} aria-label={item.alt}><img src={item.src} alt={item.alt} loading="lazy" /></Link>)}</div>
      </Section>
      <Section title="Produtos em alta" link={{text:'Ver todos',href:'/products'}}>
        <ProductListing products={products.slice(0,8)} />
      </Section>
    </div>
  </>
}

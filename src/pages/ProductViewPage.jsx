import { Link, useParams } from 'react-router-dom'
import BuyBox from '../components/BuyBox.jsx'
import Gallery from '../components/Gallery.jsx'
import ProductOptions from '../components/ProductOptions.jsx'
import ProductListing from '../components/ProductListing.jsx'
import Section from '../components/Section.jsx'
import { getProductById, products } from '../data/products.js'

export default function ProductViewPage() {
  const { id } = useParams()
  const product = getProductById(id)
  if (!product) return <div className="container not-found"><h1>Produto não encontrado</h1><p>O produto solicitado não está em nosso catálogo.</p><Link className="button button-primary" to="/products">Ver produtos</Link></div>

  // As imagens do repositório podem variar de nome entre versões;
  // a miniatura do produto é um fallback para evitar uma galeria vazia.
  const images = Array.from({length: 5}, (_,i) => ({src:`/produc-image-${i+1}.jpeg`,fallback:product.image,alt:`${product.name} — foto ${i+1}`}))
  const recommended = products.filter(item => item.id !== product.id).slice(0,4)
  return <div className="page-bg"><div className="container product-page">
    <p className="breadcrumb"><Link to="/">Home</Link> / <Link to="/products">Produtos</Link> / {product.name}</p>
    <div className="product-detail-layout">
      <Gallery key={product.id} images={images} width={700} height={570} showThumbs radius="4px" />
      <BuyBox {...product}>
        <ProductOptions title="Tamanho" shape="square" radius="4px" type="text" options={['38','39','40','41','42','43']} />
        <ProductOptions title="Cor" shape="circle" type="color" options={['#1F1F1F','#ED696B','#B5B6F2','#D6AB83']} />
      </BuyBox>
    </div>
    <Section title="Produtos recomendados" link={{text:'Ver todos',href:'/products'}}><ProductListing products={recommended}/></Section>
  </div></div>
}

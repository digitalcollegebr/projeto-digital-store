import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterGroup from '../components/FilterGroup.jsx'
import ProductListing from '../components/ProductListing.jsx'
import Section from '../components/Section.jsx'
import { products } from '../data/products.js'
import { currentPrice } from '../utils/prices.js'

const brandOptions = ['Nike','Adidas','Puma','K-Swiss','Olympikus'].map(text => ({ text, value:text }))
const genderOptions = ['Masculino','Feminino','Unissex'].map(text => ({ text, value:text }))
const categoryOptions = ['Casual','Corrida','Basquete'].map(text => ({ text, value:text }))

export default function ProductListingPage() {
  const [params] = useSearchParams()
  const filterText = (params.get('filter') || '').trim().toLowerCase()
  const categoryFromUrl = params.get('category') || ''
  const [sort, setSort] = useState('')
  const [brands, setBrands] = useState([])
  const [genders, setGenders] = useState([])
  const [categories, setCategories] = useState([])

  function toggle(setter, value) {
    setter(previous => previous.includes(value) ? previous.filter(item => item!==value) : [...previous, value])
  }

  const visibleProducts = useMemo(() => {
    const matching = products.filter(product => {
      const matchingText = !filterText || `${product.name} ${product.brand} ${product.category} ${product.gender}`.toLowerCase().includes(filterText)
      return matchingText && (!categoryFromUrl || product.category === categoryFromUrl) &&
        (!brands.length || brands.includes(product.brand)) &&
        (!genders.length || genders.includes(product.gender)) &&
        (!categories.length || categories.includes(product.category))
    })
    if (sort === 'min') matching.sort((a,b)=>currentPrice(a)-currentPrice(b))
    if (sort === 'max') matching.sort((a,b)=>currentPrice(b)-currentPrice(a))
    return matching
  }, [filterText, categoryFromUrl, brands, genders, categories, sort])

  return <div className="page-bg"><div className="container listing-page">
    <div className="listing-top"><div><p className="breadcrumb">Home / Produtos</p><h1>Resultados para: {filterText ? `“${params.get('filter')}”` : categoryFromUrl || 'Todos os produtos'}</h1></div><p className="results-count">{visibleProducts.length} produto(s) encontrado(s)</p></div>
    <div className="listing-layout">
      <aside className="listing-sidebar" aria-label="Filtros de produtos">
        <label className="sort-box">Ordenar por
          <select value={sort} onChange={e=>setSort(e.target.value)}><option value="">Selecione</option><option value="min">Menor preço</option><option value="max">Maior preço</option></select>
        </label>
        <div className="filters-box"><h2>Filtrar por</h2><hr/>
          <FilterGroup title="Marca" options={brandOptions} values={brands} onChange={value=>toggle(setBrands,value)} />
          <FilterGroup title="Categoria" options={categoryOptions} values={categories} onChange={value=>toggle(setCategories,value)} />
          <FilterGroup title="Gênero" options={genderOptions} values={genders} onChange={value=>toggle(setGenders,value)} />
          <button type="button" className="filters-clear" onClick={()=>{setBrands([]);setGenders([]);setCategories([]);setSort('')}}>Limpar filtros</button>
        </div>
      </aside>
      <div className="listing-content"><Section title={`${visibleProducts.length} produto(s) encontrado(s)`}><ProductListing products={visibleProducts} /></Section></div>
    </div>
  </div></div>
}

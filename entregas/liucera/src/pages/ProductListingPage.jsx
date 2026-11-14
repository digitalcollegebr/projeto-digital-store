import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import FilterGroup from '../components/FilterGroup.jsx';
import ProductListing from '../components/ProductListing.jsx';
import Section from '../components/Section.jsx';
import { products } from '../data/products.js';

const productFilterOptions = (key) =>
  [...new Set(products.map((product) => product[key]))].map((value) => ({
    text: value,
    value,
  }));

const filterGroups = [
  {
    title: 'Categoria',
    name: 'category',
    options: productFilterOptions('category'),
  },
  {
    title: 'Gênero',
    name: 'gender',
    options: productFilterOptions('gender'),
  },
  {
    title: 'Marca',
    name: 'brand',
    options: productFilterOptions('brand'),
  },
];

const normalizeCategory = (category) =>
  category === 'Tenis' ? 'Tênis' : category;

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter') || '';
  const categoryFromUrl = normalizeCategory(searchParams.get('category') || '');
  const [selectedFilters, setSelectedFilters] = useState({
    category: categoryFromUrl ? [categoryFromUrl] : [],
    gender: [],
    brand: [],
  });
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    setSelectedFilters((current) => ({
      ...current,
      category: categoryFromUrl ? [categoryFromUrl] : [],
    }));
  }, [categoryFromUrl]);

  const visibleProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = (product.name + ' ' + product.brand + ' ' + product.category)
        .toLocaleLowerCase('pt-BR')
        .includes(searchTerm.toLocaleLowerCase('pt-BR'));
      const matchesCategory =
        selectedFilters.category.length === 0 ||
        selectedFilters.category.includes(product.category);
      const matchesGender =
        selectedFilters.gender.length === 0 ||
        selectedFilters.gender.includes(product.gender);
      const matchesBrand =
        selectedFilters.brand.length === 0 ||
        selectedFilters.brand.includes(product.brand);

      return matchesSearch && matchesCategory && matchesGender && matchesBrand;
    });

    if (sortOrder === 'lowest') {
      result = [...result].sort(
        (a, b) => (a.priceDiscount || a.price) - (b.priceDiscount || b.price),
      );
    } else if (sortOrder === 'highest') {
      result = [...result].sort(
        (a, b) => (b.priceDiscount || b.price) - (a.priceDiscount || a.price),
      );
    }

    return result;
  }, [searchTerm, selectedFilters, sortOrder]);

  function toggleFilter(groupName, value, checked) {
    setSelectedFilters((current) => {
      const values = current[groupName];
      return {
        ...current,
        [groupName]: checked
          ? [...values, value]
          : values.filter((item) => item !== value),
      };
    });
  }

  function clearFilters() {
    setSelectedFilters({ category: [], gender: [], brand: [] });
    setSortOrder('');
  }

  const title = searchTerm
    ? 'Resultados para “' + searchTerm + '” (' + visibleProducts.length + ')'
    : 'Produtos (' + visibleProducts.length + ')';

  return (
    <div className="page-container listing-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Produtos</span>
      </div>
      <div className="listing-layout">
        <aside className="filters" aria-label="Filtros de produtos">
          <div className="filters__sort">
            <label htmlFor="sort-products">Ordenar por</label>
            <select
              id="sort-products"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
            >
              <option value="">Mais relevantes</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </select>
          </div>
          <div className="filters__panel">
            <div className="filters__panel-heading">
              <h2>Filtrar por</h2>
              <button type="button" onClick={clearFilters}>Limpar</button>
            </div>
            {filterGroups.map((group) => (
              <FilterGroup
                key={group.name}
                title={group.title}
                name={group.name}
                options={group.options}
                selectedValues={selectedFilters[group.name]}
                onChange={(value, checked) => toggleFilter(group.name, value, checked)}
              />
            ))}
          </div>
        </aside>
        <div className="listing-results">
          <Section title={title}>
            <ProductListing products={visibleProducts} />
          </Section>
        </div>
      </div>
    </div>
  );
}

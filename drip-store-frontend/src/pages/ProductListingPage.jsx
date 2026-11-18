import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './Layout';
import Section from '../components/Section/Section';
import ProductListing from '../components/ProductListing/ProductListing';
import FilterGroup from '../components/FilterGroup/FilterGroup';
import useProducts from '../hooks/useProducts';
import { filterGroups } from '../data/products';
import './pages.css';

const SORTS = {
  lowest: { label: 'Menor preço', fn: (a, b) => effectivePrice(a) - effectivePrice(b) },
  highest: { label: 'Maior preço', fn: (a, b) => effectivePrice(b) - effectivePrice(a) },
};

const effectivePrice = (p) => p.priceDiscount ?? p.price;

const normalize = (text) =>
  String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

export default function ProductListingPage() {
  const { products, loading } = useProducts();
  const [searchParams] = useSearchParams();
  const term = searchParams.get('filter') || '';

  const [sort, setSort] = useState('lowest');
  const [filters, setFilters] = useState({}); // { brand: ['Nike'], condition: ['Novo'] }
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (key, inputType) => (value, checked) => {
    setFilters((prev) => {
      const current = prev[key] || [];
      if (inputType === 'radio') return { ...prev, [key]: [value] };
      return { ...prev, [key]: checked ? [...current, value] : current.filter((v) => v !== value) };
    });
  };

  const visible = useMemo(() => {
    const q = normalize(term);
    return products
      .filter((p) => !q || normalize(`${p.name} ${p.brand} ${p.category} ${p.type}`).includes(q))
      .filter((p) => Object.entries(filters).every(([key, values]) => !values.length || values.includes(p[key])))
      .sort(SORTS[sort].fn);
  }, [products, term, filters, sort]);

  const activeCount = Object.values(filters).flat().length;
  const title = term
    ? `Resultados para "${term}" - ${visible.length} produto${visible.length === 1 ? '' : 's'}`
    : `${visible.length} produto${visible.length === 1 ? '' : 's'} encontrado${visible.length === 1 ? '' : 's'}`;

  return (
    <Layout>
      <div className="container page listing">
        <aside className="listing__sidebar">
          <label className="listing__sort">
            <span>Ordenar por</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {Object.entries(SORTS).map(([value, { label }]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <button type="button" className="listing__toggle" onClick={() => setShowFilters((s) => !s)}>
            {showFilters ? 'Ocultar filtros' : 'Filtrar'} {activeCount > 0 && `(${activeCount})`}
          </button>

          <div className={`listing__filters ${showFilters ? 'is-open' : ''}`}>
            <h2 className="listing__filters-title">Filtrar por</h2>
            <hr />
            {filterGroups.map((group) => (
              <FilterGroup
                key={group.key}
                title={group.title}
                inputType={group.inputType}
                options={group.options}
                selected={filters[group.key] || []}
                onChange={toggleFilter(group.key, group.inputType)}
              />
            ))}
            {activeCount > 0 && (
              <button type="button" className="listing__clear" onClick={() => setFilters({})}>
                Limpar filtros
              </button>
            )}
          </div>
        </aside>

        <Section title={loading ? 'Carregando...' : title} titleAlign="left" className="listing__results">
          {!loading && <ProductListing products={visible} columns={3} />}
        </Section>
      </div>
    </Layout>
  );
}

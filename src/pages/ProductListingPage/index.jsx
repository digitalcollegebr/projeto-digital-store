import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';
import useStoreData from '../../hooks/useStoreData';
import { toCardProps, finalPrice } from '../../services/api';
import { brands, genders } from '../../data/products';
import './ProductListingPage.css';

const SORT_OPTIONS = [
  { value: 'lowest', text: 'Menor preço' },
  { value: 'highest', text: 'Maior preço' },
];

const STATE_OPTIONS = [{ text: 'Novo', value: 'new' }, { text: 'Usado', value: 'used' }];

/** Remove acentos e deixa em minúsculas para comparar textos. */
function normalize(text = '') {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/** Adiciona ou remove um valor de uma lista (para os checkboxes). */
function toggle(list, value, checked) {
  return checked ? [...list, value] : list.filter((v) => v !== value);
}

/** Página de listagem de produtos com ordenação e filtros. */
export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('filter') || '';
  const { products, categories, loading } = useStoreData();

  const [sort, setSort] = useState('lowest');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [state, setState] = useState('new'); // filtro apenas visual

  const results = useMemo(() => {
    const term = normalize(search);
    const filtered = products.filter((p) => {
      const name = normalize(p.name);
      if (term && !name.includes(term) && !normalize(p.description).includes(term)) return false;
      if (selectedBrands.length && !selectedBrands.some((b) => name.includes(normalize(b)))) return false;
      if (selectedGenders.length && !selectedGenders.some((g) => name.includes(normalize(g)))) return false;
      if (selectedCategories.length && !selectedCategories.some((id) => p.category_ids?.includes(Number(id)))) return false;
      return true;
    });

    return filtered.sort((a, b) => (sort === 'lowest' ? finalPrice(a) - finalPrice(b) : finalPrice(b) - finalPrice(a)));
  }, [products, search, sort, selectedBrands, selectedCategories, selectedGenders]);

  const title = search
    ? `Resultados para "${search}" - ${results.length} produto(s)`
    : `${results.length} produto(s) encontrado(s)`;

  return (
    <Layout>
      <div className="container listing">
        <aside className="listing__sidebar">
          <label className="listing__sort">
            <span>Ordenar por</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.text}</option>)}
            </select>
          </label>

          <div className="listing__filters">
            <h2>Filtrar por</h2>
            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={brands.map((b) => ({ text: b }))}
              selected={selectedBrands}
              onChange={(v, checked) => setSelectedBrands((l) => toggle(l, v, checked))}
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={categories.map((c) => ({ text: c.name, value: String(c.id) }))}
              selected={selectedCategories}
              onChange={(v, checked) => setSelectedCategories((l) => toggle(l, v, checked))}
            />
            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={genders.map((g) => ({ text: g }))}
              selected={selectedGenders}
              onChange={(v, checked) => setSelectedGenders((l) => toggle(l, v, checked))}
            />
            <FilterGroup
              title="Estado"
              inputType="radio"
              options={STATE_OPTIONS}
              selected={[state]}
              onChange={(v) => setState(v)}
            />
          </div>
        </aside>

        <div className="listing__results">
          <Section title={loading ? 'Carregando...' : title} titleAlign="left">
            {!loading && <ProductListing products={results.map((p) => toCardProps(p, categories))} columns={3} />}
          </Section>
        </div>
      </div>
    </Layout>
  );
}

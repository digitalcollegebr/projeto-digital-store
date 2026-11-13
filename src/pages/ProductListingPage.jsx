import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';

import Layout from './Layout';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';

import { getProducts } from '../services/api';
import { getFinalPrice, filterOptions } from '../data/products';

const filtrosVazios = {
  brand: [],
  category: [],
  gender: [],
  condition: [],
};

// Remove acentos para a busca funcionar com "tenis" e "tênis"
function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function correspondeABusca(produto, termo) {
  if (!termo) return true;
  const alvo = normalizar(`tênis ${produto.name} ${produto.brand} ${produto.category} ${produto.gender}`);
  return normalizar(termo)
    .split(/\s+/)
    .every((palavra) => alvo.includes(palavra));
}

function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';
  const categoryParam = searchParams.get('category');
  const brandParam = searchParams.get('brand');

  const [products, setProducts] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // Ordenação começa em "Menor preço"
  const [order, setOrder] = useState('lowest');
  const [selected, setSelected] = useState(filtrosVazios);
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  // Busca os produtos na API
  useEffect(() => {
    getProducts()
      .then((lista) => setProducts(lista))
      .catch(() => setErro('Não foi possível carregar os produtos. Tente novamente.'))
      .finally(() => setCarregando(false));
  }, []);

  // Se a URL trouxer categoria ou marca, já marca o filtro
  useEffect(() => {
    setSelected({
      ...filtrosVazios,
      category: categoryParam ? [categoryParam] : [],
      brand: brandParam ? [brandParam] : [],
    });
  }, [categoryParam, brandParam]);

  function atualizarFiltro(grupo, valor, marcado, somenteUm = false) {
    setSelected((atual) => ({
      ...atual,
      [grupo]: somenteUm
        ? [valor]
        : marcado
          ? [...atual[grupo], valor]
          : atual[grupo].filter((item) => item !== valor),
    }));
  }

  const filteredProducts = useMemo(() => {
    const resultado = products.filter((produto) => {
      if (!correspondeABusca(produto, filter)) return false;
      if (selected.brand.length && !selected.brand.includes(produto.brand)) return false;
      if (selected.category.length && !selected.category.includes(produto.category)) return false;
      if (selected.gender.length && !selected.gender.includes(produto.gender)) return false;
      if (selected.condition.length && !selected.condition.includes(produto.condition)) return false;
      return true;
    });

    if (order === 'relevance') return resultado;

    return [...resultado].sort((a, b) =>
      order === 'lowest'
        ? getFinalPrice(a) - getFinalPrice(b)
        : getFinalPrice(b) - getFinalPrice(a)
    );
  }, [products, filter, selected, order]);

  const temFiltroAtivo = Object.values(selected).some((lista) => lista.length > 0);
  const quantidade = filteredProducts.length;
  const titulo = `${filter ? `Resultados para “${filter}” - ` : ''}${quantidade} ${
    quantidade === 1 ? 'produto' : 'produtos'
  }`;

  return (
    <Layout>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-8 md:px-10 md:py-10 lg:flex-row lg:items-start lg:gap-7 xl:px-[100px]">

        {/* Barra lateral: ordenar + filtrar */}
        <aside className="flex w-full shrink-0 flex-col gap-6 lg:w-[308px]">
          <div className="flex flex-col gap-2">
            <label htmlFor="sort" className="text-base text-dark-gray-2">
              Ordenar por
            </label>
            <select
              id="sort"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="h-[60px] w-full cursor-pointer rounded border border-dark-gray-2 bg-transparent px-4 text-base text-dark-gray-2 outline-none focus:border-primary lg:w-[308px]"
            >
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
              <option value="relevance">Mais relevantes</option>
            </select>
          </div>

          {/* No celular o painel de filtros começa escondido */}
          <button
            type="button"
            onClick={() => setMostrarFiltros((aberto) => !aberto)}
            aria-expanded={mostrarFiltros}
            className="flex h-12 items-center justify-center gap-2 rounded bg-primary text-sm font-bold text-white lg:hidden"
          >
            <SlidersHorizontal size={18} />
            {mostrarFiltros ? 'Esconder filtros' : 'Filtrar'}
          </button>

          <div
            className={`rounded bg-white p-[30px] lg:block lg:w-[308px] ${
              mostrarFiltros ? 'block' : 'hidden'
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-dark-gray-2">Filtrar por</h2>
              {temFiltroAtivo && (
                <button
                  type="button"
                  onClick={() => setSelected(filtrosVazios)}
                  className="text-sm text-primary hover:underline"
                >
                  Limpar
                </button>
              )}
            </div>

            <hr className="mt-5 mb-5 border-light-gray-2" />

            {['brand', 'category', 'gender'].map((grupo) => (
              <FilterGroup
                key={grupo}
                title={filterOptions[grupo].title}
                inputType="checkbox"
                options={filterOptions[grupo].options}
                selected={selected[grupo]}
                onChange={(valor, marcado) => atualizarFiltro(grupo, valor, marcado)}
              />
            ))}

            <FilterGroup
              title={filterOptions.condition.title}
              inputType="radio"
              options={filterOptions.condition.options}
              selected={selected.condition}
              onChange={(valor, marcado) => atualizarFiltro('condition', valor, marcado, true)}
            />
          </div>
        </aside>

        <Section title={titulo} titleAlign="left" className="min-w-0 flex-1">
          {carregando && (
            <p className="py-16 text-center text-dark-gray-3">Carregando...</p>
          )}
          {erro && (
            <p className="py-16 text-center text-error">{erro}</p>
          )}
          {!carregando && !erro && (
            <ProductListing products={filteredProducts} columns={3} />
          )}
        </Section>
      </div>
    </Layout>
  );
}

export default ProductListingPage;

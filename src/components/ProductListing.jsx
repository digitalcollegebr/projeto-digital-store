import ProductCard from './ProductCard';

// Listagem de produtos com grid responsivo
// Prop columns (padrão 4): 4 colunas na Home e 3 na página de listagem
export default function ProductListing({ products = [], columns = 4 }) {
  const colsClass = columns === 3 ? 'xl:grid-cols-3' : 'lg:grid-cols-4';

  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-base text-dark-gray-3">
        Nenhum produto encontrado.
      </p>
    );
  }

  return (
    <ul className={`grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 ${colsClass}`}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

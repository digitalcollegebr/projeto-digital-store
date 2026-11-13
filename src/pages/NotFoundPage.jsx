import { Link } from 'react-router-dom';
import Layout from './Layout';

// Qualquer rota que não existe cai aqui
function NotFoundPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1440px] px-4 py-24 text-center md:px-10 xl:px-[100px]">
        <p className="text-6xl font-extrabold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold text-dark-gray">
          Página em construção
        </h1>
        <p className="mt-2 text-base text-dark-gray-3">
          Esta página ainda não faz parte da loja.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-10 items-center rounded bg-primary px-6 text-sm font-bold text-white hover:bg-tertiary"
        >
          Voltar para a Home
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;

import { PrimeReactProvider } from 'primereact/api';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout.jsx';
import PageLayoutUnAuthorized from '../components/layout/PageLayoutUnAuthorized.jsx';
import Home from '../pages/Home/index.jsx';
import Login from '../pages/Login/index.jsx';
import NotFound from '../pages/NotFound/index.jsx';
import ProductViewPage from '../pages/Product/ProductViewPage.jsx';
import ProductListingPage from '../pages/ProductListing/ProductListingPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';

export function AppRoutes() {
    return (
        <>
        <PrimeReactProvider>
            <BrowserRouter>
                <Routes>
                    {/* Rotas públicas */}
                    <Route path="/login" element={<PageLayoutUnAuthorized />}>
                        <Route index element={<Login />} />
                    </Route>

                    {/* Rotas protegidas */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<PageLayout />}>
                            <Route index element={<Home />} />
                            <Route path="/products" element={<ProductListingPage />} />
                            <Route path="/products/product/:id" element={<ProductViewPage />} />
                        </Route>
                    </Route>

                    {/* Rota de erro */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </PrimeReactProvider>
        </>
    );
}
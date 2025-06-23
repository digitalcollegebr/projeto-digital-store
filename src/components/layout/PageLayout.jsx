import { Outlet } from 'react-router-dom';
import Footer from "./Footer.jsx";
import Header from './Header.jsx';
import Main from "./Main.jsx";

const PageLayout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};

export default PageLayout;
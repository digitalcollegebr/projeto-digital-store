import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HeaderUnAuthorized from "./HeaderUnAuthorized";
import Main from "./Main";

const PageLayoutUnAuthorized = () => {
    return (
        <>
            <HeaderUnAuthorized />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}
 
export default PageLayoutUnAuthorized;
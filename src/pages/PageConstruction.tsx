import { useNavigate } from "react-router-dom";
import page from "../assets/page-gray.gif";
import Layout from "./Layout";
import { useEffect } from "react";

export default function PageInConstruction() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        window.scrollTo(0, 0);
        navigate("/");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div className="py-16 md:py-0 md:pb-10 pb-10 flex flex-col justify-center items-center">
                <h1 className="text-center text-2xl py-10 md:text-3xl font-extrabold text-primary">⚠ Pagina em construção ⚠</h1>
                <img src={page} alt="Page not found" className="object-contain lg:w-[30vw]" />
                <button 
                    onClick={handleRedirect}
                    className="p-2 w-36 border bg-primary rounded-md text-light-gray-3 hover:scale-110 hover:bg-error hover:cursor-pointer hover:transition-colors text-center"
                >
                    Voltar
                </button>
            </div>
        </Layout>
    );
}

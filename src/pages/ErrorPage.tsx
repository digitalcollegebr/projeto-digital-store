import { Link } from "react-router-dom";
import error from "../assets/error.gif";
import Header from "../components/Header";

export default function PageError() {

    return(

        <section className="h-screen bg-light-gray-3 pt-20 md:pt-0">

            <Header />

            <div className="pb-10 flex flex-col justify-center items-center">
                <img src={error} alt="Page not found" className="object-contain lg:w-[32vw]" />
                <Link to="/" className="p-2 w-36 border bg-primary rounded-md text-light-gray-3 hover:scale-110 hover:bg-error hover:cursor-pointer hover:transition-colors text-center">
                Voltar
                </Link>
            </div>

        </section>
        
    )

}
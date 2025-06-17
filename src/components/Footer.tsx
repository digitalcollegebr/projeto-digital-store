import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import Logo from "./Logo";
import Information from "./Information";

export default function Footer() {

    const card01 = [
        {text: "Sobre Drip Store"},
        {text: "Segurança"},
        {text: "WishList"},
        {text: "Blog"},
        {text: "Trabalhe conosco"},
        {text: "Meus pedidos"},
    ]

    const card02 = [
        {text: "Camisetas"},
        {text: "Calças"},
        {text: "Bonés"},
        {text: "Tênis"},
        {text: "Headphones"},
    ]

    return (

        <footer className="flex flex-col items-center justify-around w-full p-2 bg-dark-gray">

            <div className="flex flex-col md:flex-row md:gap-20 md:items-center">
                <div className="md:w-[25vw]">
                    <Logo type="logoFooter" />
                    <p className="py-5 text-sm text-light-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae natus quasi officia excepturi laborum amet</p>
                    <div className="py-2 flex gap-5 text-white">
                        <a href="https://www.facebook.com/" target="_blank">
                            <FaFacebook size="30px" fill="#c8c8c8" className="hover:scale-110 duration-200" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <FaInstagram size="30px" fill="#c8c8c8" className="hover:scale-110 duration-200" />
                        </a>
                        <a href="https://twitter.com/" target="_blank">
                            <FaTwitter size="30px" fill="#c8c8c8" className="hover:scale-110 duration-200" />
                        </a>
                    </div>
                </div>

                <div className="py-5 flex gap-10">

                    <div className="flex flex-col text-light-gray">
                        
                        <Information title="Informação" informations={card01} />

                    </div>

                    <div className="flex flex-col text-light-gray">
                        
                        <Information title="Categoria" informations={card02} />

                    </div>

                </div>

                <div className="md:w-[25vw] md:mb-9">
                    <h6 className="py-1 text-light-gray-3 font-bold">Contato</h6>
                    <p className="py-1 text-light-gray">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p className="py-2 md:pb-5 text-light-gray">(85) 3051-3411</p>
                </div>
            </div>

            <hr className="w-11/12 border-light-gray/80 my-4" />

            <p className="text-light-gray-2 text-center"> &copy; 2025 Digital College</p>

        </footer>
        
    );
}

import { useNavigate } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";

import gmail from "../assets/icons/gmail.svg";

import tenis from "../assets/iconLogin.svg";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function Register() {

    const navigate = useNavigate();

    const handleEntrar = () => navigate("/login");
    const handleRegisterForm = () => navigate("registerform");

    return(

        <>
            <header className="bg-white flex justify-center items-center py-5 lg:py-3 lg:justify-start lg:px-10">
                <Logo type="logoHeader" />
            </header>

            <main className="h-auto pb-10 bg-gradient-to-b from-secondary to-[#D8E3F2] pt-8 lg:pb-5">

                <div className="px-10 pb-10 flex flex-row justify-center items-center">

                    <form className="px-5 py-10 lg:py-5 h-auto flex gap-2 flex-col justify-center bg-white w-auto  rounded-md shadow-sm m-auto">

                        <h2 className="py-2 lg:py-1 md:text-start text-2xl font-bold text-center">Crie sua conta</h2>
                        <p className="text-sm text-dark-gray-2 text-center md:text-start">Já possui uma conta? Entre <a className='underline decoration-solid cursor-pointer' onClick={handleEntrar}>aqui</a></p>

                        <label htmlFor="login" className="py-2 font-medium md:text-sm">Email *<br />
                            <input type="text" placeholder="Insira seu login ou email" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                        
                        <div className="m-auto py-3">
                            <button onClick={handleRegisterForm} className="cursor-pointer bg-primary hover:bg-pink-500 hover:scale-105 transition-colors text-white w-56 py-3 text-lg font-medium rounded-md md:w-[30vw] md:py-2">Criar conta</button>
                        </div>

                        <div className="md:flex md:justify-center md:gap-5">
                            <p className="py-2 text-center">Ou faça login com</p>
                            <div className="flex justify-center items-center gap-5">
                                <img src={gmail} alt="Gmail" className="hover:scale-105 cursor-pointer" />
                                <FaFacebook size="25px" color="blue" className="hover:scale-105 hover:cursor-pointer" />
                            </div>

                        </div>
                    
                    </form>

                    <img src={tenis} alt="Tenis" className="hidden relative top-10 md:block w-[44vw] md:w-[30vw] m-auto" />

                </div>

            </main>

            <Footer />

        </>

    )

}

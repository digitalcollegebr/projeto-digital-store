import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function RegisterForm() {

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/");
        window.scrollTo(0, 0);
    }
    return(

        <>
            <header className="bg-white flex justify-center items-center py-5 lg:py-3 lg:justify-start lg:px-10">
                <Logo type="logoHeader" />
            </header>

            <main className="h-auto bg-light-gray-3 pt-16 lg:pb-32">

                <div className="px-10 pb-3 flex flex-col justify-center items-center">
                    <h1 className="pb-5 md:text-start lg:pr-96 text-2xl font-bold">Crie sua conta</h1>
                    <form className="px-5 py-10 lg:py-5 h-auto flex gap-2 flex-col justify-center bg-white lg:w-[43%] rounded-md shadow-sm m-auto">
                        <h1 className="text-sm font-bold text-dark-gray-2">Informações Pessoais</h1>
                        <hr className='w-[248px] my-3 bg-light-gray-2'></hr>    
                        <label htmlFor="login" className="py-2 font-medium md:text-sm">Nome Completo *<br />
                            <input type="text" placeholder="Insira seu nome" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                        <label htmlFor="login" className="py-2 font-medium md:text-sm">CPF *<br />
                            <input type="text" placeholder="Insira seu CPF" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                        <label htmlFor="login" className="py-2 font-medium md:text-sm">E-mail *<br />
                            <input type="text" placeholder="Insira seu email" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                        <label htmlFor="login" className="py-2 font-medium md:text-sm">Celular *<br />
                            <input type="text" placeholder="Insira seu celular" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                    </form>
                </div>

                <div className="px-10 flex flex-col justify-center items-center">
                    <form className="px-5 py-10 lg:py-5 h-auto flex gap-2 flex-col justify-center bg-white lg:w-[43%] rounded-md shadow-sm m-auto">
                        <h1 className="text-sm font-bold text-dark-gray-2">Informações de Entrega</h1>
                        <hr className='w-[248px] my-3 bg-light-gray-2'></hr>    
                        <label htmlFor="login" className="py-2 font-medium md:text-sm">Endereço *<br />
                            <input type="text" placeholder="Insira seu endereço" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                        <label htmlFor="login" className="py-2 font-medium md:text-sm">Bairro *<br />
                            <input type="text" placeholder="Insira seu bairro" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                        <label htmlFor="login" className="py-2 font-medium md:text-sm">Cidade *<br />
                            <input type="text" placeholder="Insira sua cidade " className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                        <label htmlFor="login" className="py-2 font-medium md:text-sm">CEP *<br />
                            <input type="text" placeholder="Insira seu CEP" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                        <label htmlFor="login" className="py-2 font-medium md:text-sm">Complemento<br />
                            <input type="text" placeholder="Insira complemento" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                        </label>
                    </form>
                    <div className="flex justify-center items-center m-auto py-5">
                        <input className="w-[22px] h-[22px] accent-primary" type="checkbox"/>  
                        <p className="pl-3 lg:w-6/12">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</p>
                    </div>
                    <div className="m-auto pt-5 pb-24 lg:pb-0">
                        <button onClick={handleRegister} className="bg-primary hover:bg-pink-500 hover:scale-105 transition-colors text-white w-56 py-3 text-lg font-medium rounded-md md:w-[40vw] md:py-2">Criar conta</button>
                    </div>
                </div>
                
            </main>

            <Footer />

        </>

    )

}
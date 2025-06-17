import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import FilterGroup from "../components/FilterGroup";
import CartCard from "../components/CardCart";
import nikeG from "../assets/products/K-swiss V8 - Masculino.png";

export default function PurchasePage() {

    return(
        <Layout>
            <div className="flex flex-col lg:flex-row lg:gap-4 bg-light-gray-3 justify-center pt-28 lg:pt-14 px-5 lg:px-0">
                <div className="lg:w-[60%]">
                    <div>
                        <h1 className="pb-3 md:text-start text-2xl font-bold">Finalizar Compra</h1>
                        <form className="px-5 py-10 lg:py-5 h-auto flex gap-2 flex-col justify-center bg-white rounded-md shadow-sm m-auto">
                            <h1 className="text-sm font-bold text-dark-gray-2">Informações Pessoais</h1>
                            <hr className=' my-3 bg-light-gray-2'></hr>    
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
                        <form className="px-5 py-10 lg:py-5 my-5 h-auto flex gap-2 flex-col justify-center bg-white lg:w-full rounded-md shadow-sm m-auto">
                            <h1 className="text-sm font-bold text-dark-gray-2">Informações de Entrega</h1>
                            <hr className=' my-3 bg-light-gray-2'></hr>    
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
                    </div>
                    <div>
                        <form className="px-5 py-10 lg:py-5 h-auto flex gap-2 flex-col bg-white lg:w-full rounded-md shadow-sm m-auto">
                            <h1 className="text-sm font-bold text-dark-gray-2">Informações de Pagamento</h1>
                            <hr className=' my-3 bg-light-gray-2'></hr> 
                            <label htmlFor="login" className="pb-2 font-medium md:text-sm">Forma de Pagamento</label> 
                            <FilterGroup className="flex gap-5 pb-0" inputType="radio" 
                                        options={[
                                        { text: 'Cartão de Crédito', value: 'Cartão de Crédito' },
                                        { text: 'Boleto Bancário', value: 'Boleto Bancário' }]}
                            />
                            <label htmlFor="login" className="pb-2 font-medium md:text-sm">Nome do Cartão *<br />
                                <input type="text" placeholder="Insira o nome do cartão" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">Data ou Número do Cartão *<br />
                                <input type="text" placeholder="Insira número do cartão" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                            <label htmlFor="login" className="py-2 font-medium md:text-sm">CVV *<br />
                                <input type="text" placeholder="cvv" className="mt-3 py-3 px-2 rounded-md w-full bg-light-gray-3 text-lg md:py-2 md:text-sm focus:border-pink-500 focus:ring-pink-500 focus:ring-2 outline-none focus:transition-all duration-200" required />
                            </label>
                        </form>
                    </div>
                    <div className="hidden lg:flex flex-col lg:w-full h-fit px-6 py-7 mt-5 mb-12 bg-white">
                        <h1 className="text-sm font-bold text-dark-gray-2">Finalizar Compra</h1>
                        <hr className='my-3 bg-light-gray-2'></hr>   
                        <p className="flex justify-between text-sm font-bold text-dark-gray-2">Total: <span className="text-error">R$ 219.00</span></p>
                        <p className="pt-1 pb-5 text-xs text-light-gray text-end">ou 10x de R$ 21,00 sem juros</p>
                        <NavLink to="/purchasedone" className=" w-full py-2 px-2 bg-warning text-white rounded-md text-center">Realizar Pagamento</NavLink>
                    </div>
                </div>
                <div className="lg:w-[30%] h-fit px-6 py-7 mt-5 lg:mt-14 bg-white">
                    <h1 className="w-full font-bold font-sm text-dark-gray-2">RESUMO</h1>
                    <hr className='my-5 bg-light-gray-2'></hr> 
                    <CartCard 
                        image={nikeG} 
                        title="K-swiss V8 - Masculino" 
                    />
                    <hr className='my-5 bg-light-gray-2'></hr> 
                    <div className="flex flex-col gap-4">
                        <p className="flex justify-between text-sm font-medium text-light-gray">Subtotal: <span className="text-dark-gray">R$ 219.00</span></p>
                        <p className="flex justify-between text-sm font-medium text-light-gray">Frete: <span className="text-dark-gray">R$ 0.00</span></p>
                        <p className="flex justify-between text-sm font-medium text-light-gray">Desconto: <span className="text-dark-gray">R$ 30.00</span></p>
                        <span className="mb-5 p-5 bg-[#F6AA1C]/[.15]">
                            <p className="flex justify-between text-lg font-bold text-dark-gray-2">Total: <span>R$ 219.00</span></p>
                            <p className="text-xs text-light-gray text-end">ou 10x de R$ 21,00 sem juros</p>
                        </span>
                    </div>
                    <NavLink to="/purchasedone" className="flex justify-center w-full py-2 px-2 bg-warning text-white rounded-md text-center">Realizar Pagamento</NavLink>
                </div>
            </div>     
            <div className="flex lg:hidden flex-col lg:w-full h-fit px-6 py-3 mt-10 bg-white">
                <p className="flex justify-between text-lg font-bold text-dark-gray">Total: <span className="text-error">R$ 219.00</span></p>
                <p className="pt-1 pb-5 text-xs text-light-gray text-end">ou 10x de R$ 21,00 sem juros</p>
                <NavLink to="/purchasedone" className=" w-full py-2 px-2 bg-warning text-white rounded-md text-center">Realizar Pagamento</NavLink>
            </div>                           
        </Layout>
    );
};

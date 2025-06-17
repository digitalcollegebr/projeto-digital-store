import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import CartCard from "../components/CardCart";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import nikeG from "../assets/products/K-swiss V8 - Masculino.png";

export default function CartPage() {

    const handleClick = () => window.scrollTo(0, 0);

    return(
        <Layout>
            <div className="flex flex-col lg:flex-row lg:gap-4 justify-center pt-32 lg:pt-14 px-5 lg:px-0 bg-light-gray-3">
                <div className="lg:w-4/6 flex flex-col">
                    <div className="px-6 py-7 bg-white">
                        <div className="flex">
                            <h1 className="w-full font-bold font-sm text-dark-gray-2">MEU CARRINHO</h1>
                            <span className="flex w-full justify-end gap-9">
                                <h1 className="hidden  lg:block font-medium font-sm text-dark-gray-2">QUANTIDADE</h1>
                                <h1 className="hidden lg:block font-medium font-sm text-dark-gray-2">UNITÁRIO</h1>
                                <h1 className="hidden lg:block font-medium font-sm text-dark-gray-2">TOTAL</h1>
                            </span>
                        </div>
                        <CartCard 
                            image={nikeG} 
                            title="K-swiss V8 - Masculino" 
                            color="color" 
                            size="40" 
                            quantity={1} 
                            showCounter={true}
                            price={120} 
                            total={219} 
                        />
                        <hr className='hidden lg:block mt-5 bg-light-gray-2'></hr> 
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center lg:gap-9 lg:pb-7 lg:bg-white">
                        <div className="mt-3 lg:m-0 p-7 lg:p-0 bg-white">
                            <h2 className="font-bold text-xs text-dark-gray-2 pb-2">Cupom de desconto</h2>
                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <input
                                id="pesquisar"
                                type="text"
                                placeholder="Insira seu código"
                                className="w-full lg:w-[270px] p-3 rounded-md bg-light-gray-3 outline-none focus:border-pink-600 focus:ring-pink-600 focus:ring-2"
                                />
                                <button className="w-full lg:w-28 p-3 rounded-md bg-light-gray-3 hover:bg-primary text-primary hover:text-white font-bold text-sm">OK</button>
                            </div>
                        </div>
                        <div className="mt-3 lg:m-0 p-7 lg:p-0 bg-white">
                            <h2 className="font-bold text-xs text-dark-gray-2 pb-2">Calcular frete</h2>
                            <div className="flex flex-col lg:flex-row items-center gap-3">
                                <input
                                id="pesquisar"
                                type="text"
                                placeholder="Insira seu código"
                                className="w-full lg:w-[270px] p-3  rounded-md bg-light-gray-3 outline-none focus:border-pink-600 focus:ring-pink-600 focus:ring-2"
                                />
                                <button className="w-full lg:w-28 p-3 rounded-md bg-light-gray-3 hover:bg-primary text-primary hover:text-white font-bold text-sm">OK</button>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleClick}>
                        <Section className="hidden lg:block pt-16 pb-32 px-10" title="Produtos Relacionados" link={{text:"Ver todos"}}>
                            <ProductListing len={4} />
                        </Section> 
                    </div>
                </div>
                <div className="lg:w-1/4 h-fit px-6 py-7 mt-3 lg:m-0 bg-white">
                        <h1 className="w-full font-bold font-sm text-dark-gray-2">RESUMO</h1>
                        <hr className='my-5 bg-light-gray-2'></hr> 
                        <div className="flex flex-col gap-4">
                            <p className="flex justify-between text-sm font-medium text-light-gray">Subtotal: <span className="text-dark-gray">R$ 219.00</span></p>
                            <p className="flex justify-between text-sm font-medium text-light-gray">Frete: <span className="text-dark-gray">R$ 0.00</span></p>
                            <p className="flex justify-between text-sm font-medium text-light-gray">Desconto: <span className="text-dark-gray">R$ 30.00</span></p>
                            <p className="flex justify-between text-sm font-bold text-dark-gray-2">Total: <span className="text-error">R$ 30.00</span></p>
                        </div>
                        <p className="pt-1 pb-5 text-xs text-light-gray text-end">ou 10x de R$ 21,00 sem juros</p>
                        <NavLink to="/purchasepage" className="hidden lg:block w-full py-2 px-2 bg-warning text-white rounded-md text-center">Continuar</NavLink>
                </div>
            </div>
            <div className="lg:hidden h-fit px-6 py-7 mt-5 bg-light-gray-3">
                    <p className="flex justify-between text-sm font-bold text-dark-gray-2">Total: <span className="text-error">R$ 219.00</span></p>
                    <p className="pt-1 pb-5 text-xs text-light-gray text-end">ou 10x de R$ 21,00 sem juros</p>
                    <NavLink to="/purchasepage" className="block lg:hidden w-full py-2 px-2 bg-warning text-white rounded-md text-center">Continuar</NavLink>
            </div>
            </Layout>
        );
    };

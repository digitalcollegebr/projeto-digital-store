import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import CartCard from "../components/CardCart";
import confetti from "../assets/confetti.png";
import nikeG from "../assets/products/K-swiss V8 - Masculino.png";

export default function PurchaseDonePage() {
    return(
        <Layout>
            <div className="flex flex-col lg:flex-row justify-center pt-32 lg:pt-14 px-5 lg:px-0">
                <div className="lg:w-[60%]">
                    <div>
                        <div className="px-5 pt-10 h-auto flex gap-2 flex-col justify-center bg-white rounded-md shadow-sm m-auto">
                            <h1 className="pb-6 text-center text-3xl font-bold text-dark-gray"><span className="flex justify-center pb-3"><img src={confetti} alt="confetti emoji" className="h-[74px]" /></span>Compra Realizada<br/> com sucesso!</h1>
                            <hr className=' my-3 bg-light-gray-2'></hr>  
                            <h1 className="text-sm font-bold text-dark-gray-2">Informações Pessoais</h1>  
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Nome: </span>Joaquim Macedo ferraz</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">CPF: </span>451.889.397-22</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Email: </span>joaquimf@gmail.com</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Celular: </span>&#40;85&#41; 98832-5429</p>
                        </div>
                        <div className="px-5 h-auto flex gap-2 flex-col justify-center bg-white rounded-md shadow-sm m-auto">
                            <hr className=' my-3 bg-light-gray-2'></hr>  
                            <h1 className="text-sm font-bold text-dark-gray-2">Informações de Entrega</h1>  
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Endereço: </span>Rua 13, Numero 22</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Bairro: </span>Centro</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">Cidade: </span>Fortaleza, Ceará</p>
                            <p className="font-medium text-sm text-drak-gray"><span className="text-light-gray">CEP: </span>63020-000</p>
                        </div>
                        <div className="px-5 pb-10 h-auto flex gap-2 flex-col justify-center bg-white rounded-md shadow-sm m-auto">
                            <hr className=' my-3 bg-light-gray-2'></hr>  
                            <h1 className="text-sm font-bold text-dark-gray-2 pb-2">Resumo da Compra</h1>  
                            <CartCard 
                                image={nikeG} 
                                title="K-swiss V8 - Masculino" 
                            />
                            <span className="my-5 p-5 bg-[#F6AA1C]/[.15]">
                                <p className="flex justify-between text-lg font-bold text-dark-gray-2">Total: <span>R$ 30.00</span></p>
                                <p className="text-xs text-light-gray text-end">ou 10x de R$ 21,00 sem juros</p>
                            </span>
                            <a href="" className="text-center text-base underline text-dark-gray-2 hover:text-dark-gray-3">Imprimir Recibo</a>
                        </div>    
                    <NavLink to="/" className="flex justify-center w-full mt-10 mb-28 py-2 px-2 bg-warning text-white rounded-md text-center">Voltar para Home</NavLink>
                    </div>
                </div>
            </div>                           
        </Layout>
    );
};
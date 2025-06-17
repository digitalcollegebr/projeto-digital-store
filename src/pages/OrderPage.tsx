import Layout from "./Layout";
import OrderCard from "../components/OrderCard";

export default function OrderPage() {
    return(
        <Layout>
            <div className="flex justify-center pt-28 md:pt-16 pb-10 lg:px-20 gap-5 bg-light-gray-3">
                <div className="hidden lg:block w-full lg:w-fit h-fit p-10 bg-white">
                    <p className="text-dark-gray-2 font-bold text-sm ">Meu perfil</p>
                    <hr className='lg:w-[248px] my-5 bg-light-gray-2'></hr> 
                    <a className="text-dark-gray-2 font-medium text-sm hover:text-primary" href="">Meus pedidos</a>
                    <hr className='lg:w-[248px] my-5 bg-light-gray-2'></hr>   
                    <a className="text-dark-gray-2 font-medium text-sm hover:text-primary" href="">Minhas informações</a>
                    <hr className='lg:w-[248px] my-5 bg-light-gray-2'></hr>  
                    <a className="text-dark-gray-2 font-medium text-sm hover:text-primary" href="">Métodos de pagamento</a>
                </div>
                <div className="w-3/4 px-6 py-7 bg-white">
                    <span className="flex justify-between">
                        <h1 className="font-bold font-sm text-dark-gray-2">Meus pedidos</h1>
                        <h1 className="hidden lg:block font-medium font-sm text-dark-gray-2">STATUS</h1>
                    </span>
                    <hr className='my-5 bg-light-gray-2'></hr> 
                    <OrderCard />
                </div>
            </div>
        </Layout>   
    )
}
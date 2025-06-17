import nikeG from "../assets/products/nike-yellow.png";

interface OrderCardProps {
    image: string;
    order: string;
    title: string;
    progress: 'Produto em trânsito' | 'Finalizado' | 'Cancelado';
}

const testProduct: OrderCardProps[] = [
    {
        image: nikeG,
        order: "Pedido nº 249073156",
        title: "K-swiss V8 - Masculino",
        progress: "Cancelado"
    },
    {
        image: nikeG,
        order: "Pedido nº 8790342165",
        title: "K-swiss V8 - Masculino",
        progress: "Produto em trânsito"
    },
    {
        image: nikeG,
        order: "Pedido nº 6547896590",
        title: "K-swiss V8 - Masculino",
        progress: "Finalizado"
    }
];

export default function OrderCard() {
    return(
        <div>
            {testProduct.map((product, index) => (
            <>
                <div key={index} className="flex flex-wrap justify-between">
                    <div className="flex items-center">
                        <img className="h-[58px] w-[71.18px] mr-5 box-border object-contain bg-light-blue" src={product.image} alt={product.title} />
                        <span>
                            <p className="text-light-gray text-[10px] font-medium">{product.order}</p>
                            <h1 className="text-dark-gray text-sm font-bold">{product.title}</h1>
                        </span>
                    </div>
                    <span className="flex w-full lg:w-auto justify-between pt-5">
                        <h1 className="block lg:hidden font-medium font-sm text-dark-gray-2">STATUS</h1>
                        <p      
                            className={`font-bold text-sm ${product.progress === 'Produto em trânsito' ? 'text-warning' : product.progress === 'Finalizado' ? 'text-gray-500' : product.progress === 'Cancelado' ? 'text-error' : ''}`}
                        >
                            {product.progress}
                        </p>
                    </span>
                </div>
                <hr className='my-5 bg-light-gray-2'></hr> 
            </>
            ))}
            
        </div>
    );
}
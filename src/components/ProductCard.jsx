import './ProductCard.css'

function ProductCard({image, name, price, priceDiscount}){
    const formatador =  new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    })

    function precoDoProduto(price, priceDiscount){
        if(priceDiscount !== undefined && priceDiscount < price){
            return (
                <div>
                    <p><s>{formatador.format(price)}</s></p>
                    <p>{formatador.format(priceDiscount)}</p>
                </div>
            )
        } else {
            return (
                <p>{formatador.format(price)}</p>
            ) 
        }
    }

    return(
        <div className='container-card'>
            <img className='image-card' src={image} alt={name} />
            <div className='container-preco'>
                <p>{name}</p>
                {precoDoProduto(price, priceDiscount)}
            </div>
        </div>
    )
}

export default ProductCard
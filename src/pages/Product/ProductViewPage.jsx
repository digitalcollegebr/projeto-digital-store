import { Galleria } from 'primereact/galleria';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiDigitalStore from "../../api/apiDigitalStore";
import Breadcrumb from "../../components/BreadCrumb";
import BuyBox from '../../components/BuyBox';
import CardProduct from '../../components/CardProduct';
import ProductOptions from '../../components/ProductOptions';
import { productEmpty } from "../../models/product";
import { SectionBreadCrumb, SectionProductInfo, SectionProductsRecommended } from "./style";

const ProductViewPage = () => {
    const { id } = useParams();
    const [produto, setProduto] = useState(productEmpty);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0); // sobe para o topo
        buscaProduto();
    }, [id]);

    useEffect(() => {
        buscaProdutos();
    }, [produto]);

    async function buscaProduto () {
        const dataProduto = await apiDigitalStore.getProdutoById(id);

        if (dataProduto) {
            setProduto(dataProduto);
        }
    }

    async function buscaProdutos() {
        const filtros = await apiDigitalStore.getFiltros();
        const idFiltro = filtros.filter(item => item.text === produto.category);

        const dataProdutos = await apiDigitalStore.getProdutosFiltros([{name: idFiltro[0]?.name, value: idFiltro[0]?.value}], 2, 4).then(resposta => resposta.dados);

        if (dataProdutos) {
            setProdutos(dataProdutos);
        }
    }

    const itemTemplate = (item) => {
        return (
            item && item.src != "" ? (
                <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="current-image-galleria"
                />
            ) : (<></>)
        );
    }

    const thumbnailTemplate = (item) => {
        return item && item.src !== "" ? (
            <img 
                src={item.src} 
                alt={item.alt} 
                className="image-galleria-thumb"
            />
        ) : (<></>);
    }

    const listagemDeCardsDeProdutos = () => {
        return (
            produtos.map(produto => <CardProduct key={produto.id} produto={produto} />)
        );
    }

    return ( 
        <>
            <SectionBreadCrumb activeTitle={false}>
                <Breadcrumb 
                    items={[
                        { label: "Home", link: "/" },
                        { label: "Produtos", link: "/products" },
                        { label: produto.type, link: "" },
                        { label: produto.brand, link: "" },
                        { label: produto.title, link: "" },
                    ]} 
                />
            </SectionBreadCrumb>
            <SectionProductInfo activeTitle={false}>
                <div className="left__content">
                    <Galleria 
                        className="galleria-container"
                        value={produto.brand === "Nike"
                            ? [
                                {src: produto.image, alt: produto.title},
                                {src: "/produc-image-1.jpeg", alt: produto.title},
                                {src: "/produc-image-2.jpeg", alt: produto.title},
                                {src: "/produc-image-3.jpeg", alt: produto.title},
                                {src: "/produc-image-5.jpeg", alt: produto.title},
                                {src: "/White-Sneakers.png", alt: produto.title},
                            ]
                            : [{src: produto.image, alt: produto.title}]
                        } 
                        responsiveOptions={responsiveOptions} 
                        numVisible={5} 
                        circular 
                        showItemNavigators 
                        item={itemTemplate} 
                        thumbnail={thumbnailTemplate} 
                    />
                </div>
                <div className="right__content">
                    <BuyBox
                        key={produto.id} // <-- força reinicialização quando o ID muda
                        name={produto.title}
                        categorie={produto.category}
                        brand={produto.brand}
                        reference={produto.id}
                        stars={5}
                        rating={produto.rating}
                        reviews={produto.reviews}
                        price={produto.price}
                        priceDiscount={produto.discount}
                        description={produto.description}
                        callToAction="Comprar"
                    >
                        <ProductOptions 
                            title="Tamanho"
                            options={produto.sizes}
                            radius=".25rem"
                            shape="square"
                            type="text"
                        />
                        <ProductOptions 
                            title="Cor"
                            options={produto.colors}
                            shape="circle"
                            type="color"
                        />
                    </BuyBox>
                </div>
            </SectionProductInfo>
            <SectionProductsRecommended 
                title="Produtos Relacionados" 
                titleAlign="left"
                activeLink 
                link={{text: "Ver todos", href: "/products"}}
            >
                <div className="grid__list">
                    {listagemDeCardsDeProdutos()}
                </div>
            </SectionProductsRecommended>
        </>
    );
}
 
export default ProductViewPage;
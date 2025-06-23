import { Carousel as Gallery } from 'primereact/carousel';
import { useEffect, useState } from "react";
import apiDigitalStore from '../../api/apiDigitalStore';
import CalcaBoneSVG from '../../assets/CalcaBoneSVG';
import CamisetaSVG from '../../assets/CamisetaSVG';
import HeadsetSVG from '../../assets/HeadsetSVG';
import ornamento from "../../assets/Ornament.svg";
import TenisSVG from '../../assets/TenisSVG';
import Banner from '../../components/Banner';
import CardProduct from '../../components/CardProduct';
import {
    SectionBanner,
    SectionHighlights,
    SectionTrending
} from "./style";

const Home = () => {
    const [banners, setBanners] = useState([]);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        apiDigitalStore.getBanners().then((data) => setBanners(data));
        apiDigitalStore.getProdutos(8).then((data) => setProdutos(data));
    }, []);

    const bannerTemplate = (banner) =>  {
        return (
            <Banner banner={banner} />
        );
    };

    const listagemDeCardsDeProdutos = () => {
        return (
            produtos.map(produto => <CardProduct key={produto.id} produto={produto} />)
        );
    }
    
    return ( 
        <>
            <SectionBanner activeTitle={false} >
                <Gallery 
                    value={banners} 
                    numVisible={1} 
                    numScroll={1} 
                    className="custom-carousel" 
                    circular
                    autoplayInterval={3000} 
                    itemTemplate={bannerTemplate} 
                />
                <img className="img-absolute" src={ornamento} alt="Ornamento" />
            </SectionBanner>  
            <SectionHighlights title="Coleções em destaque">
                <ul className="highlights">
                    <li className="highlight__item">
                        <a href="">
                            <img src="/collection-1.png" alt="Coleção destaque" />
                        </a>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <img src="/collection-2.png" alt="Coleção destaque" />
                        </a>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <img src="/collection-3.png" alt="Coleção destaque" />
                        </a>
                    </li>
                </ul>
            </SectionHighlights>
            <SectionHighlights title="Coleções em destaque" titleAlign="center" className="center-highlight" >
                <ul className="highlights center">
                    <li className="highlight__item">
                        <a href="">
                            <CamisetaSVG classe="active" />
                        </a>
                        <span className="name__item">Camisetas</span>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <CalcaBoneSVG />
                        </a>
                        <span className="name__item">Calças</span>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <CalcaBoneSVG />
                        </a>
                        <span className="name__item">Bonés</span>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <HeadsetSVG />
                        </a>
                        <span className="name__item">Headphones</span>
                    </li>
                    <li className="highlight__item">
                        <a href="">
                            <TenisSVG />
                        </a>
                        <span className="name__item">Tênis</span>
                    </li>
                </ul>
            </SectionHighlights>
            <SectionTrending title="Produtos em alta" activeLink link={{ text: "Ver todos", href: "/products" }}>
                <div className="grid__list">
                    {listagemDeCardsDeProdutos()}
                </div>
            </SectionTrending>
            <SectionBanner activeTitle={false}>
                <div className="gradient__box"></div>
                <Gallery 
                    value={[
                        {
                            "id": "20240001",
                            "impact": "Oferta especial",
                            "title": "Air Jordan edição de colecionador",
                            "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                            "image": "/home-slide-4.png",
                            "alt": "Oferta especial",
                            "textBtn": "Ver Oferta"
                        }
                    ]}  
                    className="custom-carousel toggle-direction-carousel" 
                    itemTemplate={bannerTemplate} 
                    showIndicators={false}
                />
                
            </SectionBanner>
        </>
     );
}
 
export default Home;
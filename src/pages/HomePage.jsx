import React from "react";
import Gallery from "../components/Gallery";
import Banners from "../components/Banners.json";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import "../styles/HomePage.css";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const handleVerOfertas = () => {
        navigate("/produtos");
        window.scrollTo(0, 0);
    };
    
    return (
        //Banner principal
        <main className="max-w-6xl mx-auto px-4 py-12 relative">
            <Gallery 
            images={Banners}
            showIndicators={true}
            />
            {/*Coleções em destaque com 3 imagens*/}
            <section>
                <div>
                    <Section title="Coleções em destaque">
                        <div className="flex gap-5 lg:gap-10 lg:justify-center lg:flex-row flex-col-reverse items-center">
                            {[1, 2, 3].map((num) => (
                            <Link 
                                key={num}
                                to={`/colecao${num}`}
                                className="transition duration-150 hover:scale-150 cursor-pointer"
                                onClick={handleVerOfertas}
                            >
                                <img 
                                src={`/assets/Img/collection-${num}.png`} 
                                alt="Coleção" 
                                className="lg:h-[200px] lg:w-[300px] h-30 w-50" 
                                />
                            </Link>
                            ))}
                        </div>
                    </Section>
                </div>
                
                {/*Coleções em destaque com 5 imagens*/}
                <div className="justify-center flex mt-8">
                    <Section title="Coleções em destaque" titleAlign="center">
                        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                            {[
                            { name: "Camisetas", icon: "Vector1.svg", alt: "Camisa", imgClass: "", textClass: "mt-3.5" },
                            { name: "Calças", icon: "Vector2.svg", alt: "Calças", imgClass: "", textClass: "mt-3.5" },
                            { name: "Bonés", icon: "Vector5.svg", alt: "Bonés", imgClass: "h-20 w-auto object-contain", textClass: "mt-0" },
                            { name: "Headphones", icon: "Vector4.svg", alt: "Headphones", imgClass: "", textClass: "mt-3.5" },
                            { name: "Tênis", icon: "Vector3.svg", alt: "Tênis", imgClass: "", textClass: "mt-3.5" }
                            ].map((item, index) => (
                            <Link 
                                key={index}
                                to={`/categoria/${item.name.toLowerCase()}`}
                                className="flex flex-col items-center group text-dark-gray-2 transition duration-300 hover:scale-150 hover:text-primary"
                            >
                                <img 
                                src={`${import.meta.env.BASE_URL}assets/${item.icon}`} 
                                alt={item.alt} 
                                className={`filter grayscale group-hover:grayscale-0 ${item.imgClass}`}
                                />
                                <span className={`text-1xl font-bold ${item.textClass}`}>{item.name}</span>
                            </Link>
                            ))}
                        </div>
                    </Section>
                </div>
                
                <div className="mt-10">
                    <Section
                        title="Produtos em alta"
                        titleAlign="center"
                        link={{ href: "/produtos", text: "Ver tudo →" }}
                    >
                        <div className="px-4">
                            <div className="">
                                <ProductCard />
                                
                                
                            </div>
                        </div>
                    </Section>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20 mb-10 gap-6 px-4 lg:px-0">
                <img 
                    src={`${import.meta.env.BASE_URL}assets/Img/Laye 1.png`} 
                    alt="tenis" 
                    className="w-full max-w-sm lg:max-w-md xl:max-w-lg"
                />
                    <aside className="text-center lg:text-left max-w-lg">
                        <span className="block text-primary font-bold text-lg lg:text-xl mb-2">
                        Oferta especial
                        </span>
                        <h2 className="text-2xl lg:text-4xl xl:text-5xl text-dark-gray-2 font-bold mb-4 leading-tight">
                        Air Jordan edição de colecionador
                        </h2>
                        <p className="text-dark-gray-2 mb-6 text-sm lg:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        </p>
                        <Link to="/produtos">
                        <Button
                            label="Ver ofertas" 
                            className="bg-primary text-white w-full lg:w-auto px-6 h-12 rounded-md hover:brightness-110"
                            onClick={handleVerOfertas}
                        />
                        </Link>
                    </aside>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
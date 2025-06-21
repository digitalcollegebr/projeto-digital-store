import React from "react";
import Logo from "./Logo";
import informationsData from "./information.json";

const FooterInformations = ({ title, informations }) => (
  <div id="colunas-container" className="w-full lg:w-auto flex flex-col items-center lg:items-start">
    <span className="text-[22px] mb-[25px] block font-semibold">{title}</span>
    <ul className="flex flex-col items-center lg:items-start">
      {informations.map((info, idx) => (
        <li key={idx} className="list-none mb-[10px] text-[16px] max-w-[200px]">
          <a href={info.link} className="no-underline text-[16px] hover:text-gray-300 transition-colors">
            {info.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
    return (
        <footer className="bg-dark-gray text-white">
            <div className="px-4 lg:px-16 py-8 lg:py-15">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-[60px] text-center lg:text-left">
                    <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                        <Logo variant="footer" />
                        <p className="break-normal max-w-[350px] text-[16px] mt-[10px] mb-[20px] leading-relaxed">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <div className="flex gap-[20px] mt-[10px] justify-center lg:justify-start">
                          <img 
                            className="cursor-pointer hover:opacity-80 transition-opacity" 
                            src={`${import.meta.env.BASE_URL}assets/facebook.svg`} 
                            alt="Facebook" 
                          />
                          <img 
                            className="cursor-pointer hover:opacity-80 transition-opacity" 
                            src={`${import.meta.env.BASE_URL}assets/instagram.svg`} 
                            alt="Instagram" 
                          />
                          <img 
                            className="cursor-pointer hover:opacity-80 transition-opacity" 
                            src={`${import.meta.env.BASE_URL}assets/twitter.svg`} 
                            alt="Twitter" 
                          />
                        </div>
                    </div>
                    
                    {/* Colunas de informações */}
                    {informationsData.map((item, idx) => (
                        <FooterInformations 
                            key={idx} 
                            title={item.title} 
                            informations={item.informations}
                        />
                    ))}
                </div>
            </div>
            
            {/* Data e direitos autorais */}
            <div className="border-t border-gray-600">
                <div className="px-4 lg:px-16">
                    <span className="flex justify-center py-5 text-sm lg:text-base">
                        © 2025 Digital Store
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
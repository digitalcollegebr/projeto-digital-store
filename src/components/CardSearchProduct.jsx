import { Link } from "react-router-dom";
import styled from "styled-components";
import { grayScaleColors } from "../styles/colors/cores";

const Card = styled(Link)`
    display: flex;
    gap: 1rem;
    align-items: center;

    img {
        width: 4rem;
        height: 4rem;
        border-radius: .5rem;
        background-color: ${grayScaleColors.lightGray3};
        object-fit: contain;
    }

    .text__link {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        hyphens: auto;
    }

    @media screen and (max-width: 769px) {
        gap: .5rem;

        img {
            width: 3rem;
            height: 3rem;
        }
    }
`;


const CardSearch = ({ to, search, produto, funcao }) => {

    const destacarTermo = (titulo) => {
        const partes = titulo.split(new RegExp(`(${search})`, 'gi'));
            return partes.map((parte, i) => 
                parte.toLowerCase() === search.toLowerCase()
                    ? <strong key={i}>{parte}</strong>
                    : parte
            );
    };

    return (
        <Card 
            className="card-search"
            to={to} 
            key={produto.id} 
            onClick={() => funcao()}
        >
            <img src={produto.image} alt={produto.title} />
            <span className="text__link">{destacarTermo(produto.title)}</span>
        </Card>
    );
}
 
export default CardSearch;
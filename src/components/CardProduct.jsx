import { Link } from "react-router-dom";
import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../styles/colors/cores";
import formatarPreco from "../utils/arredondarParaCima";

const Container = styled.div`
    &.card__product {
        display: flex;
        flex-direction: column;
        gap: 1.125rem;
        letter-spacing: .75px;
        overflow: hidden;
    }

    @media screen and (max-width: 769px) {
        &.card__product {
            gap: 0.682rem;
        }
    }
`;

const ImageContainer = styled.div`
    &.image__content {
        background-color: ${grayScaleColors.white};
        height: calc((100vw/4) - (1.5rem * 3)); /* Pega a largura da tela e divide pelo total de colunas menos os 3 gaps entre colunas*/
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.25rem;
        border-radius: .25rem;
        user-select: none;
        cursor: pointer;
        box-shadow: 6px 16px 30px 0px #6962620D;

        .produto__discount {
            position: absolute;
            top: 1.25rem;
            left: 1.25rem;
            background-color: ${actionsColors.discount};
            color: ${grayScaleColors.darkGray2};
            padding: 0.313rem 0.938rem;
            border-radius: 1.25rem;
            font-size: 0.875rem;
            font-weight: 700;
            letter-spacing: .75px;
            line-height: 1.375rem;
            text-transform: uppercase;
            z-index: 1;
        }

        a {
            display: flex;
            justify-content: center;
            img {
                display: block;
                width: 85%;
                height: 85%;
                object-fit: contain;
                transition: transform 0.3s ease;
            }

            img:hover {
                transform: scale(1.1); /* zoom interno */
            }
        }
    }

    @media screen and (max-width: 769px) {
        &.image__content {
            height: calc((100vw/2) - 0.563rem); /* Pega a largura da tela e divide pelo total de colunas menos o gap entre colunas */
            padding: 1rem;
            border-radius: .139rem;
            box-shadow: 3.35px 8.93px 16.75px 0px #6962620D;


            .produto__discount {
                top: 0.881rem;
                left: 0.813rem;
                padding: 0.25rem 0.938rem;
                border-radius: 1.813rem;
                line-height: 1.5rem;
            }

            a {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;

const InfoContainer = styled.div`
    &.info__content {
        .product__type {
            font-size: .75rem;
            font-weight: 700;
            line-height: 1.5rem;
            color: ${grayScaleColors.lightGray};
        }

        .product__name-gender {
            .text__link {
                font-size: 1.5rem;
                line-height: 2.375rem;

                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .product__price {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 2.375rem;
            color: ${grayScaleColors.darkGray};

            .price__old {
                font-weight: 400;
                text-decoration: line-through;
                color: ${grayScaleColors.lightGray};
                margin-right: .5rem;

            }
        }
    }

    @media screen and (max-width: 769px) {
        &.info__content {
            .product__name-gender {
                .text__link {
                    font-size: 0.875rem;
                    line-height: 1.375rem;
                    font-weight: 500;
                }
            }

            .product__price {
                font-size: 1rem;
                line-height: 1.5rem;
            }
        }
    }
`;

const CardProduct = ({ produto }) => {
    const precoComDesconto = formatarPreco(produto.price * (1 - produto.discount / 100));
    const precoOriginal = formatarPreco(produto.price, true);

    return (
        <Container className="card__product">
            <ImageContainer className="image__content">
                {produto.discount !== 0 
                    ? <span className="produto__discount">{produto.discount}% off</span> 
                    : null
                }
                <Link to={`/products/product/${produto.id}`}>
                    <img src={produto.image} alt={`${produto.type} ${produto.brand}`} />
                </Link>
            </ImageContainer>
            <InfoContainer className="info__content">
                <p className="product__type">{produto.type}</p>
                <Link className="product__name-gender" to={`/products/product/${produto.id}`}>
                    <p className="text__link">
                        {produto.title} - <span className="product__gender">{produto.gender}</span>
                    </p>
                </Link>
                <p className="product__price">
                    {produto.discount > 0 
                        ? (
                            <>
                                <span className="price__old">${precoOriginal}</span>${precoComDesconto}
                            </>
                        ) 
                        : (
                            <>${precoOriginal}</>
                        )
                    }   
                </p>
            </InfoContainer>
        </Container>
    );
}
 
export default CardProduct;
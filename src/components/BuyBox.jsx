import 'primeicons/primeicons.css';
import { Rating } from "primereact/rating";
import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../styles/colors/cores";
import ButtonCTA from './ButtonCTA';

const Container = styled.div`
    display: block;

    .product__info-title {
        text-transform: capitalize;
        font-size: 2rem;
        line-height: 36px;
        letter-spacing: 1px;
        font-weight: 700;
        color: ${grayScaleColors.darkGray};
        margin-bottom: .625rem;
    }

    .product__info-reference {
        display: flex;
        gap: .375rem;
        margin-bottom: .625rem;

        .reference {
            font-size: .75rem;
            line-height: 1.125rem;
            letter-spacing: .5px;
            font-weight: 500;
            color: ${grayScaleColors.darkGray3};
            vertical-align: middle;
        }

        .reference:not(:last-child)::after {
            content: "|";
            margin-left: .375rem;
        }
    }

    .product__info-stars_rating {
        display: flex;
        gap: .875rem;
        margin-bottom: 1.25rem;

        .p-rating {
            gap: .25rem;
        }

        .p-rating .p-rating-item {
            color: ${actionsColors.warning}; /* Cor padrão das estrelas */
        }

        .reviews__rating {
            display: flex;
            gap: .625rem;
            font-size: .875rem;
            letter-spacing: .25px;

            .rating {
                padding: .375rem .75rem;
                border-radius: .25rem;
                background-color: ${actionsColors.warning};
                color: ${grayScaleColors.white};
                line-height: 11px;
                font-weight: 900;

                .pi-star-fill {
                    margin-left: .25rem;
                    font-size: .75rem;
                }
            }

            .reviews {
                color: ${grayScaleColors.lightGray};
                line-height: 1.375rem;
                font-weight: 500;
            }
        }
    }

    .product__info-price {
        margin-bottom: 1.25rem;

        .product-price
        .product-price-discount {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.75rem;
            letter-spacing: .75px;
        }

        .product-price {
            color: ${grayScaleColors.darkGray2};

            strong {
                font-size: 2rem;
                line-height: 2.25rem;
                font-weight: 700;
                letter-spacing: 1px;
                margin-left: .188rem;

                .decimais {
                    font-size: 1rem;
                    line-height: 1.5rem;
                    letter-spacing: 0.75px;
                }
            }
        }

        .product-price-discount {
            margin-left: .625rem;
            text-decoration: line-through;
            color: ${grayScaleColors.lightGray2};
        }
    }

    .product__info-description {
        display:  flex;
        flex-direction: column;
        gap: .313rem;
        font-size: .875rem;
        line-height: 1.375rem;
        margin-bottom: 1.875rem;

        .description-title {
            color: ${grayScaleColors.lightGray};
            letter-spacing: .75px;
            font-weight: 700;
        }

        .description {
            letter-spacing: .25px;
            font-weight: 500;
        }
    }

    .product__info-childrens {
        display: flex;
        flex-direction: column;
        gap: .625rem;
        margin-bottom: 1.688rem;
    }

    .cta-buybox {
        width: 13.75rem;
        background-color: ${actionsColors.warning};
    }

    @media screen and (max-width: 769px) {
        .product__info-title {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        .product__info-childrens {
            gap: 1.875rem;
            margin-bottom: 3rem;
        }

        .cta-buybox {
            width: 100%;
        }
    }
`;

const BuyBox = ({ 
    name, 
    categorie, 
    brand, 
    reference, 
    stars, 
    rating, 
    reviews,
    price, 
    priceDiscount, 
    description, 
    children, 
    callToAction 
}) => {
    const starsValue = rating === 5 ? 5 : Math.floor(rating); // Só 5 se for exatamente 5.0
    const [precoComDescontoInteiro, precoComDescontoDecimais] = (price * (1 - priceDiscount / 100)).toFixed(2).split('.');
    const [precoOriginalInteiro, precoOriginalDecimais] = Number(price).toFixed(2).split('.');

    return (
        <Container className="product__info">
            <h3 className="product__info-title">{name}</h3>
            <div className="product__info-reference">
                <span className="reference">{categorie}</span>
                <span className="reference">{brand}</span>
                <span className="reference">REF:{reference}</span>
            </div>
            <div className="product__info-stars_rating">
                <Rating 
                    value={starsValue} 
                    stars={stars}
                    readOnly 
                    cancel={false} 
                />
                <div className="reviews__rating">
                    <span className="rating">
                        {Number(rating).toFixed(1)}
                        <i className="pi pi-star-fill"></i>
                    </span>
                    <span className="reviews">
                        &#40;{reviews === 1 ? `${reviews} avaliação` : `${reviews} avaliações`}&#41;
                    </span>
                </div>
            </div>
            <div className="product__info-price">
                {priceDiscount > 0 
                    ? (
                        <>
                            <p className="product-price">
                                R$ <strong>
                                    {precoComDescontoInteiro}
                                    <span className="decimais">,{precoComDescontoDecimais}</span>
                                </strong>
                                <span className="product-price-discount">
                                    {precoOriginalInteiro},{precoOriginalDecimais}
                                </span>
                            </p>
                        </>
                    ) 
                    : (
                        <p className="product-price">
                            R$ <strong>{precoOriginalInteiro},{precoOriginalDecimais}</strong>
                        </p>
                    )
                }
            </div>
            <div className="product__info-description">
                <p className="description-title">Descrição do produto</p>
                <p className="description">{description}</p>
            </div>
            <div className="product__info-childrens">
                {children}
            </div>
            <ButtonCTA classe="cta-buybox">{callToAction.toUpperCase()}</ButtonCTA>
        </Container>
    );
}
 
export default BuyBox;
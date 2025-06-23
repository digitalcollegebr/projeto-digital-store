import styled from "styled-components";
import Section from "../../components/layout/Section";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

export const SectionBanner = styled(Section)`
    padding: 0;
    position: relative;
    
    /* Carrosel */
    .custom-carousel {
        background-color: ${grayScaleColors.lightGray3};
        padding: 7.75rem 6.25rem 3.313rem;

        /* Conteudo */
        .p-carousel-content {
            gap: 3rem;

            /* Container */
            .p-carousel-container {
                /* Botões de voltar e avançar */
                button.p-link {
                    display: none;
                }
            }

            /* Indicadores de progresso */
            .p-carousel-indicators {
                display: flex;
                gap: .625rem;

                li.p-carousel-indicator button {
                    height: .75rem;
                    width: .75rem;
                    border-radius: 100%;
                    background-color: ${grayScaleColors.lightGray2};
                }

                li.p-carousel-indicator.p-highlight button {
                    background-color: ${actionsColors.primary};
                }
            }
        }
    }

    /* Imagem flutuante a direita */
    .img-absolute {
        position: absolute;
        top: 4.875rem;
        right: 2.313rem;
        width: 9%;
    }

    /* Banner Oferta especial */
    .toggle-direction-carousel {
        background-color: ${grayScaleColors.white};

        .banner__container {
            flex-direction: row-reverse;
            gap: 4.188rem;

            .left__content {
                width: 50%;
                padding-right: 16rem;

                .impact__text {
                    color: ${actionsColors.primary};
                }

                h1 {
                    font-size: 3rem;
                    line-height: 3.125rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                    color: ${grayScaleColors.darkGray2};
                }
                .subtitle {
                    font-size: 1rem;
                    color: ${grayScaleColors.darkGray2};
                    line-height: 1.75rem;
                    letter-spacing: .75px;
                }
            }

            .right__content {
                width: 50%;
                overflow: hidden;
                height: fit-content;

                img {
                    display: block;
                    width: 100%;
                    height: auto;
                }
            }
        }
    }

    /* Circulo com gradiente */
    .gradient__box {
        position: absolute;
        top: 4.5rem;
        left: 10rem;
        height: 30vw;
        width: 30vw;
        border-radius: 100%;
        background: linear-gradient(180deg, rgba(66, 0, 255, 0.25) -40.67%, rgba(255, 255, 255, 0) 100%);
    }

    @media screen and (max-width: 769px) {
        overflow: hidden;
        
        .custom-carousel {
            padding: 4rem 1.25rem 2.5rem;

            /* Conteudo */
            .p-carousel-content {
                gap: 2.5rem;

                /* Indicadores de progresso */
                .p-carousel-indicators {
                    display: flex;
                    gap: .625rem;

                    li.p-carousel-indicator button {
                        height: .75rem;
                        width: .75rem;
                        border-radius: 100%;
                        background-color: ${grayScaleColors.lightGray2};
                    }

                    li.p-carousel-indicator.p-highlight button {
                        background-color: ${actionsColors.primary};
                    }
                }
            }
        }

        .img-absolute {
            top: 1.25rem;
            right: -4rem;
            width: 35%;
        }

        .toggle-direction-carousel {
            .banner__container {
                flex-direction: column-reverse;
                gap: 1.688rem;

                .left__content {
                    padding-right: 0;
                    width: 100%;
                    text-align: left;

                    .impact__text {
                        color: ${actionsColors.warning};
                    }   
                    h1 {
                        font-size: 1.75rem;
                        line-height: 2.25rem;
                        letter-spacing: 2px;
                    }
                    .subtitle {
                        font-size: .875rem;
                        line-height: 1.375rem;
                        letter-spacing: .25px;
                    }
                    .primary-button {
                        width:12.5rem;
                        margin-top: 1.5rem;
                    }
                }

                .right__content {
                    width: 80%;
                    padding: 2rem 0 5rem;
                    overflow: hidden;

                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                }
            }
        }

        .gradient__box {
            top: 2.5rem;
            left: 50%;
            right: 50%;
            transform: translate(-50%, 0);
            width: 80vw;
            height: 80vw;
        }
    }
`;

export const SectionHighlights = styled(Section)`
    &.center-highlight {
        margin-top: 1.25rem;
        margin-bottom: 2.688rem;
    }

    .highlights {
        display: flex;
        gap: .75rem;

        .highlight__item {
            flex: 1;
            overflow: hidden; /* ESSENCIAL para o zoom ficar interno */
            
            a {
                display: block; /* garante que a <a> envolva corretamente */
                user-select: none;

                img {
                    border-radius: .25rem;
                    width: 100%;
                    object-fit: cover; /* mantém proporção preenchendo o espaço */
                    transition: transform 0.3s ease;
                    display: block; /* remove espaço extra abaixo da imagem */
                }
                img:hover {
                    transform: scale(1.1); /* zoom interno */
                }
            }
        }
    }

    .center {
        justify-content: center;
        gap: 3rem;

        .highlight__item {
            flex: none;
            text-align: center;
            
            a {
                background-color: ${grayScaleColors.white};
                padding: 1.25rem;
                border-radius: 100%;
                margin-bottom: 0.75rem;
            }

            .name__item {
                font-size: 0.875rem;
                font-weight: 700;
                line-height: 1.375rem;
                letter-spacing: .75px;
                color: ${grayScaleColors.darkGray2};
            }
        }
    }

    @media screen and (max-width: 769px) {
        &.center-highlight {
            padding: 0;
            overflow: hidden;
            margin-top: 3.125rem;
            margin-bottom: 2.625rem;
        }

        .highlights {
            flex-direction: column;
            gap: 0.625rem;

            .highlight__item {
                a {
                    img {
                        border-radius: .5rem;
                    }
                    img:hover {
                        transform: none;
                    }
                }
            }
        }

        &.center-highlight.box-title {
            padding: 0 1.25rem 0;
            .title__section.center {
                text-align: left;
            }
        }

        .highlights.center {
            justify-content: flex-start;
            flex-direction: row;
            gap: 1.188rem;
            overflow-x: scroll;
            scroll-behavior: smooth;
            padding: 0 1.25rem .5rem;

            .highlight__item {
                flex: none;
                text-align: center;
                
                a {
                    padding: 1.106rem;
                    margin-bottom: 0.625rem;

                    .icone {
                        height: 3.5rem;
                        width: 3.5rem;
                    }
                }

                .name__item {
                    font-size: 0.75rem;
                    letter-spacing: 1px;
                }
            }
        }
    }
`;

export const SectionTrending = styled(Section)`
    padding-bottom: 7.5rem;

    .grid__list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 1.5rem;
        row-gap: 2.5rem;
    }

    @media screen and (max-width: 769px) {
        padding-bottom: 2.5rem;

        .grid__list {
            grid-template-columns: 1fr 1fr;
            column-gap: 0.563rem;
        }
    }
`;
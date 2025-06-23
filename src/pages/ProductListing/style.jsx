import styled from "styled-components";
import Section from "../../components/layout/Section";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

export const SectionResults = styled(Section)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .results__box {
        display: flex;
        gap: .5rem;

        .results__type {
            font-weight: 700;
            line-height: 1.5rem;
            letter-spacing: .75px;
        }

        .results__count {
            line-height: 1.75rem;
            letter-spacing: .75px;
        }
    }

    .order__by-form {
        display: flex;
        gap: 0.625rem;

        .icon__button-filter {
            width: 3.75rem;
            height: 3.75rem;
            background-color: ${actionsColors.primary};
            border-radius: .5rem;
            cursor: pointer;
            display: none;

            .pi-filter {
                font-size: 1.5rem;
                color: ${grayScaleColors.white};
            }
        }
    }

    @media screen and (max-width: 769px) {
        flex-direction: column-reverse;

        .order__by-form {
            width: 100%;
            
            .icon__button-filter {
                display: block;
            }
        }
    }
`;

export const SectionProducts = styled(Section)`
    padding-top: 0;
    gap: 6rem;

    .content-box {
        display: flex;
        gap: 1.75rem;

        .filters-container {
            width: 19.25rem;
            height: fit-content;
            display: flex;
            flex-direction: column;
            background-color: ${grayScaleColors.white};
            gap: 1.25rem;
            padding: 1.875rem;
            flex-shrink: 0; /* Impede que a largura seja encolhida */

            .info__actions {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 2rem;

                .title-filter-container {
                    font-size: 1rem;
                    font-weight: 700;
                    line-height: 1.5rem;
                    letter-spacing: .75px;
                }

                button {
                    display: none;
                    background-color: transparent;
                    font-size: .75rem;
                    width: 2.5rem;
                    cursor: pointer;

                    .pi-times {
                        transition: all .3s ease;
                    }
                }
                button:hover {
                    .pi-times{
                        color: ${actionsColors.primary};
                    }
                }
            }

            .divisor {
                border-bottom: 1px solid ${grayScaleColors.lightGray2};
            }

            .form-filters {
                /* height: 80vh;
                overflow-y: auto; */
                display: flex;
                flex-direction: column;
                gap: 1.25rem;
            }
        }

        /* Quando ativo, mostra o painel deslizando da esquerda */
        .filters-container.active {
            transform: translateX(0);
        }

        /* Overlay para o fundo escuro */
        .overlay {
            display: none; /* invisível por padrão */
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #1f1f1f40;
            cursor: pointer;
            z-index: 1000; /* abaixo do painel */
            transition: opacity 0.3s ease-in-out;
        }

        /* Quando ativo, mostra o overlay */
        .overlay.active {
            display: block;
        }

        .grid__list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: .875rem;
            row-gap: 2.5rem;
            height: fit-content;
        }
    }

    .paginator-container {
        gap: 1rem;
        
        .p-paginator-element {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 100%;
            transition: all .3s ease;
        }

        .p-paginator-element:not(:disabled),
        .p-dropdown.p-inputwrapper {
            color: ${actionsColors.primary};
            background-color: ${grayScaleColors.white};
            box-shadow: 0 0 8px #00000030;
        }

        .p-paginator-element:not(:disabled):hover {
            color: ${grayScaleColors.white};
            background-color: ${actionsColors.primary};
        }

        .p-dropdown.p-inputwrapper {
            margin-left: 1.5rem;
            align-items: center;
            height: 2.5rem;
            padding: .5rem;
            gap: .5rem;
            border-radius: .5rem;
            font-weight: 600;
            transition: all .3s ease;
        }
        
    }

    @media screen and (max-width: 769px) {
        gap: 3rem;

        .content-box {
            .filters-container {
                position: absolute;
                top: 0;
                left: 0;
                height: 100vh;
                width: 80vw;
                max-width: 320px;
                transform: translateX(-100%);
                transition: transform 0.3s ease-in-out;
                z-index: 1001; /* acima do overlay */
                overflow-y: auto;

                .info__actions {
                    button {
                        display: block;
                    }
                }
            }
            .grid__list {
                grid-template-columns: 1fr 1fr;
                column-gap: 0.563rem;
            }
        }

        .paginator-container {
            gap: .5rem;

            .p-paginator-element:not(:disabled),
            .p-dropdown.p-inputwrapper {
                box-shadow: 0 0 4px #00000025;
            }

            .p-dropdown.p-inputwrapper {
                display: none;
            }
            
        }
    }
`;
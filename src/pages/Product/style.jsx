import styled from "styled-components";
import Section from "../../components/layout/Section";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

export const SectionBreadCrumb = styled(Section)`
    padding-top: 0;
    padding-bottom: 0;
`;

export const SectionProductInfo = styled(Section)`
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 2.5rem;

    .left__content {
        .galleria-container {
            min-width: 20rem;

            .p-galleria-content {
                gap: 1.25rem;

                .p-galleria-item-wrapper {
                    .p-galleria-item-container {

                        .p-galleria-item-prev,
                        .p-galleria-item-next {
                            svg {
                                width: 2rem;
                                height: 1.375rem;
                                fill: ${grayScaleColors.darkGray2};
                            }
                        }

                        .p-galleria-item-prev {
                            margin-left: 1rem;
                        }

                        .p-galleria-item {
                            background-color: #E2E3FF;
                            border-radius: .25rem;
                            
                            .current-image-galleria {
                                height: 35.625rem;
                                width: 75%;
                                object-fit: contain;
                                display: block; 
                            }
                        }

                        .p-galleria-item-next {
                            margin-right: 1rem;
                        }
                    }
                }

                .p-galleria-thumbnail-wrapper {
                    .p-galleria-thumbnail-container {
                        .p-galleria-thumbnail-prev,
                        .p-galleria-thumbnail-next {
                            display: none;
                        }

                        .p-galleria-thumbnail-items-container {
                            .p-galleria-thumbnail-items {
                                gap: 1.75rem;

                                .p-galleria-thumbnail-item {
                                    background-color: #E2E3FF;
                                    border-radius: .25rem;
                                    height: 6rem;
                                    max-width: calc((100% - (4 * 1.75rem) - 5px) / 5);  // largura - (4 gaps * valor do gap - borda dos 5 primeiros cards) / 5 thumbs
                                    
                                    .p-galleria-thumbnail-item-content {
                                        width: 100%;
                                        height: 100%;

                                        .image-galleria-thumb {
                                            display: block; 
                                            width: 100%;
                                            height: 100%;
                                            object-fit: contain;
                                        }
                                    }
                                }

                                .p-galleria-thumbnail-item.p-galleria-thumbnail-item-current {
                                    border: 2px solid ${actionsColors.primary};
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 769px) {
        padding: 1.25rem 1.25rem 2.5rem;
        grid-template-columns: 1fr;

        .left__content {
            .galleria-container {
                min-width: 17rem;

                .p-galleria-content {
                    gap: .625rem;

                    .p-galleria-item-wrapper {
                        .p-galleria-item-container {
                            .p-galleria-item-prev,
                            .p-galleria-item-next {
                                svg {
                                    width: .875rem;
                                    height: 2rem;
                                }
                            }

                            .p-galleria-item {
                                .current-image-galleria {
                                    height: 17rem;
                                }
                            }
                        }
                    }

                    .p-galleria-thumbnail-wrapper {
                        .p-galleria-thumbnail-container {
                            .p-galleria-thumbnail-items-container {
                                .p-galleria-thumbnail-items {
                                    gap: .5rem;

                                    .p-galleria-thumbnail-item {
                                        height: 3.5rem;
                                        max-width: calc((100% - (4 * .5rem) - 2px) / 5);  // largura - (4 gaps * valor do gap - borda dos 5 primeiros cards) / 5 thumbs

                                        .p-galleria-thumbnail-item-content {
                                            width: 80%;
                                        }
                                    }

                                    .p-galleria-thumbnail-item.p-galleria-thumbnail-item-current {
                                        border-width: 1px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const SectionProductsRecommended = styled(Section)`
    padding-bottom: 7.5rem;

    .grid__list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 1.5rem;
        row-gap: 2.5rem;    
    }

    @media screen and (max-width: 769px) {
        padding-bottom: 5rem;

        .grid__list {
            grid-template-columns: 1fr 1fr;
            column-gap: 0.563rem;
        }
    }
`;
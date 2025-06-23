import styled from "styled-components";
import Section from "../../components/layout/Section";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

export const SectionLogin = styled(Section)`
    flex-direction: row;
    background: linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%);
    padding: 7.5rem 6.25rem 4rem;
    justify-content: space-between;

    @media screen and (max-width: 769px) {
        padding: 3.938rem 1.875rem 5rem;
    }
`;

export const Content = styled.div`
    &.content-login {
        width: 36.438rem;
        background-color: ${grayScaleColors.white};
        border-radius: .25rem;
        padding: 1.875rem;
        margin-right: 2.75rem;
        height: fit-content;

        form {
            display: flex;
            flex-direction: column;
            gap: 1.875rem;

            .title-box-form {
                display: flex;
                flex-direction: column;
                gap: 1.25rem;

                .title-form-login {
                    font-weight: 700;
                    font-size: 2rem;
                    line-height: 2.25rem;
                    letter-spacing: 1px;
                    color: ${grayScaleColors.darkGray};

                }

                .subtitle-form-login {
                    line-height: 1.75rem;
                    letter-spacing: .75px;

                    a {
                        text-decoration: underline;
                    }
                }
            }

            .inputs-form {
                display: flex;
                flex-direction: column;
                gap: 1.25rem;

                fieldset {
                    border: none;
                    display: flex;
                    flex-direction: column;
                    gap: .313rem;

                    label {
                        font-weight: 700;
                        font-size: .75rem;
                        line-height: 1.5rem;
                        letter-spacing: .75px;
                    }

                    input {
                        font-size: 1rem;
                        line-height: 1.75rem;
                        letter-spacing: .75px;
                        padding: 1rem 1.5rem;
                        background: #47474708;
                        border-radius: .5rem;
                    }

                    .error-input {
                        color: ${actionsColors.error};
                        font-weight: 600;
                        font-size: .875rem;
                    }
                }
            }

            a {
                font-weight: 500;
                font-size: .875rem;
                line-height: 1.375rem;
                letter-spacing: .25px;
                text-decoration: underline;
            }

            .others-login {
                display: flex;
                gap: 1.25rem;
                justify-content: center;

                .others-methods {
                    line-height: 1.75rem;
                    letter-spacing: .75px;
                }

                .methods-login {
                    display: flex;
                    gap: 1.5rem;

                    img {
                        width: 1.5rem;
                        height: 1.5rem;
                    }
                }
            }       
        }
    }

    @media screen and (max-width: 769px) {
        &.content-login {
            width: 100%;
            margin-right: 0;

            form {
                .title-box-form {
                    gap: 0;
                    text-align: center;

                    .title-form-login {
                        font-size: 1.375rem;
                        line-height: 2.125rem;
                        letter-spacing: 2px;
                    }

                    .subtitle-form-login {
                        font-size: .875rem;
                        line-height: 1.5rem;
                        letter-spacing: .25px;
                    }
                }

                .inputs-form {
                    fieldset {
                        input {
                            padding: 1rem .75rem;
                        }
                    }
                }

                .others-login {
                    flex-direction: column;
                    align-items: center;

                    .others-methods {
                        font-size: .875rem;
                        line-height: 1.375rem;
                        letter-spacing: .25px;
                    }
                }       
            }
        }
    }
`;

export const ContentImage = styled.div`
    &.picture-content {
        display: flex;

        .up, .down {
            height: 90vh;
            width: 100%;
            overflow: hidden;
        }

        .down {
            display: flex;
            align-items: end;
        }
    }

    @media screen and (max-width: 769px) {
        &.picture-content {
            display: none;
        }
    }
`;

export const Image = styled.img`
    &.login-picture {
        height: 70%; 
        width: 100%;
        object-fit: contain;
    }
`;
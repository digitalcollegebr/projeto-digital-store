import { Link } from "react-router-dom";
import styled from "styled-components";
import { grayScaleColors } from "../../styles/colors/cores";

const Container = styled.section`
    /* Afastamento padrão das seções */
    & {
        padding: 2.5rem 6.25rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        .box-title {
            display: flex;
            justify-content: space-between;
            gap: 1rem;

            .title__section {
                color: ${grayScaleColors.darkGray2};
                font-size: 1.5rem;
                font-weight: bold;
                flex: 1;
            }

            .title__section.center {
                text-align: center;
            }
            .title__section.left {
                text-align: left;
            }

            .link__section {
                display: flex;
                align-items: center;
                gap: 0.625rem;
            }
        }
    }

    @media screen and (max-width: 769px) {
        & {
            padding: 1.875rem 1.25rem;

            .box-title {
                .title__section {
                    font-size: 1rem;
                }

                .link__section {
                    font-weight: 500;
                    gap: 0.5rem;
                }
            }
        }
    }
`;

const Section = ({
    activeTitle = true, 
    activeLink = false, 
    title = "Título",
    titleAlign = "left",
    link = {
        text: "Show More",
        href: "/"
    },
    className, children
}) => {
    return (
        <Container className={className} >
            {activeTitle 
                ? (<div className="box-title">
                        <h2 className={`title__section ${titleAlign === "center" ? "center" : "left"}`}>
                            {title}
                        </h2>
                        {activeLink 
                            ? <Link className="link__section active" to={link.href} >
                                <p className="text__link">{link.text}</p>
                                <span className="material-symbols-outlined icone__link">arrow_right_alt</span>
                              </Link>
                            : <></>
                        }
                    </div>)
                : <></>
            }
            {children}
        </Container>
    );
}
 
export default Section;
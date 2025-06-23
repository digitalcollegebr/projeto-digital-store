import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../styles/colors/cores";
import ButtonCTA from "./ButtonCTA";

const Container = styled.div`
    &.banner__container {
        display: flex;
        gap: 3rem;   
    }

    @media screen and (max-width: 769px) {
        &.banner__container {
            flex-direction: column-reverse;
            align-items: center;
        }
    }
`;

const LeftContent = styled.div`
    &.left__content {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        width: 30%;
        height: fit-content;  

        .impact__text {
            font-weight: 700;
            line-height: 24px;
            letter-spacing: .75px;
            color: ${actionsColors.warning};
        }
        h1 {
            font-size: 4rem;
            color: ${grayScaleColors.darkGray};
            font-weight: 800;
            line-height: 4.125rem;
            letter-spacing: 1px;
        }
        .subtitle {
            font-size: 1.125rem;
            color: ${grayScaleColors.darkGray};
            line-height: 2.125rem;
            letter-spacing: .75px;
        }
        .primary-button {
            width: 13.75rem;
            margin-top: 1.25rem;
        }
    }

    @media screen and (max-width: 769px) {
        &.left__content {
            gap: .625rem;
            width: 100%;
            text-align: center;

            .impact__text {
                font-size: .875rem;
                line-height: 22px;
                color: ${actionsColors.primary};
            }
            h1 {
                font-size: 2.5rem;
                line-height: 3.125rem;
            }
            .subtitle {
                font-size: .875rem;
                color: ${grayScaleColors.darkGray2};
                line-height: 1.375rem;
                letter-spacing: .25px;
                margin-top: .625rem;
            }
            .primary-button {
                width: 100%;
                margin-top: 1.875rem;
            }
        }
    }
`;

const RightContent = styled.div`
    &.right__content {
        display: flex;
        padding-left: 2rem;
        width: 70%;

        img {
            height: 40rem;
            object-fit: cover;
        }
    }

    @media screen and (max-width: 769px) {
        &.right__content {
            padding-left: 0;
            justify-content: center;

            img {
                width: 65%;
                height: auto;
                object-fit: scale-down;
            }
        }
    }
`;

const Banner = ({banner, classe}) => {
    return (
        <Container className={`banner__container ${classe}`}>
            <LeftContent className="left__content">
                <p className="impact__text">{banner.impact}</p>
                <h1>{banner.title}</h1>
                <p className="subtitle">{banner.subtitle}</p>
                <ButtonCTA classe="primary-button">{banner.textBtn}</ButtonCTA>
            </LeftContent>
            <RightContent className="right__content">
                <img src={banner.image} alt={banner.alt} />
            </RightContent>
        </Container>
    );
}
 
export default Banner;
import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../../styles/colors/cores";

export const Section = styled.div`
    &.beggin {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center ;
        height: 50dvh;
        background-color: ${actionsColors.success};
    }
`;

export const Title = styled.h1`
    & {
        color: ${actionsColors.primary};
        font-size: 3.5rem;
    }
`;

export const Subtitle = styled.p`
    & {
        color: ${grayScaleColors.darkGray2};
        font-size: 1.25rem;
    }
`;
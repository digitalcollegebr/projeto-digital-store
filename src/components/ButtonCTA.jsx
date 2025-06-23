import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../styles/colors/cores";
import { tipography } from "../styles/fonts/tipografia";

const Button = styled.button`
    &.btn-cta {
        font-size: 1rem;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: .75px;
        font-family: ${tipography.familia};
        background-color: ${actionsColors.primary};
        color: ${grayScaleColors.lightGray3};
        padding: .75rem 1rem;
        border-radius: .5rem;
        cursor: pointer;
        transition: all .3s ease-in;
        user-select: none;
    }

    &.btn-cta:hover {
        background-color: ${actionsColors.tertiary};
    }
`;

const ButtonCTA = ({ children, classe, funcao }) => {
    return (
        <Button className={`btn-cta ${classe}`} onClick={funcao} >
            {children}
        </Button>
    );
}
 
export default ButtonCTA;
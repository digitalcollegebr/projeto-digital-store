import { createGlobalStyle as globalStyle } from "styled-components";
import { actionsColors, grayScaleColors } from "./colors/cores";
import { tipography } from "./fonts/tipografia";

const Global = globalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    html {
        font-size: 16px;
    }

   body, input, textarea {
        font-family: ${tipography.familia};
        font-weight: ${tipography.peso};
        color: ${grayScaleColors.darkGray2};
    }

    body {
        width: 100%;
        min-width: 320px;
        min-height: 100dvh;
        background-color: ${actionsColors.bg};
        font-size: 1rem;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    button, input {
        border: none;
    }
        
    a {
        text-decoration: none;
        color: ${grayScaleColors.darkGray2};
        font-size: 1.125rem;
        transition: all .3s ease;

        .icone, .icone__link {
            transition: all .3s ease;
        }
    }

    a:hover {
        color: ${actionsColors.primary};
        
        .text__link {
            text-decoration: underline;
        }

        .icone__link {
            transform: translateX(.5rem);
        }
    }

    a.active {
        color: ${actionsColors.primary};
    }

    .icone {
        path {
            fill: ${grayScaleColors.lightGray};
            transition: all 0.3s ease;
        }
    }
    .icone:hover {
        path {
            fill: ${actionsColors.primary};
        }
    }
    .icone.active {
        path {
            fill: ${actionsColors.primary};
        }
    }

    @media screen and (max-width: 769px) {
        a {
            font-size: .875rem;
        }

        a:hover {
            .icone {
                transform: none;
            }
        }
    }
`;

export default Global;
import { useState } from "react";
import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../styles/colors/cores";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: .625rem;

    .title-box-options {
        font-weight: 700;
        font-size: .875rem;
        line-height: 1.375rem;
        letter-spacing: .75px;
        color: ${grayScaleColors.lightGray};
    }

    .options {
        display: flex;
        flex-wrap: wrap;
        gap: .625rem;

        .option {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            user-select: none;
        }

        .option.square {
            width: 3rem;
            height: 3rem;
            background-color: ${grayScaleColors.white};
            border: 1px solid ${grayScaleColors.lightGray2};

            .option-value {
                font-weight: 700;
                line-height: 1.5rem;
                letter-spacing: .75px;
            }
        }

        .option.circle {
            width: 2.438rem;
            height: 2.438rem;
            border-radius: 100%;
            border: 2px solid ${grayScaleColors.white};

            .option-value.circle {
                width: 1.938rem;
                height: 1.938rem;
                border-radius: 100%;
            }
        }
    }
`;

const ProductOptions = ({ 
    title, 
    options,
    radius,
    shape,
    type 
}) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <Container className="box-options">
            <p className="title-box-options">{title}</p>
            <div className="options">
                {options.map((option, index) => {
                    const isSelected = selectedIndex === index;
                    
                    return (

                        <div 
                            key={`${shape}-${index}`} 
                            className={`option ${shape}`} 
                            style={{
                                // spread operator - operador de espalhamento do JavaScript.
                                // Ele é usado para copiar ou expandir objetos e arrays.
                                // Se shape === "square" for verdadeiro, ele "espalha" o objeto { borderRadius: radius } dentro do objeto style. Se não for, nada é adicionado.
                                ...(shape === "square" && isSelected === false && { borderRadius: radius }),
                                ...(shape === "square" && isSelected && { borderRadius: radius, backgroundColor: actionsColors.primary, color: grayScaleColors.white }),
                                ...(shape === "circle" && option.code && isSelected && {
                                    border: `2px solid ${actionsColors.primary}`,
                                }),
                            }}
                            title={shape === "circle" && option.name ? option.name : null}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <span 
                                className={`option-value ${shape}`}
                                style={type === "color" && option.code ? {backgroundColor: option.code} : null}
                            >
                                { shape === "square" ? option : null }
                            </span>
                        </div>
                    )
                })}
            </div>
        </Container>
    );
}
 
export default ProductOptions;
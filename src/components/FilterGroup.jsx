import styled from "styled-components";
import { actionsColors, grayScaleColors } from "../styles/colors/cores";

const Container = styled.fieldset`
    &.filter-group {
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        border: none;

        .form-fieldset {
            font-size: .875rem;
            font-weight: 700;
            line-height: 1.375rem;
            letter-spacing: .75px;
            margin-bottom: 0.625rem;
        }

        .form-input-container {
            display: flex;
            align-items: center;
            gap: 0.625rem;
            user-select: none;

            input[type=checkbox],
            input[type=radio] {
                width: 1.375rem;
                height: 1.375rem;
                border: 1px solid ${grayScaleColors.darkGray3};
                background-color: transparent;
                cursor: pointer;
                position: relative;
                appearance: none; /* remove o estilo padrão do navegador */
                transition: background-color .3s ease, border-color .3s ease;
            }

            input[type=checkbox] {
                border-radius: 2px;
            }

            input[type=radio] {
                border-radius: 100%;
            }

            input[type=checkbox]:checked {
                background-color: ${actionsColors.primary};
                border-color: ${actionsColors.primary};
            }

            input[type=checkbox]:checked::after {
                content: "";
                position: absolute;
                top: 1px;
                left: 6px;
                width: 9px;
                height: 13.5px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
            }

            input[type=radio]:checked {
                border-color: ${actionsColors.primary};
            }

            input[type=radio]:checked::after {
                content: "";
                position: absolute;
                top: 3px;
                left: 3px;
                width: 14px;
                height: 14px;
                border-radius: 100%;
                background-color: ${actionsColors.primary};
            }

            label {
                font-size: .875rem;
                font-weight: 500;
                line-height: 1.375rem;
                letter-spacing: .25px;
                cursor: pointer;
            }
        }

        .form-input-container:hover {
            input {
                border-color: ${actionsColors.primary};
            }

            label {
                color: ${actionsColors.primary};
            }
        }
    }
`;

const FilterGroup = ({ 
    title = "label", 
    inputType, 
    options = [{"text": "Options 1", "value": "opt1", "name": "product"}],
    selecionados = [],       // Array com valores selecionados
    onChange = () => {}      // Função chamada ao mudar seleção (value, checked)
}) => {
    const geraOptions = () => {
            return options.map((filtro, index) => {
                const safeText = (filtro?.text || "").trim().replace(/\s+/g, '-'); // substitui espaços por hífens
                const inputId = `filter-${safeText.toLowerCase()}-${index}`;
                const inputName = filtro.name.toLowerCase();
                const isChecked = selecionados.includes(filtro.value);

                return (
                    <div key={`f1l73r-${index}`} className="form-input-container">
                        <input 
                            type={inputType === "checkbox" ? "checkbox" : "radio"} 
                            name={inputName} 
                            id={inputId} 
                            value={filtro?.value} 
                            checked={isChecked}
                            onChange={e => onChange(filtro.value, e.target.checked)}
                        />
                        <label htmlFor={inputId}>{filtro.text}</label>
                    </div>
                )
            })
        
    }

    return (
        <Container className="filter-group">
            <legend className="form-fieldset">{title}</legend>
            {geraOptions()}
        </Container>
    );
}
 
export default FilterGroup;
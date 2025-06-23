import styled from "styled-components";
import { grayScaleColors } from "../styles/colors/cores";

const Container = styled.div`
    &.order__by-container {
        display: flex;
        gap: .5rem;
        width: 19.25rem;
        padding: .938rem;
        border-radius: 0.25rem;
        border: 1px solid ${grayScaleColors.darkGray2};
        align-items: center;

        .order__by-label,
        .order__by-select {
            font-size: 1rem;
            line-height: 1.75rem;
            letter-spacing: .75px;
        }

        .order__by-label {
            font-weight: 700;
        }

        .order__by-select {
            font-weight: 400;
            height: fit-content;
            background-color: transparent;
            border: none;
            outline: none;
            flex: 1;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 769px) {
        &.order__by-container {
            flex: 1;
            padding: .938rem .875rem;
            width: 100%;

            .order__by-label,
            .order__by-select {
                font-size: .813rem;
            }
        }
    }
`;

const Select = ({ options, orderBy, funcao }) => {
    const geraOptions = () => {
        return options.map((item, index) => <option key={index} value={item.value}>{item.text}</option>);
    }

    return (
        <Container className="order__by-container">
            <span className="order__by-label">Ordenar por:</span>
            <select 
                name="orderBy" 
                className="order__by-select" 
                value={orderBy}
                onChange={funcao}
            >
                {geraOptions()}
            </select>
        </Container>
    );
}
 
export default Select;
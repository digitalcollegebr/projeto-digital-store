import { useRef } from "react";
import styled from "styled-components";
import { grayScaleColors } from "../styles/colors/cores";

const ContainerInput = styled.div`
  &.input-component {
    background-color: ${grayScaleColors.lightGray3};
    padding: 1rem 1rem 1rem 1.5rem;
    border-radius: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  &.input-component:focus-within {
    outline: 2px solid #000;
  }

  i {
    font-size: 1.5rem;
    color: ${grayScaleColors.darkGray3};
  }

  @media screen and (max-width: 769px) {
    &.input-component {
      padding: 1.125rem 1.25rem;
    }
  }
`;

const CampoDeEntrada = styled.input`
  &.input {
    width: 100%;
    font-size: 1rem;
    line-height: 1.75rem;
    letter-spacing: 0.75px;
    background-color: transparent;
    border: none;
    outline: none; /* Remove o contorno de foco padrão */
  }
`;

const Input = ({
  tipo = "text",
  apelido,
  classe,
  icone,
  valor,
  funcao,
  referencia,
  foco,
}) => {
  const inputRef = useRef(null);

  // Focar o input sempre que o container receber foco
  const handleContainerFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <ContainerInput
      className={`input-component ${classe}`}
      tabIndex={2} // faz o container ser focável com TAB
      onFocus={handleContainerFocus} // foca o input automaticamente
    >
      <CampoDeEntrada
        type={tipo}
        className="input"
        onChange={funcao}
        onFocus={foco}
        placeholder={apelido}
        value={valor}
        ref={(el) => {
          inputRef.current = el;
          if (typeof referencia === "function") {
            referencia(el);
          } else if (referencia) {
            referencia.current = el;
          }
        }}
      />
      {icone}
    </ContainerInput>
  );
};

export default Input;
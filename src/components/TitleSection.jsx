import styled from "styled-components";
import { grayScaleColors } from "../styles/colors/cores";

const Title = styled.button`
  &.title-2 {
    background-color: transparent;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.75px;
    color: ${grayScaleColors.darkGray2};
  }
`;

const TitleSection = ({ children, classe }) => {
  return <Title className={`title-2 ${classe}`}>{children}</Title>;
};

export default TitleSection;
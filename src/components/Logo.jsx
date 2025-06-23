import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  &.logotipo {
    user-select: none;

    img {
      transition: all 0.3s ease;
      height: 2.75rem;
      width: 15.813rem;
    }
  }

  @media screen and (max-width: 769px) {
    &.logotipo {
      img {
        height: 1.5rem;
        width: 8.625rem;
      }
    }
  }
`;

const Logo = ({ to, classe, src, alt }) => {
  return (
    <Container to={to} className={`logotipo ${classe}`}>
      <img src={src} alt={alt} />
    </Container>
  );
};

export default Logo;
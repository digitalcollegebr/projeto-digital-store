import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo-header.svg";

const Container = styled.header`
    display: flex;
    padding: 1.563rem 6.25rem;

    .logotipo {
        height: 1.875rem;
    }

    @media screen and (max-width: 769px) {
        padding: 1.25rem 1.875rem;
        justify-content: center;

        .logotipo {
            height: 1.5rem;
        }
    }
`;

const HeaderUnAuthorized = () => {
    return (
        <Container>
            <Link to="/login">
                <img src={logo} alt="Logotipo" className="logotipo" />
            </Link>
        </Container>
    );
}
 
export default HeaderUnAuthorized;
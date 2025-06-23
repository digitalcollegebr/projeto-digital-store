import styled from "styled-components";

const Container = styled.main`
    &.main-container {
        position: relative;
    }
    
    &.modal__active {
        height: 100vh;
        overflow: hidden;
    }
`;

const Main = ({children}) => {
    return (
        <Container className="main-container">
            {children}
        </Container>
    );
}
 
export default Main;
import styled from "styled-components";

const GoogleIcon = () => {
    return(
        <Container>
            <StyledImage />
        </Container>
    )
}

const Container = styled.div``;
const StyledImage = styled.div`
    background-image: url("/images/googleIcon.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    cursor: pointer;
`;
export default GoogleIcon;
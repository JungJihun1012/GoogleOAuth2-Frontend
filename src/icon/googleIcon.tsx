import styled from "styled-components";

const GoogleIcon = () => {
    return(
        <Container>
            <StyledH1>구글 로그인</StyledH1>
            <StyledImage />
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
    gap: 3rem;
`;
const StyledH1 = styled.h1`
`;
const StyledImage = styled.div`
    background-image: url("/images/googleIcon.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    cursor: pointer;
    border-radius: 50%;
    transition: all .5s;
    &:hover {
        box-shadow: 0 0 50px black;
        transition: .45s;
        width: 80px;
        height: 80px;
    }
`;
export default GoogleIcon;
import styled from "styled-components";
import GoogleIcon from "./icon/googleIcon";
import axios from "axios";
import { useEffect } from "react";

function App() {
    const getDate = async () => {
        const user = await axios.get("http://localhost:8081");

        console.log(user.data);
    }

    useEffect(() => {
        getDate();
    }, []);
    return(
        <Container>
            <GoogleIcon />
        </Container>
    )
}

const Container = styled.div``;
export default App;
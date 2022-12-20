import logo from "../assets/logo.png";
import Login from "../components/Login";
import { StyledPageContainer } from "../styles/Style";
import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <StyledPageContainer>
            <img src={logo} alt="Logo do TrackIt"/>
            <Login/>
            <Link data-test="signup-link" to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </StyledPageContainer>
    )
}


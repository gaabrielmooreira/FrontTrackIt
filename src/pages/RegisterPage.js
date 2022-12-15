import {StyledPageContainer} from "../styles/Style";
import logo from "../assets/logo.png"
import Register from "../components/Register";
import { Link } from "react-router-dom";

export default function RegisterPage(){
    return(
        <StyledPageContainer>
            <img src={logo} alt="Logo do TrackIt"/>
            <Register/>
            <Link to="/">
                <p>Já tem uma conta? Faça Login!</p>
            </Link>
        </StyledPageContainer>
    )
}


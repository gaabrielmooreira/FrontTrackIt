import { StyledForm, StyledButton,StyledInput } from "../styles/Style";

export default function Login(){
    return(
        <StyledForm>
            <StyledInput type="email" placeholder="email"/>
            <StyledInput type="password" placeholder="senha"/>
            <StyledButton type="submit">Entrar</StyledButton>
        </StyledForm>
    )
}



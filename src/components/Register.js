import { StyledForm,StyledButton,StyledInput } from "../styles/Style";

export default function Register(){
    return(
        <StyledForm>
            <StyledInput type="email" placeholder="email"/>
            <StyledInput type="password" placeholder="password"/>
            <StyledInput type="text" placeholder="name"/>
            <StyledInput type="text" placeholder="foto"/>
            <StyledButton>Cadastrar</StyledButton>
        </StyledForm>
    )
}


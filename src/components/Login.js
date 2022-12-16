import { StyledForm, StyledButton,StyledInput } from "../styles/Style";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";


export default function Login(){
    const [isLoading,setIsLoading] = useState(false);
    return(
        <StyledForm>
            <StyledInput type="email" placeholder="email" disabled={isLoading}/>
            <StyledInput type="password" placeholder="senha" disabled={isLoading}/>
            <StyledButton type="submit" disabled={isLoading}>
                {
                    isLoading ? <ThreeDots 
                        height="13" 
                        width="51" 
                        radius="9"
                        color="#FFFFFF" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                     />:"Entrar"
                }
            </StyledButton>
        </StyledForm>
    )
}



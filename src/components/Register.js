import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledForm,StyledButton,StyledInput } from "../styles/Style";
import { ThreeDots } from "react-loader-spinner";

export default function Register(){
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [image,setImage] = useState("");
    const [isLoading,setIsLoading] = useState(false);


    function registerUser(event){
        event.preventDefault();
        const promise = axios.post(URL,{email,name,image,password});
        setIsLoading(true);
        promise.then(() => {
            setIsLoading(false);
            navigate("/");
        });
        promise.catch((err) =>{
            setIsLoading(false);
            alert(err.response.data.message);
        });
    }
    
    return(
        <StyledForm onSubmit={registerUser}>
            <StyledInput onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="email" disabled={isLoading}/>
            <StyledInput onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="password" disabled={isLoading}/>
            <StyledInput onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="name" disabled={isLoading}/>
            <StyledInput onChange={(e) => setImage(e.target.value)} value={image} type="text" placeholder="foto" disabled={isLoading}/>
            <StyledButton isLoading={isLoading} type="submit" disabled={isLoading}>
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
                     />:"Cadastrar"
                }
            </StyledButton>
        </StyledForm>
    )
}


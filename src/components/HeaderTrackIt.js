import { useContext } from "react"
import styled from "styled-components"
import UserDetailsContext from "../contexts/UserDetailsContext"

export default function HeaderTrackIt(){
    const {userDetails} = useContext(UserDetailsContext);
    const {image} = userDetails;
    return(
        <HeaderContainer>
            <h1>TrackIt</h1>
            <img src={image} alt="Foto do Usuário"/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 18px;
    background-color: #126BA5;
    z-index: 1;
    h1{
        font-family: 'Playball', cursive;
        font-size: 39px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`
import styled from "styled-components"

export default function HeaderTrackIt(){
    return(
        <HeaderContainer>
            <h1>TrackIt</h1>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f15f5662080793.5a8432e3d5b6b.jpg" alt="Foto do Usuário"/>
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
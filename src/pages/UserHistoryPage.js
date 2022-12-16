import styled from "styled-components"
import FooterTrackIt from "../components/FooterTrackIt"
import HeaderTrackIt from "../components/HeaderTrackIt"

export default function UserHistoryPage(){
    return(
        <PageContainer>
            <HeaderTrackIt/>
            <ContentContainer>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </ContentContainer>
            <FooterTrackIt/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #E5E5E5;
`
const ContentContainer = styled.main`
    padding: 101px 18px;
    h2{
        font-size: 23px;
        line-height: 29px;
        color:#126BA5;
        margin-bottom: 17px;
    }
    p{
        font-size: 18px;
        color: #666666;
    }
`
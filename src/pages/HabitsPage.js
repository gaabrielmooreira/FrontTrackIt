import styled from "styled-components"
import FooterTrackIt from "../components/FooterTrackIt"
import HeaderTrackIt from "../components/HeaderTrackIt"

export default function HabitsPage(){
    return(
        <PageContainer>
            <HeaderTrackIt/>

            <CreateHabitContainer>
                <h2>Meus Hábitos</h2>
                <button>+</button>
            </CreateHabitContainer>

            <NoOneHabitContainer>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </NoOneHabitContainer>

            <FooterTrackIt/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 18px;
    background-color: #E5E5E5;
`

const CreateHabitContainer = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    button{
        width: 40px;
        height: 35px;
        font-size: 27px;
        color: #FFFFFF;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
    }
`

const NoOneHabitContainer = styled.p`
    margin-top: 29px;
    font-size: 18px;
    line-height: 22.5px;
    color: #666666;
`
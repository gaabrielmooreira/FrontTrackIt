import styled from "styled-components"
import FooterTrackIt from "../components/FooterTrackIt"
import HabitCard from "../components/HabitCard"
import HeaderTrackIt from "../components/HeaderTrackIt"
import weekdays from "../constants/weekdays"

export default function HabitsPage() {

    return (
        <PageContainer>
            <HeaderTrackIt />
            <ContentContainer>
                <CreateHabitContainer>
                    <h2>Meus Hábitos</h2>
                    <button>+</button>
                </CreateHabitContainer>
                <CreateHabitCard>
                    <input type="text" placeholder="nome do hábito" />
                    <WeekdaysContainer>
                        {weekdays.map((w) => <DayCard isMarked={false}>{w}</DayCard>)}
                    </WeekdaysContainer>
                    <ActionContainer>
                        <CancelButton>Cancelar</CancelButton>
                        <SaveButton>Salvar</SaveButton>
                    </ActionContainer>
                </CreateHabitCard>

                <HabitCard />
                <HabitCard />

                <NoOneHabitContainer>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoOneHabitContainer>
            </ContentContainer>
            <FooterTrackIt />
        </PageContainer>
    )
}

const PageContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: #E5E5E5;
`
const ContentContainer = styled.div`
    padding: 101px 18px;
`

const CreateHabitContainer = styled.div`
    margin-bottom: 20px;
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
const CreateHabitCard = styled.div`
    width: 100%;
    height: 180px;
    padding: 18px;
    background-color: #FFFFFF;
    border-radius: 5px;
    input{
        width: 100%;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin-bottom: 8px;
        font-size: 20px;
        &::placeholder{
            color: #D4D4D4;
        }
    }

`
const WeekdaysContainer = styled.div`
    display: flex;
    margin-bottom: 29px;
`
const DayCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid ${props => props.isMarked ? "#CFCFCF" : "#D4D4D4"};
    color: ${props => props.isMarked ? "#FFFFFF" : "#DBDBDB"};
    border-radius: 5px;
    background-color: ${props => props.isMarked ? "#CFCFCF" : "#FFFFFF"};
`
const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
`
const CancelButton = styled.button`
    border: none;
    color: #52B6FF;
    background-color: #FFFFFF;
    margin-right: 23px;
    &:hover{
        cursor: pointer;
    }
`
const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
    }
`
const NoOneHabitContainer = styled.p`
    margin-top: 29px;
    font-size: 18px;
    line-height: 22.5px;
    color: #666666;
`

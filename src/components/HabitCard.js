import styled from "styled-components"

export default function HabitCard(){
    const text = "Ler 1 capítulo de livro";
    const obj = [
        {weekday: 'D', isMarked: false},
        {weekday: 'S', isMarked: true},
        {weekday: 'T', isMarked: false},
        {weekday: 'Q', isMarked: true},
        {weekday: 'Q', isMarked: false},
        {weekday: 'S', isMarked: true},
        {weekday: 'S', isMarked: false}
    ]

    return(
        <CardContainer>
            <div>
                <CardText>{text}</CardText>
                <WeekdaysContainer>
                    {obj.map((o) => <DayCard isMarked={o.isMarked}>{o.weekday}</DayCard>)}
                </WeekdaysContainer>
            </div>

            <ion-icon name="trash-outline"></ion-icon>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
    height: 91px;
    padding: 11px 11px 15px 15px;
    background-color: #FFFFFF;
    border-radius: 5px;
    ion-icon{
        width: 13px;
        height: 15px;
        &:hover{
            cursor: pointer;
        }
    }
`
const CardText = styled.h3`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
`
const WeekdaysContainer = styled.div`
    display: flex;
`
const DayCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid ${props => props.isMarked ? "#CFCFCF":"#D4D4D4"};
    color: ${props => props.isMarked ? "#FFFFFF":"#DBDBDB"};
    border-radius: 5px;
    background-color: ${props => props.isMarked ? "#CFCFCF":"#FFFFFF"};
`
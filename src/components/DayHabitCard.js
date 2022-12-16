import styled from "styled-components"

export default function DayHabitCard() {
    const text = "Ler 1 capítulo de livro";
    return (
        <DayHabitCardContainer>
            <CardInfo>
                <CardText>{text}</CardText>
                <p>Sequência atual: <span>4</span></p>
                <p>Seu recorde: <span>5</span></p>
            </CardInfo>
            <ion-icon name="checkbox"></ion-icon>
        </DayHabitCardContainer>
    )
}

const DayHabitCardContainer = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 5px;
    width: 100%;
    height: 94px;
    padding: 13px;
    ion-icon{
        width: 81px;
        height: 81px;
        color: #EBEBEB;
    }
`
const CardInfo = styled.div`
    p{
        font-size: 13px;
        line-height: 16px;
        color: #666666;
    }
    span{
        color: #666666;
    }
`
const CardText = styled.h3`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
`

import styled from "styled-components"

export default function DayHabitCard({id,name,currentSequence,highestSequence,done,handleMarkHabit}) {
    
    return (
        <DayHabitCardContainer data-test="today-habit-container" isDone={done}>
            <div>
                <CardText data-test="today-habit-name">{name}</CardText>
                <CurrentSequence data-test="today-habit-sequence" isDone={done}>
                    Sequência atual: 
                    <span>
                        {(currentSequence > 1) ? `${currentSequence} dias`:`${currentSequence} dia`}
                    </span>
                </CurrentSequence>
                <HighestSequence data-test="today-habit-record" isCurrent={currentSequence === highestSequence ? true:false}>
                    Seu recorde: 
                    <span>
                        {(highestSequence > 1) ? `${highestSequence} dias`:`${highestSequence} dia`}
                    </span>
                </HighestSequence>
            </div>
            <ion-icon data-test="today-habit-check-btn" onClick={() => handleMarkHabit(id,done)} name="checkbox"></ion-icon>
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
        color: ${props => props.isDone ? "#8FC549":"#EBEBEB"};
    }
`
const CurrentSequence = styled.p`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    span{
        color: ${props => props.isDone ? "#8FC549":"#666666"};
    }
`
const HighestSequence = styled.p`
    font-size: 13px;
    line-height: 16px;
    color: #666666;
    span{
        color: ${props => props.isCurrent ? "#8FC549":"#666666"};
    }
`
const CardText = styled.h3`
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
`

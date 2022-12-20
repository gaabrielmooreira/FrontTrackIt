import styled from "styled-components";

export default function WeekdayCard({markDay,weekday,index,markedDays,isSaveLoading}){
    return (
        <WeekdayCardContainer data-test="habit-day" onClick={() => markDay(index)} isMarked={markedDays.includes(index)} disabled={isSaveLoading}>
            {weekday}
        </WeekdayCardContainer>
    )
}

const WeekdayCardContainer = styled.button`
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
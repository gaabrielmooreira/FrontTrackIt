import { useState } from "react"
import styled from "styled-components"
import weekdays from "../constants/weekdays"

export default function HabitCard({id,name,days,deleteHabit}){
    const [screenConfirm,setScreenConfirm] = useState(false);

    function confirmDelete(){
        deleteHabit(id);
        setScreenConfirm(false);
    }

    function cancelDelete(){
        setScreenConfirm(false);
    }

    return(
        <CardContainer data-test="habit-container">
            <div>
                <CardText data-test="habit-name">{name}</CardText>
                <WeekdaysContainer>
                    {weekdays.map((w,index) => <DayCard data-test="habit-day" key={index} isMarked={days.includes(index)}>{w}</DayCard>)}
                </WeekdaysContainer>
            </div>

            <ion-icon data-test="habit-delete-btn" onClick={() => setScreenConfirm(true)} name="trash-outline"></ion-icon>

            {screenConfirm && 
                <DarkContainer>
                    <ConfirmationContainer>
                        <h3>Você deseja mesmo deletar esse hábito?</h3>
                        <div>
                            <ConfirmButton onClick={confirmDelete}>Confirm</ConfirmButton>
                            <CancelButton onClick={cancelDelete}>Cancel</CancelButton>
                        </div>
                    </ConfirmationContainer>
                </DarkContainer>
            }
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
const DarkContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
`
const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #FFFFFF;
    transform: translate(-50%,-50%);
    width: 300px;
    height: 120px;
    border-radius: 5px;
    h3{
        font-size: 12px;
    }
    div{
        display: flex;
        margin-top: 20px;
    }

`
const ConfirmButton = styled.button`
    background-color: #52B6FF;
    border: none;
    border-radius: 10px;
    width: 80px;
    height: 25px;
    color: #FFFFFF;
`
const CancelButton = styled.button`
    background-color: red;
    border: none;
    border-radius: 10px;
    margin-left: 20px;
    width: 80px;
    height: 25px;
    color: #FFFFFF;
`
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import DayHabitCard from "../components/DayHabitCard";
import FooterTrackIt from "../components/FooterTrackIt"
import HeaderTrackIt from "../components/HeaderTrackIt"
import AuthContext from "../contexts/AuthContext";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import PercentageContext from "../contexts/PercentageContext";

export default function TodayPage() {
    const {token} = useContext(AuthContext);
    const {percentage,setPercentage} = useContext(PercentageContext);

    const [todayList,setTodayList] = useState([]);
    const [isHabitChanged,setIsHabitChanged] = useState(false);

    const d = dayjs();
    dayjs.extend(weekday);
    
    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL,config);
        promise.then(res => {
            const newTodayList = res.data;
            setTodayList(newTodayList);
            let count = newTodayList.length;
            newTodayList.forEach(element => {
                if(element.done === false) count--;
            });
            setPercentage((count/newTodayList.length)*100);
        });
        promise.catch(err => console.log(err));
    },[isHabitChanged]);

    function handleMarkHabit(habitId,done){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const body = {};
        let URL = "";
        if(done === false){
            URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`
        } else {
            URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`
        }
        const promise = axios.post(URL,body,config);
        promise.then(() => {
            if(isHabitChanged === false){
                setIsHabitChanged(true);
            }else{
                setIsHabitChanged(false);
            }
            console.log("Sucesso");
        });
        promise.catch(() => console.log("Erro"));
    }

    function dayOfWeek(){
        switch (d.weekday()){
            case 0:
                return "Domingo";
            case 1:
                return "Segunda";
            case 2:
                return "Terça";
            case 3:
                return "Quarta";
            case 4:
                return "Quinta";
            case 5:
                return "Sexta";
            case 6:
                return "Sábado";
        }
    }

    return (
        <PageContainer>
            <HeaderTrackIt />
            <ContentContainer>
                <DayInfos>
                    <h2>{dayOfWeek()}, {d.format('DD/MM')}</h2>
                    <HabitControl atLeastOneDone={percentage === 0 ? false:true}>
                        {percentage === 0 ? "Nenhum hábito concluído ainda":`${percentage.toFixed(0)}% dos hábitos concluídos`}
                    </HabitControl>
                </DayInfos>
                {todayList.map((h) => <DayHabitCard 
                    key={h.id} 
                    id={h.id}
                    currentSequence={h.currentSequence}
                    highestSequence={h.highestSequence}
                    name={h.name}
                    done={h.done}
                    handleMarkHabit={handleMarkHabit}
                />)}
            </ContentContainer>
            <FooterTrackIt />
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
`
const DayInfos = styled.div`
    margin-bottom: 20px;
    h2{
        font-size: 23px;
        line-height: 29px;
        color:#126BA5;
    }
`
const HabitControl = styled.p`
    font-size: 18px;
    line-height: 22.5px;
    color: ${props => props.atLeastOneDone ? "#8FC549":"#BABABA"};
`



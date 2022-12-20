import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import DayHabitCard from "../components/DayHabitCard";
import FooterTrackIt from "../components/FooterTrackIt"
import HeaderTrackIt from "../components/HeaderTrackIt"
import AuthContext from "../contexts/AuthContext";

export default function TodayPage() {
    const {token} = useContext(AuthContext);
    const [todayList,setTodayList] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL,config);
        promise.then(res => setTodayList(res.data));
        promise.catch(err => console.log(err));
    },[]);
    return (
        <PageContainer>
            <HeaderTrackIt />
            <ContentContainer>
                <DayInfos>
                    <h2>Segunda, 17/05</h2>
                    <HabitControl>Nenhum hábito concluído ainda</HabitControl>
                </DayInfos>
                {todayList.map((h) => <DayHabitCard 
                    key={h.id} 
                    id={h.id}
                    currentSequence={h.currentSequence}
                    highestSequence={h.highestSequence}
                    name={h.name}
                    done={h.done}
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
    color: #BABABA;
`



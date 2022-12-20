import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import FooterTrackIt from "../components/FooterTrackIt"
import HabitCard from "../components/HabitCard"
import HeaderTrackIt from "../components/HeaderTrackIt"
import weekdays from "../constants/weekdays"
import WeekdayCard from "../components/WeekdayCard"
import AuthContext from "../contexts/AuthContext"
import { ThreeDots } from "react-loader-spinner"

export default function HabitsPage() {
    const { token } = useContext(AuthContext);

    const [isCreateCardClosed, setIsCreateCardClosed] = useState(true);
    const [habitName, setHabitName] = useState("");
    const [markedDays, setMarkedDays] = useState([]);
    const [habitList, setHabitList] = useState([]);
    const [isSaveLoading, setIsSaveLoading] = useState(false);

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const promise = axios.get(URL, config);
        promise.then(res => setHabitList(res.data));
        promise.catch(err => console.log(err));
    }, [saveHabit, deleteHabit, token]);

    function saveHabit() {
        setIsSaveLoading(true);
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const body = {
            name: habitName,
            days: markedDays
        };
        const promise = axios.post(URL, body, config);
        promise.then(() => {
            setHabitName("");
            setMarkedDays([]);
            setIsSaveLoading(false);
            setIsCreateCardClosed(true);
        });
        promise.catch(() => {
            if (habitName === "" || markedDays.length === 0) {
                alert("Preencha os dados do hábito, nome e os dias.");
            }
            setIsSaveLoading(false);
        });
    }

    function markDay(index) {
        if (markedDays.includes(index)) {
            const newArr = markedDays.filter((day) => day !== index);
            setMarkedDays(newArr);
        } else {
            setMarkedDays([...markedDays, index]);
        }
    }

    function deleteHabit(habitId) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.delete(URL, config);
        promise.then(() => console.log("Deletado com sucesso."));
        promise.catch((err) => console.log(err.response.data));

    }

    return (
        <PageContainer>
            <HeaderTrackIt />

            <ContentContainer>
                <CreateHabitContainer>
                    <h2>Meus Hábitos</h2>
                    <button onClick={() => setIsCreateCardClosed(false)}>+</button>
                </CreateHabitContainer>

                {!isCreateCardClosed &&
                    <CreateHabitCard>
                        <input
                            onChange={(e) => setHabitName(e.target.value)}
                            value={habitName}
                            type="text"
                            placeholder="nome do hábito"
                            disabled={isSaveLoading}
                            required
                        />
                        <WeekdaysContainer>
                            {weekdays.map((w, index) => <WeekdayCard
                                key={index}
                                markDay={markDay}
                                weekday={w}
                                index={index}
                                markedDays={markedDays}
                                isSaveLoading={isSaveLoading}
                            />)
                            }
                        </WeekdaysContainer>
                        <ActionContainer>
                            <CancelButton onClick={() => setIsCreateCardClosed(true)} disabled={isSaveLoading}>Cancelar</CancelButton>
                            <SaveButton onClick={saveHabit} disabled={isSaveLoading}>
                                {isSaveLoading ? <ThreeDots
                                    height="13"
                                    width="51"
                                    radius="9"
                                    color="#FFFFFF"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                /> : "Salvar"}
                            </SaveButton>
                        </ActionContainer>
                    </CreateHabitCard>
                }

                {habitList.map((habit) => <HabitCard key={habit.id} id={habit.id} name={habit.name} days={habit.days} deleteHabit={deleteHabit} />)}

                {habitList.length === 0 &&
                    <NoOneHabitContainer>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </NoOneHabitContainer>
                }
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
        &:disabled{
            background-color: #F2F2F2;
            color: #B3B3B3;
        }
    }

`
const WeekdaysContainer = styled.div`
    display: flex;
    margin-bottom: 29px;
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
    display: flex;
    align-items: center;
    justify-content: center;
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

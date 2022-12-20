import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import PercentageContext from "../contexts/PercentageContext";

export default function FooterTrackIt() {
    const {percentage} = useContext(PercentageContext);
    return (
        <FooterContainer>
            <LinkContainer>
                <Link to="/habitos">
                    Hábitos
                </Link>
            </LinkContainer>

            <TodayLinkContainer>
                <Link to="/hoje">
                    <CircularProgressbar
                        value={percentage}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </Link>
            </TodayLinkContainer>

            <LinkContainer>
                <Link to="/historico">
                    Histórico
                </Link>
            </LinkContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFFFFF;
    z-index: 1;
`
const LinkContainer = styled.div`
    a{
        font-size: 18px;
        line-height: 22.5px;
        text-align: center;
        color:#52B6FF;
        text-decoration: none;
    }
`
const TodayLinkContainer = styled.div`
    position: relative;
    background-color: #52B6FF;
    width: 91px;
    height: 91px;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    a{
        font-size: 18px;
        line-height: 22.5px;
        text-decoration: none;
        color: #FFFFFF;
    }
`